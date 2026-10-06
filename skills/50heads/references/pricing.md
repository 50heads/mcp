# Pricing

Prices are in credits. `estimate`, `balance` and 50heads://pricing show them in your account currency at the day's rate. You pay per accepted answer; unanswered heads are refunded.

Per answer = tier base × length × format, plus images and targeting traits, times 1.5 for rush. Total = per answer × heads.

| Tier | Heads | Credits an answer | Credits for 50 answers |
| --- | --- | --- | --- |
| 1 | phone-verified | 20 | 1000 |
| 2 | ID-verified | 42 | 2100 |
| 3 | established heads | 80 | 4000 |

Length (question, context and options together): up to 150 characters × 1.0, up to 300 × 1.1, up to 600 × 1.25.

Format: `single_choice` × 1.0, `multi_choice` × 1.1, `ab_image` × 1.0, `pairwise` × 1.1, `scale_1_5` × 1.0, `ranking` × 1.3, `yes_mostly_no` × 1.0, `free_text` × 2.0, `click_test` × 1.5, `reaction` × 1.0.

A reason with every answer (`reason`, not for free_text) adds to the format: optional + 0.3, required + 0.6. A required reason on a Tier 1 single choice is 20 × 1.6 = 32 credits an answer. Heads get the same share of the higher price.

Images: 7 credits an answer for each image (audio counts the same). Rush: × 1.5. Five-second test: × 1.3.

Targeting: countries are free. Age, gender and each tag group are one trait each, 3 credits an answer per trait, up to 4, at any tier (PickFu charges about $0.40 per trait). See 50heads://targeting.

Heads: 10 to 5000, default 50.

Every connection has a daily spend cap (default 5,000 credits), set when you connect and editable in the dashboard. Call `balance` to see what is left.

Always call `estimate` first: it returns the exact price, the time and any fixes the question needs, and never spends.
