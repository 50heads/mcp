## [2026.1013.1] - 2026-10-13

**@50heads/mcp 2026.1013.1 changes the MCP server to nine action-based tools, with per-action scopes and updated help, status and whoami access.** It also adds filing, organisation, audit, webhook and approval flows, plus JSONL export and clearer privacy wording.

### Added

- **ask and estimate now support go_rule on yes_no and yes_mostly_no questions, and results returns a verdict of go, no go or unclear.** Ranking and pairwise results now include head_to_head, who beats whom, pairwise rows and a 95% range on each win share.
- **New filing tools let you manage projects and labels, move a question into a project, replace its labels, archive or bookmark it, and set an external_ref once.** Deleting a project keeps its questions outside any project.
- **Read-only organisation and audit tools are now available for admins and service accounts, including organisation details, domains, audit events, SCIM status, member sessions and service accounts.** Signing in now asks for the extra organisation scopes needed for these tools.
- **Webhook tools now cover listing, creating, updating, rotating secrets, testing, deliveries, replay and deletion, with new read and write scopes.** The webhook events resource lists event types, payloads and JSON Schema locations, and approval events are included.
- **ask can now return a task in input_required when a person must approve it, with approval details and held credits until approval.** Denials and expiry are reported as refused_by_policy or approval_expired, and no name is shown for the person deciding.
- **export now supports JSONL, with one JSON object per answer including the question, options, choice and cohortHash.** get_results and get_answers now include each answer's choice, and get_results adds cohort_hash.

### Changed

- **The server now exposes nine tools with actions instead of 44 single-purpose tools, and old tool names no longer work.** Scope checks are per action, and the README maps the old names to the new ones.
- **help now covers whoami and status, and the API also exposes /v1/status, /v1/whoami and /v1/limits with rate limit headers.** The server instructions, guide resource and Agent Skill now say questions, bought answers and reasons heads write are not used to train AI models.

## Install

```sh
npx -y @50heads/mcp@2026.1013.1
```

Hosted server: https://mcp.50heads.com/mcp
