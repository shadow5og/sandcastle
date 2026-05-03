---
"@ai-hero/sandcastle": patch
---

fix: prevent apt-get/dpkg Debian commands from leaking into Alpine Dockerfiles

- Add `templateArgsAlpine` to `BacklogManagerEntry` with Alpine-specific `BACKLOG_MANAGER_TOOLS` variants
- `github-issues` backlog manager on Alpine now uses `apk add --no-cache github-cli` instead of Debian apt-get/dpkg approach
- `scaffold()` now selects `templateArgsAlpine` when `--alpine` flag is passed, falling back to `templateArgs` if not defined
- Remove redundant `github-cli` from Alpine agent Dockerfile system dependency lists
- Add assertions to Alpine scaffold tests to verify no `apt-get`/`dpkg` leakage
