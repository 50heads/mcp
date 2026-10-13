# 50heads MCP

<!-- lead:start (generated from src/pricing.ts by scripts/generate.ts; do not edit by hand) -->
Ask fifty verified people a five-second question from Claude, ChatGPT, Cursor or your own agent, and see what they think. 50 answers at Tier 1: 1000 credits, priced in your account's currency.
<!-- lead:end -->

There are two ways in, with the same tools:

- **Hosted** (recommended): `https://mcp.50heads.com/mcp`. Streamable HTTP, sign in with OAuth in the browser. Nothing to install.
- **Local**: `npx -y @50heads/mcp`, a stdio server for hosts that launch a command. Needs Node 20 or later and an API key (or a one-time `login`).

## Install

Pick your host below. The hosted server needs nothing installed: add the URL and sign in with OAuth in the browser, which also sets the connection's daily spend cap. The local server (`npx -y @50heads/mcp`) needs Node 20 or later and an API key.

Make an API key, if you need one, on the Developers page of the dashboard: https://50heads.com/app/developers. Keys start `fh_live_` and are shown once. Or run `npx -y @50heads/mcp login` once and leave the key out.

`npx -y @50heads/mcp config [host]` prints any of these. The same instructions are on https://50heads.com/en-us/docs/mcp.

<!-- install:start (generated from src/snippets.ts by scripts/generate.ts; do not edit by hand) -->

### Claude (claude.ai and Claude Desktop)

Hosted, sign in with OAuth. Settings, Connectors, Add custom connector. Paste the URL and sign in when asked. On Team and Enterprise plans an owner adds it for the organization first.

```text
https://mcp.50heads.com/mcp
```

Or with an API key, in claude_desktop_config.json (macOS: ~/Library/Application Support/Claude/, Windows: %APPDATA%\Claude\).

```json
{
  "mcpServers": {
    "50heads": {
      "command": "npx",
      "args": [
        "-y",
        "@50heads/mcp"
      ],
      "env": {
        "FIFTYHEADS_API_KEY": "fh_live_…"
      }
    }
  }
}
```

### Claude Code

Hosted, sign in with OAuth. Run in a terminal, then /mcp in Claude Code to sign in.

```sh
claude mcp add --transport http 50heads https://mcp.50heads.com/mcp
```

Or with an API key (CI and scripts):

```sh
claude mcp add --transport http 50heads https://mcp.50heads.com/mcp --header "Authorization: Bearer fh_live_…"
```

### Cursor

Hosted, sign in with OAuth. ~/.cursor/mcp.json (or .cursor/mcp.json in a project). Cursor opens the sign-in page.

```json
{
  "mcpServers": {
    "50heads": {
      "url": "https://mcp.50heads.com/mcp"
    }
  }
}
```

Or with an API key:

```json
{
  "mcpServers": {
    "50heads": {
      "url": "https://mcp.50heads.com/mcp",
      "headers": {
        "Authorization": "Bearer fh_live_…"
      }
    }
  }
}
```

### ChatGPT

Hosted, sign in with OAuth. Settings, Apps and Connectors, Advanced settings, turn on Developer mode, then Create. Paste the URL and choose OAuth. On Business and Enterprise plans an admin turns on Developer mode first.

```text
https://mcp.50heads.com/mcp
```

### VS Code

Hosted, sign in with OAuth. .vscode/mcp.json in the workspace, or MCP: Add Server from the command palette.

```json
{
  "servers": {
    "50heads": {
      "type": "http",
      "url": "https://mcp.50heads.com/mcp"
    }
  }
}
```

Or from a terminal:

```sh
code --add-mcp '{"name":"50heads","type":"http","url":"https://mcp.50heads.com/mcp"}'
```

### Windsurf

Local, with an API key. ~/.codeium/windsurf/mcp_config.json, or Windsurf Settings, Cascade, MCP servers, View raw config.

```json
{
  "mcpServers": {
    "50heads": {
      "command": "npx",
      "args": [
        "-y",
        "@50heads/mcp"
      ],
      "env": {
        "FIFTYHEADS_API_KEY": "fh_live_…"
      }
    }
  }
}
```

Or the hosted server with an API key:

