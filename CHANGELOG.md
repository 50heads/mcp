# Changelog

Changes to `@50heads/mcp` (the `npx @50heads/mcp` server and command), the hosted server at `https://mcp.50heads.com/mcp`, and the 50heads Agent Skill. They share one version.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versions are calendar versions, `YYYY.MDD.N`: the year, the month and two-digit day, then the release number for that UTC day (`2026.924.1` is the first release on 24 September 2026).

Pending changes are captured as changesets and written here when the package is released. The GitHub Release uses the same notes.

## [Unreleased]

## [2026.1009.1] - 2026-10-09

**This release adds ask_set for ordered question sets behind one shared link, plus public results for ask and ask_set.** It also updates answer options, language support, shared-link closing, and answer flagging rules.

### Added

- **ask_set now publishes 2 to 10 questions for your own audience behind one shared link, answered in order, with each question keeping its own results.**
- **Questions can now set answered_by to private, and results show whether heads answered in the app or people answered through the shared link; for heads, that line names the tier and how they were verified.**
- **ask and ask_set now take public_results, off by default; when on, a question asked of heads has a shareable results page, and people who answer through a shared link see the bars after their own answer.**
- **Questions can now use Japanese, Korean, Swedish, Danish, Norwegian, Czech, Romanian, Finnish or Turkish, as well as English, French, Spanish, Portuguese, Italian, German, Dutch and Polish.**
- **list_questions now takes set_id and lists only that set, in order, with each question's place in the set.**

### Changed

- **yes_no is now Yes or No, and yes_mostly_no is the opt-in that adds Mostly.**
- **Descriptions now say verified people.**
- **When a shared link closes, the question status is closed and the unused reserve is refunded.**
- **flag_answer cannot flag an answer that came through a shared link, because that answer has no attestation reference.**

## [2026.1006.1] - 2026-10-06

**Interest audiences can be listed and asked, in place of targeting.**

### Added

- **`list_audiences` lists interest audiences, panels of heads who proved they fit (UK commuter cyclists, for example), with their countries, a size band and the price per answer by grade.**
- **`audience` on a question (`id` and `min_grade`) works on `estimate`, `ask` and the other tools that take a question.** It replaces `targeting`. The price per answer is the audience's at the minimum grade, with no trait credits.

### Changed

- **The skill's estimate script sends a user agent of `50heads-skill/<version>`.**
- **The skill's tool notes state that `export` serves CSV, PDF and PNG.**

## [2026.925.2] - 2026-09-25

**The estimate card and the daily spend cap are clearer.** No new tools.

### Changed

- **The estimate card keeps its height while the price is worked out.** The Ask button stays on the card, disabled, until the quote arrives. The card shows credits per head and how many heads could answer.
- **A connection's daily spend cap is given in credits, so the figure does not move with the exchange rate.**

### Fixed

- **The estimate and results views declare a content security policy with no outside hosts, and a border, so ChatGPT does not treat the policy as missing.**

## [2026.925.1] - 2026-09-25

**First public release of the 50heads MCP server, the command and the Agent Skill.**

### Added

- **Tools `estimate`, `ask`, `get_results`, `wait_for_results`, `list_questions`, `cancel`, `templates` and `balance`, plus `login`, `status`, `logout` and `config` on the command line.**
- **The registry manifest `server.json` names `com.50heads/mcp` for the hosted server and the npm package.** Listing that name in the official registry is a separate step from this package.
- **The Agent Skill is in the package, attached to the GitHub Release, and served at https://50heads.com/skills/50heads.zip.**
- **Requests from the command send a user agent of `50heads-mcp/<version>`.**
- **Nine further tools: `upload_image` (base64 or an https link), `get_answers` (paged and filtered), `add_heads`, `flag_answer`, `export` (CSV, PDF and PNG), `build_ask_link`, `list_targeting`, `search_help` and `send_feedback`.**

[2026.1006.1]: https://github.com/50heads/mcp/releases/tag/v2026.1006.1
[2026.925.2]: https://github.com/50heads/mcp/releases/tag/v2026.925.2
[2026.925.1]: https://github.com/50heads/mcp/releases/tag/v2026.925.1

[2026.1009.1]: https://github.com/50heads/mcp/releases/tag/v2026.1009.1
