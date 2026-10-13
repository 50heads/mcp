---
name: 50heads
description: Ask fifty verified people a five-second question and get a distribution back; use when the work in hand needs a human preference, first impression or sanity check that a model cannot supply.
license: MIT
metadata:
  version: "2026.1013.2"
  homepage: https://50heads.com/agents
allowed-tools: "50heads:*"
---

# Asking 50heads

50heads puts one short question to verified people and shows what they think.

## When to ask

Ask when the answer is a human reaction: which name, headline, image or menu people prefer, whether copy is clear, what they notice first. Never ask for facts, predictions, advice or research. Check recent `results` (`list`) first.

## Eight rules for a good question

1. One question a head can answer in five seconds.
2. Ask about a preference or first impression, never a fact.
3. Show the thing: images (`ab_image`, `upload_image`) for anything visual.
4. Keep options short, parallel and few: two to four is best. Add Neither when a forced pick would mislead.
5. Word it neutrally, with no hint of the answer you want.
6. Put needed background in `context`, one line.
7. Pick the type that fits: `single_choice` to pick, `pairwise` for two, `ranking` for order, `scale_1_5` for strength, `yes_no` with `go_rule` to approve, `free_text` (Tier 2) for why.
8. Match heads and tier to the stakes: 50 at Tier 1 for a quick read, 100 or more or Tier 2 for a decision. Target the real audience's countries and language.

## How to ask

1. Call `estimate` (`quote`); with a person present, show the price: "50 answers, $12.70." Don't promise a time.
2. Call `ask` with a fresh UUID as `idempotency_key`. Reuse it to retry.
3. Wait on the task (older hosts: `results`, `wait`).

## Reading results

Lead with the winner, the margin in points and the confidence. With 50 heads a margin under 10 points is noise: say so and suggest more heads. Report underfilled as underfilled. Quote the percentages, not adjectives.

With a `go_rule`, lead with the `verdict`: go, no go or unclear against the asker's line. `head_to_head` says who beats whom; overlapping ranges mean the lead may be chance.

## Worked example

"Which menu would you order from?": two photos, `ab_image`, 50 heads, Tier 1. B 68%, A 32%: "Menu B wins by 36 points. Confidence high."

## Avoid

- Double questions ("Is it clear and friendly?").
- Personal data, or anything that identifies someone.
- Re-asking to fish for a different answer.

## Your data

We don't use your questions, the answers you buy or the reasons heads write to train AI models, and we don't sell them.

More: `references/question-types.md`, `pricing.md`, `tools.md`.