```json
{
  "mcpServers": {
    "50heads": {
      "serverUrl": "https://mcp.50heads.com/mcp",
      "headers": {
        "Authorization": "Bearer fh_live_…"
      }
    }
  }
}
```

### Any other host

Local, with an API key. Hosts that launch a local command. Needs Node 20 or later and an API key from the dashboard.

```sh
FIFTYHEADS_API_KEY=fh_live_… npx -y @50heads/mcp
```

Hosts that speak Streamable HTTP: https://mcp.50heads.com/mcp with the header "Authorization: Bearer fh_live_…", or OAuth.

```json
{
  "mcpServers": {
    "50heads": {
      "url": "https://mcp.50heads.com/mcp",
      "headers": {
        "Authorization": "Bearer fh_live_…"
      }
    }
  }
}
```

<!-- install:end -->

### Check it works

Ask your host to "use 50heads to estimate asking fifty people which of two names they prefer". `estimate` (action `quote`) is free and never spends credits. In Claude Code, `/mcp` lists the server and its tools; elsewhere, look for 50heads in the host's tools or connectors list.

## Signing in on the command line

```sh
npx -y @50heads/mcp login     # opens the browser; the token goes in your keychain
npx -y @50heads/mcp status
npx -y @50heads/mcp logout
```

`login` uses the OAuth device flow against `https://auth.50heads.com`. Tokens are kept in the macOS Keychain or the Secret Service on Linux, else in `~/.config/50heads/credentials.json` (mode 600). An API key in `FIFTYHEADS_API_KEY` wins when both are present.

`--proxy` forwards stdio to the hosted server instead of running the tools locally.

| Variable | Meaning |
| --- | --- |
| `FIFTYHEADS_API_KEY` | API key for CI and scripts |
| `FIFTYHEADS_API_URL` | API base, default `https://api.50heads.com` |
| `FIFTYHEADS_MCP_URL` | Hosted endpoint for `--proxy` |
| `FIFTYHEADS_AUTH_URL` | Sign-in server for `login` |
| `FIFTYHEADS_CREDENTIALS_STORE=file` | Keep the sign-in in a file, not the keychain |
| `FIFTYHEADS_DEBUG=1` | Log each call to stderr (never question text) |

## Tools (9, each takes an `action`)

There are nine tools, never more than ten. Each tool takes an `action` and that action's own arguments, validated per action (the input is a discriminated union on `action`), and `tools/list` documents every action in the tool's description. Scopes belong to actions, not tools: a connection that lacks the scope for an action is refused with `insufficient_scope` for that action alone, and a read-only grant never reaches an action that changes something. Tool annotations are true of every action in the tool: `estimate`, `results`, `organization` and `audit` are read-only (`readOnlyHint: true`); `questions`, `projects` and `webhooks` each hold a cancel or delete, so they carry `destructiveHint: true`; `ask` and `help` change something but destroy nothing. Each tool's `_meta["com.50heads/scopes"]` lists the scope of each action.

| Tool | Hints | Actions | Does |
| --- | --- | --- | --- |
| `estimate` | read-only | `quote`, `balance`, `templates`, `audiences`, `targeting` | Price a question, check credits, and look up what you can ask for. |
| `ask` | writes | `ask`, `set`, `upload_image`, `build_link` | Ask heads or your own audience, upload an image, build a link for a person to press Ask. |
| `results` | read-only | `get`, `wait`, `answers`, `export`, `list` | Read results, wait for them, read single answers, export files, list your questions. |
| `questions` | destructive | `cancel`, `add_heads`, `flag_answer`, `file` | Change one question: cancel it, add heads, flag an answer, file it. |
| `projects` | destructive | `list`, `create`, `update`, `delete`, `labels` | Projects and labels that keep questions findable. |
| `webhooks` | destructive | `list`, `create`, `update`, `rotate_secret`, `test`, `deliveries`, `events`, `replay`, `delete` | Webhook endpoints, deliveries and recent events. |
| `organization` | read-only | `get`, `domains`, `scim`, `member_sessions`, `service_accounts`, `apps` | The organization, its domains, SCIM, member sessions, service accounts and workspace apps. |
| `audit` | read-only | `list`, `export` | The organization audit log. |
| `help` | writes | `search`, `feedback`, `status`, `whoami` | Search the help center, send feedback, check whether 50heads is working, see who the connection acts as. |

