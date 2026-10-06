# Changelog

Changes to `@50heads/mcp` (the `npx @50heads/mcp` stdio server and CLI), the hosted server at `https://mcp.50heads.com/mcp` and the 50heads Agent Skill. They share one version.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versions are calendar versions, `YYYY.MDD.N`: the year, the month and two-digit day, then the release number for that day (`2026.924.1` is the first release on 24 September 2026). Breaking changes are called out in the notes.

Add what changed under Unreleased as you go, written for the people using it. The release workflow moves it under the new version and uses it for the GitHub Release.

## [Unreleased]

## [2026.1006.1] - 2026-10-06

### Added

- `list_audiences`: interest audiences, panels of heads who proved they fit (UK commuter cyclists, for example), with their countries, size band and price per answer by grade.
- `audience` on a question (`{ id, min_grade }`) for `estimate`, `ask` and the other tools that take one. It replaces `targeting`; the price per answer is the audience's at the minimum grade, with no trait credits.

## [2026.925.2] - 2026-09-25

Maintenance release. No change to tools, resources or prompts.

## [2026.925.1] - 2026-09-25

### Added

- First public release: tools `estimate`, `ask`, `get_results`, `wait_for_results`, `list_questions`, `cancel`, `templates` and `balance`, the 50heads Agent Skill, and `login`, `status`, `logout` and `config` on the command line.
- Registry manifest `server.json` for `com.50heads/mcp`, hosted and npm. The official registry listing was not published: the registry returns no servers for that name until `MCP_REGISTRY_ED25519_KEY` is set on the release workflow.
- The skill bundle is attached to each GitHub Release as `50heads-skill.zip` and served at `https://50heads.com/skills/50heads.zip`.
- Requests from the CLI carry a `User-Agent` of `50heads-mcp/<version>`.
- Nine more tools: `upload_image` (base64 or an https link), `get_answers` (paged and filtered), `add_heads`, `flag_answer`, `export` (CSV, PDF and PNG), `build_ask_link` (a pre-filled portal link), `list_targeting`, `search_help` and `send_feedback`.

