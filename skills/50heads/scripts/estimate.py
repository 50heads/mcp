#!/usr/bin/env python3
"""Price a 50heads question before asking it. Never spends.

Usage:
  python3 scripts/estimate.py question.json
  echo '{"type":"single_choice","text":"Which name sounds most like a bakery?","language":"en","options":[{"label":"Crumb & Co"},{"label":"Loafers"}]}' | python3 scripts/estimate.py -

The question is the same object the MCP `estimate` and `ask` tools take (see
references/question-types.md). FIFTYHEADS_API_KEY is optional: estimates are public, but a key
gives a higher rate limit. FIFTYHEADS_API_URL overrides https://api.50heads.com.
Standard library only.
"""

import json
import os
import sys
import urllib.error
import urllib.request

API_URL = os.environ.get("FIFTYHEADS_API_URL", "https://api.50heads.com").rstrip("/")


def user_agent():
    """50heads-skill/<version>. Cloudflare answers 1010 to the bare Python-urllib agent."""
    skill = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "SKILL.md")
    version = "dev"
    try:
        with open(skill, encoding="utf-8") as handle:
            for line in handle:
                stripped = line.strip()
                if stripped.startswith("version:"):
                    version = stripped.split(":", 1)[1].strip().strip("\"'")
                    break
    except OSError:
        pass
    return "50heads-skill/" + version


def to_draft(q):
    """The MCP question object (snake_case) to the API draft (camelCase)."""
    draft = {
        "type": q["type"],
        "text": q["text"],
        "language": q.get("language", "en"),
        "options": [
            {k: v for k, v in {"label": o.get("label", ""), "imageUrl": o.get("image_url")}.items() if v is not None}
            for o in q.get("options", [])
        ],
        "n": q.get("n", 50),
        "tier": q.get("tier", 2 if q["type"] == "free_text" else 1),
        "rush": q.get("rush", False),
        "neither": q.get("neither", False),
    }
    if q.get("context"):
        draft["context"] = q["context"]
    stimulus = q.get("stimulus") or {}
    if stimulus:
        draft["stimulus"] = {k: v for k, v in {"imageUrl": stimulus.get("image_url"), "text": stimulus.get("text")}.items() if v}
    targeting = q.get("targeting") or {}
    if targeting:
        draft["targeting"] = {"countries": targeting.get("country", []), "tags": targeting.get("tags", [])}
    return draft


def money(price):
    """{"amount": 12.70, "currency": "USD"} as "$12.70", "£10.00", "11,80 €"."""
    amount, currency = price["amount"], price["currency"]
    if currency == "EUR":
        return ("%.2f" % amount).replace(".", ",") + "\u00a0€"
    symbol = {"GBP": "£", "USD": "$", "CAD": "$"}.get(currency)
    return symbol + "%.2f" % amount if symbol else "%.2f %s" % (amount, currency)


def main():
    if len(sys.argv) != 2:
        print(__doc__.strip(), file=sys.stderr)
        return 2
    source = sys.stdin if sys.argv[1] == "-" else open(sys.argv[1], encoding="utf-8")
    question = json.load(source)
    body = json.dumps({"draft": to_draft(question), "surface": "web"}).encode("utf-8")
    headers = {
        "content-type": "application/json",
        "accept": "application/json",
        "User-Agent": user_agent(),
        "x-50heads-source": "mcp",
    }
    key = os.environ.get("FIFTYHEADS_API_KEY")
    if key:
        headers["authorization"] = "Bearer " + key
    request = urllib.request.Request(API_URL + "/v1/billing/estimate", data=body, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            quote = json.load(response)
    except urllib.error.HTTPError as err:
        raw = err.read().decode("utf-8", "replace")
        message = "The estimate failed (HTTP %d)." % err.code
        try:
            detail = json.loads(raw or "{}").get("error", {})
            if isinstance(detail, dict) and detail.get("message"):
                message = detail["message"]
        except json.JSONDecodeError:
            pass
        print(message, file=sys.stderr)
        return 1
    n = question.get("n", 50)
    # The price is in the key's account currency (credits alone when the API sends none).
    cost = "%d credits" % quote["creditsTotal"]
    if quote.get("price"):
        cost += " (%s)" % money(quote["price"])
    print("%d answers, about %d minutes, %s." % (n, quote["etaMinutes"], cost))
    print(quote.get("breakdownLine", ""))
    for issue in quote.get("validation", []):
        print("Fix: " + issue["message"])
    return 0


if __name__ == "__main__":
    sys.exit(main())