### Actions and scopes

| Tool | Action | Scope | Does |
| --- | --- | --- | --- |
| `estimate` | `quote` | `questions:write` | Price and fixes for a question. Never spends. Call it first. |
| `estimate` | `balance` | `account:read` | Credits, reserved credits and what is left under the connection's daily cap. |
| `estimate` | `templates` | none | Fixed-price templates. Works without signing in. |
| `estimate` | `audiences` | none | Interest audiences you can ask instead of targeting, with prices by grade. |
| `estimate` | `targeting` | none | Countries, languages, pool bands and the tags you can target. |
| `ask` | `ask` | `questions:write` | Asks verified heads. Needs a fresh UUID as `idempotency_key`. Returns a task (or a `question_id` on older hosts). |
| `ask` | `set` | `questions:write` | Two to ten questions for your own audience behind one shared link, answered in order. Needs an `idempotency_key`. |
| `ask` | `upload_image` | `questions:write` | Puts an image into 50heads from base64 or an https link; returns an `image_url` for a question. |
| `ask` | `build_link` | none | A portal link with the question filled in, for a person to check and ask. Spends nothing. |
| `results` | `get` | `questions:read` | Results so far, without waiting: the share per option, a go or no go verdict against your own line on yes/no questions, and who beats whom on rankings and pairwise questions, with ranges. |
| `results` | `wait` | `questions:read` | Waits up to 600 s on the server for the answers (`min_answers`, `timeout_seconds`). For hosts without tasks. |
| `results` | `answers` | `questions:read` | Individual answers a page at a time, filtered by option, tier, country, age band or keyword. |
| `results` | `export` | `questions:read` | The results as a file: CSV, JSON lines (one answer per line, with option indexes and the cohort hash), a one-page PDF report, or a PNG chart. |
| `results` | `list` | `questions:read` | Your recent questions, filtered by status, project, label, reference, bookmark or set. Check before asking again. |
| `questions` | `cancel` | `questions:write` | Stops a live question and refunds unanswered heads. Destructive. |
| `questions` | `add_heads` | `questions:write` | More heads on the same question, merged into the same result. Needs an `idempotency_key`. |
| `questions` | `flag_answer` | `questions:write` | Reports one answer by its `attestation_ref` for review; upheld flags are refunded. |
| `questions` | `file` | `questions:write` | Files a question: project, labels, bookmark, archive, and an external reference set once. |
| `projects` | `list` | `questions:read` | Projects in the account, with `include_archived` for archived ones too. |
| `projects` | `create` | `questions:write` | A new project to file questions in. |
| `projects` | `update` | `questions:write` | Renames, redescribes, archives or restores a project. |
| `projects` | `delete` | `questions:write` | Deletes a project. Its questions stay, with their answers, outside any project. Destructive. |
| `projects` | `labels` | `questions:read` | Labels in use, most used first. |
| `webhooks` | `list` | `webhooks:read` | Webhook endpoints: address, events, filter, on or off, last delivery. Secrets masked. |
| `webhooks` | `create` | `webhooks:write` | Sends the chosen events, signed, to an https address you own; filter by project or label. Returns the secret once. |
| `webhooks` | `update` | `webhooks:write` | Changes address, events, description or filter (`null` clears it); pauses or resumes. |
| `webhooks` | `rotate_secret` | `webhooks:write` | A new secret, returned once; the old one keeps signing for `overlap_hours` (default 24, up to 168). |
| `webhooks` | `test` | `webhooks:write` | Sends a signed `webhook.test` event now and says how the receiver answered. |
| `webhooks` | `deliveries` | `webhooks:read` | The latest 100 deliveries, by endpoint or state (`failed` is out of retries). |
| `webhooks` | `events` | `webhooks:read` | The latest events of one type (up to 25), each exactly as a delivery carries it: sample payloads, or catching up by event id. |
| `webhooks` | `replay` | `webhooks:write` | Sends a delivery's event again, with the same event id. |
| `webhooks` | `delete` | `webhooks:write` | Deletes an endpoint for good. Destructive. |
| `organization` | `get` | `organization:read` | The organization of the workspace the key or app acts in: workspaces, verified domains, single sign-on, SCIM and sign-in rules. |
| `organization` | `domains` | `organization:read` | The organization's domains, each with its state and the DNS TXT record that proves it. Admins only. |
| `organization` | `scim` | `organization:read` | SCIM provisioning: base URL, people and groups sent, default role, tokens by label and prefix. Admins only. |
| `organization` | `member_sessions` | `members:read` | One member's live sessions and how each started. Admins only. |
| `organization` | `service_accounts` | `organization:read` | The organization's service accounts: workspace, scopes, caps, today's spend and last token. Never their secrets. |
| `organization` | `apps` | `apps:read` | Slack workspaces and Microsoft Teams tenants 50heads is added to (`provider` says which) and Zapier connections: daily cap, today's spend, who added each, and each Zapier connection's hooks. |
| `audit` | `list` | `audit:read` | Who did what in the organization and its workspaces, newest first, filtered by time, actor, `event_action` and workspace. Admins only. |
| `audit` | `export` | `audit:read` | The same events as JSON lines, oldest first, with a cursor to resume. Each export is recorded. Admins only. |
| `help` | `search` | none | Searches the help center and returns articles with links. |
| `help` | `feedback` | none | Sends feedback or a problem to support as a ticket (signed out: add `email`). |
| `help` | `status` | none | Whether 50heads is working, and whether asking, answering, MCP asking or buying credits is paused. Works without signing in. Read-only. |
| `help` | `whoami` | `account:read` | Who the connection acts as (email masked), its scopes, caps and spend today, the account and organization it acts in, and its rate limits with what is used. Read-only. |

