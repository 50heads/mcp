---
name: 50heads
description: Ask fifty verified people a five-second question and get a distribution back; use when the work in hand needs a human preference, first impression or sanity check that a model cannot supply.
license: MIT
metadata:
  version: "2026.1009.1"
  homepage: https://50heads.com/agents
allowed-tools: "50heads:*"
---

# Asking 50heads

50heads puts one short question to verified people on their phones and returns how they split. Answers cost credits, priced in your currency; fifty take about ten minutes.

## When to ask

Ask when the answer is a human reaction: which name, headline, image or menu people prefer, whether copy is clear, what they notice first. Never ask for facts, predictions, advice or research. Before asking again, call `list_questions` and reuse a recent answer.

## Eight rules for a good question

1. One question a head can answer in five seconds.
2. Ask about a preference or first impression, never a fact.
3. Show the thing: images (`ab_image`, `upload_image`) for anything visual.
4. Keep options short, parallel and few: two to four is best. Add Neither when a forced pick would mislead.
5. Word it neutrally. No leading words, no hint of the answer you want.
6. Put background in `context`, one line, only when a head needs it.
7. Pick the type that fits: `single_choice` to pick, `pairwise` for two, `ranking` for order, `scale_1_5` for strength, `free_text` (Tier 2) for why.
8. Match heads and tier to the stakes: 50 at Tier 1 for a quick read, 100 or more or Tier 2 for a decision; target the countries and language of the real audience.

## How to ask

1. Call `estimate` and, when a person is present, show them the price and time together: "50 answers, about 10 minutes, $12.70."
2. Call `ask` with a fresh UUID as `idempotency_key`. Reuse that key if you retry.
3. Wait on the task, or call `wait_for_results` on older hosts. `get_results` shows it while live.

## Reading results

Lead with the winner, the margin in points and the confidence. With 50 heads a margin under 10 points is noise: say so and suggest more heads, not a verdict. Report underfilled as underfilled. Quote the split, not adjectives.

## Worked example

"Which menu would you order from?" with two menu photos, `ab_image`, 50 heads, Tier 1. Menu B 68%, Menu A 32%: "Menu B wins by 36 points. Confidence high." Follow up with 20 Tier 2 heads saying why.

## Avoid

- Double questions ("Is it clear and friendly?").
- Yes-or-no questions that lead.
- Asking for personal data or anything that identifies someone.
- Re-asking the same question to fish for a different answer.

More: `references/question-types.md`, `pricing.md`, `tools.md`.
