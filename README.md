# 50heads MCP

<!-- lead:start (generated from src/pricing.ts by scripts/generate.ts; do not edit by hand) -->
Ask fifty verified real people a five-second question from Claude, ChatGPT, Cursor or your own agent, and get the split back. 50 answers at Tier 1: about 10 minutes and 1000 credits, priced in your account's currency.
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

Hosted, sign in with OAuth. Settings, Connectors, Add custom connector. Paste the URL and sign in when asked. On Team and Enterprise plans an owner adds it for the organisation first.

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

Ask your host to "use 50heads to estimate asking fifty people which of two names they prefer". `estimate` is free and never spends credits. In Claude Code, `/mcp` lists the server and its tools; elsewhere, look for 50heads in the host's tools or connectors list.

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

## Tools

| Tool | Scope | Does |
| --- | --- | --- |
| `estimate` | questions:write | Price, time and fixes for a question. Never spends. Call it first. |
| `ask` | questions:write | Asks. Needs a fresh UUID as `idempotency_key`. Returns a task (or a `question_id` on older hosts). |
| `get_results` | questions:read | Results so far, without waiting. |
| `wait_for_results` | questions:read | Older hosts only: waits up to 600 s on the server. |
| `list_questions` | questions:read | Your recent questions. Check before asking again. |
| `cancel` | questions:write | Stops a question and refunds unanswered heads. |
| `templates` | none | Fixed-price templates. Works without signing in. |
| `balance` | account:read | Credits, reserved credits and what is left under the connection's daily cap. |
| `upload_image` | questions:write | Puts an image into 50heads from base64 or an https link; returns an `image_url` for a question. |
| `get_answers` | questions:read | Individual answers a page at a time, filtered by option, tier, country, age band or keyword. |
| `add_heads` | questions:write | More heads on the same question, merged into the same result. Needs an `idempotency_key`. |
| `flag_answer` | questions:write | Reports one answer by its `attestation_ref` for review; upheld flags are refunded. |
| `export` | questions:read | The results as a file: CSV, a one-page PDF report, or a PNG chart (square, wide or story). |
| `build_ask_link` | none | A portal link with the question filled in, for a person to check and ask. Spends nothing. |
| `list_audiences` | none | Interest audiences you can ask instead of targeting, with prices by grade. |
| `list_targeting` | none | Countries, languages, pool bands and the tags you can target. |
| `search_help` | none | Searches the help centre and returns articles with links. |
| `send_feedback` | none | Sends feedback or a problem to support as a ticket (signed out: add `email`). |


Every connection has a daily spend cap (default 5,000 credits). Asking past it returns `spend_cap_exceeded` with what is left and when it resets.

Errors are JSON-RPC errors with `error.data.code` (`validation`, `not_found`, `insufficient_credits`, `spend_cap_exceeded`, `idempotency_conflict`, `content_refused`, `rate_limited`, `unavailable`) and a `retryable` hint.

Resources: `50heads://guide` (the skill), `50heads://templates`, `50heads://question-types`, `50heads://pricing`, `50heads://countries`, `50heads://results/{question_id}`. Prompts: `ask_the_heads`, `read_results`. Hosts that show MCP Apps get the estimate and the results as cards.

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

MIT licence.
