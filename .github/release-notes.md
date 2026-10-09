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

## Install

```sh
npx -y @50heads/mcp@2026.1009.1
```

Hosted server: https://mcp.50heads.com/mcp
