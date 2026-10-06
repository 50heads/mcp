# Question types

Every question has `type`, `text` (8 to 600 characters), `language` (such as `en` or `pt-BR`), and optionally `context` (one line, 120 characters), `stimulus` (an image or a line of text shown above the question), `n` (heads, default 50), `tier` (1 to 3, default 1), `rush` and `targeting`.

The format multiplier is part of the price: per answer = tier base × length × format, plus 5 credits an image.

Five-second test: add `exposure_ms` (usually 5000) to an image stimulus on single_choice, multi_choice, yes_mostly_no, scale_1_5, reaction or free_text. The app shows the image for that long, hides it, then asks, so the answer is a first impression or what people remember. × 1.3.
Every type except `free_text` can ask for a short written reason with each answer: `reason: "optional"` (format + 0.3) or `"required"` (format + 0.6), 10 to 140 characters. Reasons come back on each answer, translated into your language when heads wrote in another, and `get_results` summarises them (themes with counts and quotes, a sentiment split and a takeaway). Use it instead of a follow-up when you want the which and the why from the same heads.

## Single choice (`single_choice`)

- Use: Pick one of several: names, headlines, taglines, colours.
- Options: 2 to 8 options, 40 characters each; images optional. Two to four reads best.
- Answer: One option per head; the distribution counts each option.
- Tier: any. Format × 1.0.

```json
{
  "type": "single_choice",
  "text": "Which name sounds most like a bakery?",
  "language": "en",
  "options": [
    {
      "label": "Crumb & Co"
    },
    {
      "label": "Loafers"
    },
    {
      "label": "Proof"
    }
  ],
  "n": 50
}
```

## Multiple choice (`multi_choice`)

- Use: Tick all that apply: which features matter, which words fit.
- Options: 2 to 8 options, 40 characters each. Shares add up to more than 100%.
- Answer: Any number of options per head; each option's share is of all heads.
- Tier: any. Format × 1.1.

```json
{
  "type": "multi_choice",
  "text": "Which of these would make you try a new coffee shop?",
  "language": "en",
  "options": [
    {
      "label": "Oat milk at no extra cost"
    },
    {
      "label": "Quiet seating"
    },
    {
      "label": "Loyalty card"
    }
  ],
  "n": 50
}
```

## A or B image (`ab_image`)

- Use: Two images side by side: menus, logos, screenshots, packaging.
- Options: Exactly 2 options, each with an image_url (https, or a pre-signed upload). Labels optional.
- Answer: One image per head.
- Tier: any. Format × 1.0.

```json
{
  "type": "ab_image",
  "text": "Which menu would you order from?",
  "language": "en",
  "options": [
    {
      "label": "Menu A",
      "image_url": "https://example.com/menu-a.png"
    },
    {
      "label": "Menu B",
      "image_url": "https://example.com/menu-b.png"
    }
  ],
  "n": 50
}
```

## Pairwise (`pairwise`)

- Use: Compare options two at a time when there are too many to show at once.
- Options: 2 to 8 options; each head sees one pair, balanced so every pair is seen about equally.
- Answer: One pick per pair. With 3 or more options each row has count (wins), share (win share), appearances, a Bradley–Terry strength and a rank.
- Tier: any. Format × 1.1.

```json
{
  "type": "pairwise",
  "text": "Which subject line would you open first?",
  "language": "en",
  "options": [
    {
      "label": "Your order is on its way"
    },
    {
      "label": "Good news: it has shipped"
    },
    {
      "label": "Tracking number inside"
    }
  ],
  "n": 100
}
```

## Scale 1 to 5 (`scale_1_5`)

- Use: How strongly: clarity, appeal, trust. Report the mean and the split.
- Options: Fixed: 1, 2, 3, 4, 5. Do not send options.
- Answer: A number from 1 to 5; results include the mean.
- Tier: any. Format × 1.0.

```json
{
  "type": "scale_1_5",
  "text": "How clear is this sentence? 1 is not clear, 5 is very clear.",
  "context": "Your parcel will be left in a safe place if you are out.",
  "language": "en",
  "n": 50
}
```

## Ranking (`ranking`)

- Use: Put options in order of preference.
- Options: 2 to 8 options; keep to five or fewer for a five-second answer.
- Answer: A full order per head; the distribution carries each option's average rank.
- Tier: any. Format × 1.3.

```json
{
  "type": "ranking",
  "text": "Rank these pizza toppings, favourite first.",
  "language": "en",
  "options": [
    {
      "label": "Mushroom"
    },
    {
      "label": "Pepperoni"
    },
    {
      "label": "Olives"
    },
    {
      "label": "Pineapple"
    }
  ],
  "n": 50
}
```

## Yes, mostly or no (`yes_mostly_no`)

- Use: A quick check with room for a middle answer: does this make sense, would you trust it.
- Options: Fixed: Yes, Mostly, No. Do not send options.
- Answer: One of the three.
- Tier: any. Format × 1.0.

```json
{
  "type": "yes_mostly_no",
  "text": "Does this button label tell you what will happen?",
  "context": "Button: Save and continue",
  "language": "en",
  "n": 50
}
```

## Free text (`free_text`)

- Use: Why, in the head's own words. Best as a follow-up to a choice.
- Options: No options. Needs Tier 2 or 3. Answers are up to 200 characters.
- Answer: Short text per head; results carry the texts and a summary.
- Tier: 2 or 3. Format × 2.0.

```json
{
  "type": "free_text",
  "text": "Why would you order from Menu B?",
  "language": "en",
  "n": 20,
  "tier": 2
}
```

## Click test (`click_test`)

- Use: Where people look or tap first on a page, ad, pack or screen. Results are a heatmap.
- Options: No options. stimulus.image_url is required; max_taps 1 to 5 (default 1).
- Answer: One to max_taps points per head, 0–1 from the top left. Results carry every tap, the busiest areas with counts and a heatmap PNG.
- Tier: any. Format × 1.5.

```json
{
  "type": "click_test",
  "text": "Where would you tap to buy this?",
  "language": "en",
  "stimulus": {
    "image_url": "https://example.com/product-page.png"
  },
  "max_taps": 1,
  "n": 50
}
```

## Reaction (`reaction`)

- Use: A gut reaction to an image or line: a logo, a cover, an ad. Five faces drawn as glyphs.
- Options: Fixed: Love it, Like it, Not sure, Dislike it, Hate it. Do not send options.
- Answer: One of the five; results add a positive, neutral and negative split.
- Tier: any. Format × 1.0.

```json
{
  "type": "reaction",
  "text": "How does this cover make you feel?",
  "language": "en",
  "stimulus": {
    "image_url": "https://example.com/cover.png"
  },
  "n": 50
}
```
