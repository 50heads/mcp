# 50heads tools beyond asking

The core loop is `estimate`, `ask`, then the task (or `wait_for_results`) and `get_results`. These tools cover the rest.

## Before asking

- `upload_image`: for a local file or a generated image, send it as base64 in `data` (JPEG, PNG or WebP, up to 5 MB; about 700 KB through the hosted server, which takes 1 MB requests). For an image already online, pass `image_url` and 50heads copies it. Use the returned `image_url` in the question. Costs nothing.
- `list_audiences`: interest audiences, panels of heads who proved they fit (UK commuter cyclists, for example). Put an id in `question.audience` to ask one instead of targeting; the price is the audience's at the minimum grade.
- `list_targeting`: countries with the languages their heads read and pool size bands, and the tag ids you can target at Tier 2 and 3. Each condition shrinks the pool; `estimate` shows `pool_size`.
- `build_ask_link`: when a person should press Ask themselves, give them this link. It opens the portal composer with the question filled in and asks nothing. It also opens a template (`template_id`), a follow-up (`follow_up_of`) or a re-ask of the unanswered part (`reask`).
- `templates` and `list_questions`: a fixed-price template may fit, and a recent answer may already cover the question.

## After the answers

- `get_answers`: individual answers, 50 a page (up to 200), newest first, with `next_cursor`. Filter by `option` (0 is the first), `tier`, `country`, `age_band` or a keyword `q` in written answers and reasons. Country and age filters show nothing when fewer than 5 answers match, so no head can be singled out.
- `add_heads`: when the margin is under 10 points with 50 heads, ask more of the same question instead of a new one. It needs its own fresh `idempotency_key` and spends at the same price per answer; say the price and time before you do it when a person is present.
- `flag_answer`: an answer that is off-topic, low effort, offensive or a duplicate, by its `attestation_ref`. Upheld flags remove the answer and refund it. Never flag an answer because you dislike it.
- `export`: `csv` has every answer (with the same filters as `get_answers`); `pdf` is a one-page report and `png` the result card. The API serves all three.
- `cancel`: stops a live question and refunds the heads who have not answered.

## Help

- `search_help`: the help centre, for questions about credits, refunds, verification, tiers, the API or this server.
- `send_feedback`: tells support about a problem or an idea. Signed out, add `email`. Leave out personal data about other people.

`add_heads`, `flag_answer` and `export` (CSV, PDF and PNG) are served by the API. Use them when the result calls for it.