### Before and after

This release replaces the 44 single-purpose tools with the nine above (decision G12: at most ten tools, so a model can choose well). Every old tool is one action of one new tool, with the same arguments; two details changed: `build_ask_link` now takes its question fields inside `draft`, and the audit filter `action` is `event_action` (so it cannot clash with `action`). `wait_for_results` is now `results` with `action: "wait"` on every host.

| Old tool | New tool | Action |
| --- | --- | --- |
| `estimate` | `estimate` | `quote` |
| `ask` | `ask` | `ask` |
| `ask_set` | `ask` | `set` |
| `get_results` | `results` | `get` |
| `wait_for_results` | `results` | `wait` |
| `list_questions` | `results` | `list` |
| `cancel` | `questions` | `cancel` |
| `templates` | `estimate` | `templates` |
| `balance` | `estimate` | `balance` |
| `upload_image` | `ask` | `upload_image` |
| `get_answers` | `results` | `answers` |
| `add_heads` | `questions` | `add_heads` |
| `flag_answer` | `questions` | `flag_answer` |
| `export` | `results` | `export` |
| `build_ask_link` | `ask` | `build_link` |
| `list_audiences` | `estimate` | `audiences` |
| `list_targeting` | `estimate` | `targeting` |
| `search_help` | `help` | `search` |
| `send_feedback` | `help` | `feedback` |
| `whoami` | `help` | `whoami` |
| `service_status` | `help` | `status` |
| `list_webhooks` | `webhooks` | `list` |
| `create_webhook` | `webhooks` | `create` |
| `update_webhook` | `webhooks` | `update` |
| `rotate_webhook_secret` | `webhooks` | `rotate_secret` |
| `test_webhook` | `webhooks` | `test` |
| `list_webhook_deliveries` | `webhooks` | `deliveries` |
| `list_webhook_events` | `webhooks` | `events` |
| `replay_webhook_delivery` | `webhooks` | `replay` |
| `delete_webhook` | `webhooks` | `delete` |
| `list_projects` | `projects` | `list` |
| `create_project` | `projects` | `create` |
| `update_project` | `projects` | `update` |
| `delete_project` | `projects` | `delete` |
| `list_labels` | `projects` | `labels` |
| `file_question` | `questions` | `file` |
| `list_apps` | `organization` | `apps` |
| `get_organization` | `organization` | `get` |
| `list_domains` | `organization` | `domains` |
| `list_audit_events` | `audit` | `list` |
| `export_audit_events` | `audit` | `export` |
| `get_scim_status` | `organization` | `scim` |
| `list_member_sessions` | `organization` | `member_sessions` |
| `list_service_accounts` | `organization` | `service_accounts` |

