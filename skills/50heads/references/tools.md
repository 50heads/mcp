# 50heads tools beyond asking

50heads has nine tools, and every tool takes an `action` plus that action's own arguments: `estimate`, `ask`, `results`, `questions`, `projects`, `webhooks`, `organization`, `audit` and `help`. Below, "`results` action `get`" means the tool `results` called with `action: "get"`. Each action is checked against its own scope, so a connection can read without being able to change anything.

The core loop is `estimate` action `quote`, `ask` action `ask`, then the task (or `results` action `wait`) and `results` action `get`. These actions cover the rest.

## Before asking

- `estimate` action `quote`: price, time and any fixes for a question; never spends. `estimate` action `balance`: your credits, what live questions have reserved and what is left under the connection's daily cap; check it before asking something large.
- `ask` action `upload_image`: for a local file or a generated image, send it as base64 in `data` (JPEG, PNG or WebP, up to 5 MB; about 700 KB through the hosted server, which takes 1 MB requests). For an image already online, pass `image_url` and 50heads copies it. Use the returned `image_url` in the question. Costs nothing.
- `estimate` action `audiences`: interest audiences, panels of heads who proved they fit (UK commuter cyclists, for example). Put an id in `question.audience` to ask one instead of targeting; the price is the audience's at the minimum grade.
- `estimate` action `targeting`: countries with the languages their heads read and pool size bands, and the tag ids you can target at Tier 2 and 3. Each condition shrinks the pool; `estimate` action `quote` shows `pool_size`.
- `ask` action `build_link`: when a person should press Ask themselves, give them this link. It opens the portal composer with the question filled in and asks nothing. It also opens a template (`template_id`), a follow-up (`follow_up_of`) or a re-ask of the unanswered part (`reask`).
- `estimate` action `templates` and `results` action `list`: a fixed-price template may fit, and a recent answer may already cover the question. `results` action `list` takes `set_id` to list one set's questions in order.
- `ask` action `set`: two to ten questions for the person's own audience behind one link, answered in order, about five seconds each. Same question shapes as `ask` action `ask` without tier, rush, targeting, reasons or free text; `max_answers`, `open_for_days`, `shown_as` and `public_results` are set once for the set. Returns the link, the `question_ids` in order and the reserve (questions × max answers × 5 credits). Results are per question.

## Go or no go, and who beats whom

- `go_rule` on a `yes_no` or `yes_mostly_no` question: `{ "go_above": 0.6, "min_answers": 40 }` means go when Yes is above 60%, with at least 40 answers. `go_above` is a whole percentage from 0.5 to 0.95; `min_answers` is at least 5 and at most `n`, and defaults to 80% of `n`. On `yes_mostly_no`, Mostly counts as half a Yes. Use it for approval-style questions, where you will act on the answer: "Is this label clear enough to ship?" Set it before asking: the line cannot move once the question is live, and it costs nothing extra. Other types refuse it.
- `verdict` in the results: `go` when the whole 95% range on the Yes share (`low` to `high`) is above `go_above`, `no_go` when it is all at or below it, otherwise `unclear`, with `reason` `too_few` (fewer than `min_answers`) or `too_close` (the range crosses the line; `questions` action `add_heads` can settle it). The summary note opens with the same sentence. Report it as how these heads answered against the line, not as a fact.
- `head_to_head` for `ranking`, and `pairwise` with 3 or more options: `share[i][j]` is the share of people who compared options i and j and put i above j, and `n[i][j]` how many compared them. Use it to say who beats whom, not just who came first.
- Pairwise rows also carry `low` and `high`, a 95% range on each win share. When the top two ranges overlap, the top two are close and the lead may be chance.

## After the answers

