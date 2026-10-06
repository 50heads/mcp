### Added

- `list_audiences`: interest audiences, panels of heads who proved they fit (UK commuter cyclists, for example), with their countries, size band and price per answer by grade.
- `audience` on a question (`{ id, min_grade }`) for `estimate`, `ask` and the other tools that take one. It replaces `targeting`; the price per answer is the audience's at the minimum grade, with no trait credits.

## Install

```sh
npx -y @50heads/mcp@2026.1006.1
```

Hosted: https://mcp.50heads.com/mcp. MCP Registry: `com.50heads/mcp` 2026.1006.1.

## Commits since 50heads-mcp/v2026.925.2

- Fix public mirror git auth for fine-grained PATs (#217) (2397e30)
- Translate second-pass face-check and agents wording (#216) (c73f4b3)
- Apply public content clarity review (#211) (a08cc8d)
- Interest audiences: discovery, pricing, the app's Audiences screens and seed invites (7bc125d)
- Correct launch docs that still describe shipped work as missing. (26d12bd)
- Quote tier prices from shared pricing in MCP and the docs. (73b747d)
- Send a 50heads User-Agent from the skill estimate script. (5afa394)
- Publish the CLI and MCP from public mirrors with provenance. (141616a)
- chore(release): @50heads/mcp 2026.925.2 [skip ci] (0673eb8)
