---
"@ai-hero/sandcastle": patch
---

Add `--alpine` flag to `init` for leaner Docker images, `none` backlog manager for local-only repos, and `piMinimalMounts` helper for Docker sandbox provider.

- **`sandcastle init --alpine`** scaffolds Alpine Linux-based Dockerfiles (~75% smaller than bookworm) with npm cache cleaning, macOS UID fixes, and minimal pi settings.json for local-model setups.
- **New "None" backlog manager** for repos without GitHub remotes — replaces `gh` commands with inline instructions so templates work out of the box on local-only projects.
- **`piMinimalMounts` export** from `sandcastle/sandboxes/docker` provides the recommended minimal mount set for pi agents: `auth.json`, `models.json`, and `~/.agents/skills` — avoiding the ~1.5GB bloat from mounting the full `~/.pi` directory.
- Existing Debian Dockerfiles now include `chmod 777 /home/agent` and world-writable `.gitconfig` to fix macOS Docker UID mismatch issues.