- `results` action `answers`: individual answers, 50 a page (up to 200), newest first, with `next_cursor`. Filter by `option` (0 is the first), `tier`, `country`, `age_band` or a keyword `q` in written answers and reasons. Country and age filters show nothing when fewer than 5 answers match, so no head can be singled out.
- `questions` action `add_heads`: when the margin is under 10 points with 50 heads, ask more of the same question instead of a new one. It needs its own fresh `idempotency_key` and spends at the same price per answer; say the price and time before you do it when a person is present.
- `questions` action `flag_answer`: an answer that is off-topic, low effort, offensive or a duplicate, by its `attestation_ref`. Upheld flags remove the answer and refund it. Never flag an answer because you dislike it.
- `results` action `export`: `csv` has every answer (with the same filters as `results` action `answers`); `jsonl` has the same answers as JSON lines, one object per answer with `choice` (option indexes) and `cohortHash`, for scripts and model training; `pdf` is a one-page report and `png` the result card. The API serves all four.
- `choice` on each answer (in `results` action `get`, `results` action `answers` and the JSONL export) is the answer as indexes into the options: `index` (one pick, or a rating's 1 to 5 as 0 to 4), `indexes` (pick several), `order` (ranking, best first) or `pair` (the two options shown in a pairwise matchup of 3 or more options). Absent for free text and click tests.
- `cohort_hash` in `results` action `get` (`cohortHash` in the JSONL export): the same value means the same kind of audience was asked (who answers, how many, which tier and targeting, language and type). It never covers the words asked and never identifies anyone. Use it to group results from different questions put to the same audience.
- `questions` action `cancel`: stops a live question and refunds the heads who have not answered.

## Filing questions

- `projects` action `list`, `projects` action `create`, `projects` action `update`, `projects` action `delete`: projects group questions under a name and a description. `projects` action `list` shows each with its question count; archived projects only with `include_archived`. `projects` action `update` renames, redescribes or archives one; archiving leaves its questions as they are. `projects` action `delete` removes the project for good but never its questions: they keep their answers and results and are left outside any project. Confirm with the person before deleting.
- `questions` action `file`: moves one question into a project (`project_id`, or `null` to take it out), replaces its `labels` (up to 10, no commas), archives or bookmarks it, or sets your `external_ref`. Send only what should change. `external_ref` is set once: the same value again is fine, a different one is refused. Cancel a live question before archiving it.
- `projects` action `labels`: the labels in use, most used first, with counts.
- `ask` actions `ask` and `set` take `project_id` and `labels` to file as they ask; `results` action `list` filters by `project_id`, `label`, `external_ref`, `bookmarked` and `archived`.

With a team key, projects and labels are the team's.

## Webhooks

Webhooks send events (a question completed, underfilled or refused, credits low, and more) to an https address as they happen, so a script or a CI job does not have to poll. They need the `webhooks:read` and `webhooks:write` scopes, which a connection gets only when the person grants them. Read `50heads://webhook-events` for every event type, what it carries and the links to its JSON Schema.

- `webhooks` action `create`: `url`, `events`, an optional `description`, and a `filter` of `project_ids` or `labels` to send question events only for those. It sends this account's question events to that address, so only use an address the person owns and asked for, and confirm it with them first. The signing secret is in the reply once: give it to the person to store with the receiver. Then `webhooks` action `test`.
- `webhooks` action `list`: each endpoint with its events, filter, whether it is on and the last delivery's status. Secrets are masked.
- `webhooks` action `update`: change `url`, `events`, `description` or `filter` (`null` clears it). `enabled: false` pauses; `enabled: true` turns it back on, also after 50heads switched it off for failing.
- `webhooks` action `rotate_secret`: a new secret, returned once. The old one keeps signing for `overlap_hours` (default 24, up to 168), so the receiver can switch without missing a delivery; `0` cuts over at once.
- `webhooks` action `test`: sends a signed `webhook.test` event now and says how the receiver answered.
- `webhooks` action `deliveries`: the latest 100, filtered by `endpoint_id` or `state`. `failed` means out of retries (8 attempts over about a day).
- `webhooks` action `events`: the latest events of one `type` in this account, newest first (`limit` 1 to 25, default 3), each exactly as a delivery's body carries it. Events are kept whether or not an endpoint listens: use one as a sample payload when writing a receiver.
- `webhooks` action `replay`: sends a delivery's event again, with the same event id, so receivers that drop duplicates stay safe.
- `webhooks` action `delete`: removes the endpoint for good; pausing is usually better. Confirm with the person first.

Each delivery is signed twice: Standard Webhooks headers (`webhook-id`, `webhook-timestamp`, `webhook-signature`) and `X-50heads-Signature`. Verify either one, refuse timestamps more than 5 minutes old, and drop event ids you have already handled. `50heads webhooks verify` checks a captured delivery offline.

## Slack and Zapier

- `organization` action `apps`: the Slack workspaces 50heads is added to, each with its daily spend cap and what it has spent today, in credits, and who added it. People in those workspaces ask with `/50heads ask`, spending this account's credits within that cap. It also lists the Zapier accounts connected to this one (`zapier`), each with its daily cap, today's spend and live hooks, one per Zap trigger. It needs the `apps:read` scope. Adding, changing the cap and removing happen in the portal (Settings, Integrations), not from here; removing a Zapier connection deletes its hooks.

## Organization (admins)

These read an organization and never change it. They work with an organization admin's key or connected app that holds the scope, or with one of the organization's own service accounts; anyone else gets `insufficient_scope` or `organization_admin_required`. Changes to domains, sign-in rules, single sign-on, SCIM and service accounts are made by a person in the portal (Settings, Organization).

- `organization` action `get` (`organization:read`): the organization of the workspace you act in: workspaces, verified domains, whether single sign-on is set up or required, whether SCIM is connected, its sign-in rules.
- `organization` action `domains` (`organization:read`): each domain's state and the DNS TXT record that proves it, to pass to whoever manages DNS.
- `audit` action `list` (`audit:read`): who did what, newest first. Filter with `from`, `to`, `actor` (a user id or a service account id, `sa_…`), `event_action` (an audit action such as `domain.added`, or a group such as `sso`) and `workspace_id`; page with `next_cursor`. Each event says whether a person, a key, a connected app, a service account, SCIM or 50heads acted.
- `audit` action `export` (`audit:read`): the same events as JSON lines, oldest first, up to `max_events` at a time with a `resume_cursor`. Every export is itself recorded in the log.
- `organization` action `scim` (`organization:read`): SCIM provisioning: how many people and groups the identity provider has sent, the default role, and its tokens by label and prefix.
- `organization` action `member_sessions` (`members:read`): where one person is signed in, and how each session started.
- `organization` action `service_accounts` (`organization:read`): the organization's service accounts, with their workspace, scopes, caps in credits, today's spend and last token. Never their secrets.

Events and lists never hold secrets, one-time codes or anything that identifies a head.

## Help

- `help` action `search`: the help center, for questions about credits, refunds, verification, tiers, the API or this server.
- `help` action `feedback`: tells support about a problem or an idea. Signed out, add `email`. Leave out personal data about other people.
- `help` action `whoami`: who the connection acts as (email masked), its scopes, daily and per-question caps and today's spend, the account and organization, and the rate limits with what is used. Call it first when something is refused.
- `help` action `status`: whether 50heads is working and whether asking, answering, MCP asking or buying credits is paused. Needs no sign-in. Check it when calls fail, and do not ask while asking is paused.

`questions` actions `add_heads` and `flag_answer`, and `results` action `export` (CSV, JSONL, PDF and PNG), are served by the API. Use them when the result calls for it.

## Your data

We don't use your questions, the answers you buy or the reasons heads write to train AI models, and we don't sell them.