The webhook and app scopes are not granted unless asked for: a connection made before them, or one that did not ask, gets `insufficient_scope` and can reconnect to add them.

Every connection has a daily spend cap (default 5,000 credits). Asking past it returns `spend_cap_exceeded` with what is left and when it resets.

Errors are JSON-RPC errors with `error.data.code` (`validation`, `not_found`, `insufficient_credits`, `spend_cap_exceeded`, `idempotency_conflict`, `content_refused`, `rate_limited`, `unavailable`) and a `retryable` hint.

Resources: `50heads://guide` (the skill), `50heads://templates`, `50heads://question-types`, `50heads://pricing`, `50heads://countries`, `50heads://webhook-events` (event types, what each carries, links to their JSON Schemas and how deliveries are signed), `50heads://results/{question_id}`. Prompts: `ask_the_heads`, `read_results`. Hosts that show MCP Apps get the estimate and the results as cards.

Tool annotations: read-only tools carry `readOnlyHint: true`; `questions` (cancel), `projects` (delete) and `webhooks` (delete) are the only tools marked `destructiveHint: true`; every tool has `openWorldHint: true` and an output schema (a union of its actions' outputs). Hosts that show MCP Apps get the quote and the results as cards: they appear for `estimate` and `results`, and only for the replies they were made for.

## Privacy

Privacy policy: https://50heads.com/en-gb/legal/privacy. We don't use your questions, the answers you buy or the reasons heads write to train AI models, and we don't sell them: https://50heads.com/en-gb/help/privacy/ai-and-your-data. Answers never identify a head.

## Where to find it

- Hosted: `https://mcp.50heads.com/mcp`.
- npm: `@50heads/mcp`.
- Official MCP Registry, as `com.50heads/mcp`, and MCP directories: coming soon.

## The Agent Skill

The package ships the 50heads Agent Skill in `skills/50heads` (`@50heads/mcp/skills/50heads/SKILL.md`): when to ask, the eight rules for a good question, how to read results, and references for question types and pricing. Copy the folder into your host's skills directory, or let a host that speaks the `com.50heads/skills` extension fetch it from the server.

## As a library

```ts
import { serveStdio } from "@modelcontextprotocol/server/stdio";
import { serverFactory } from "@50heads/mcp";

serveStdio(serverFactory({ apiKey: process.env.FIFTYHEADS_API_KEY }));
```

`serveStdioServer(options)` runs the whole stdio server, tasks included. `configSnippets()` returns the install snippets above.

## Versions

Releases use calendar versions, `YYYY.MDD.N`: `2026.924.1` is the first release on 24 September 2026, and a second that day is `2026.924.2`. The npm package, the hosted server (`serverInfo.version`), the registry manifest, `--version` and the Agent Skill all carry the same number. See [CHANGELOG.md](./CHANGELOG.md).

`server.json` is ready for the official MCP Registry as `com.50heads/mcp`. The registry has no listing yet (a search returns no servers). Publishing it needs `MCP_REGISTRY_ED25519_KEY` on the release workflow. See [docs/publishing.md](../../docs/publishing.md). The npm package itself is published.

## Development

This package lives in the 50heads monorepo. The hosted server (`apps/mcp`) and the stdio server share one module, `src/server.ts`, so they cannot drift.

```sh
pnpm --filter @50heads/mcp generate   # skill module, skill references, server.json, README install section
pnpm --filter @50heads/mcp test
pnpm --filter @50heads/mcp build      # dist/cli.js, dist/index.js, types, skills/ and skills/50heads.zip
```

Releasing (npm with provenance from the public mirror, the MCP Registry and a GitHub Release) is described in [docs/publishing.md](../../docs/publishing.md).

MIT license.

## Spelling

Everything the server says, accepts and returns is US English: tool names, actions, descriptions, arguments, outputs and error codes (`organization`, `authorized`, `canceled`). One word is not ours to spell: the status of an MCP task that was stopped is `cancelled`, because the MCP tasks protocol defines it that way and clients validate it. A question stopped through `questions` with `action: "cancel"` has status `canceled`.
