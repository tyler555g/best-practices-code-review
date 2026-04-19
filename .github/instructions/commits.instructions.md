---
applyTo: "**"
excludeAgent: "cloud-agent"
---

Check commit messages in this PR against `@tyler.given/best-practices-content`:

**Reference:** `technology_and_information/information_technology/git-workflow.md` §Commit Message Format

| # | Check | Rule ref |
|---|---|---|
| 1 | Subject uses Conventional Commits: `type(scope): description` | §Commit Message Format |
| 2 | Subject is imperative mood ("Fix", not "Fixed" or "Fixes") | §Rules |
| 3 | Subject ≤ 75 characters, no trailing period | §Rules |
| 4 | Blank line between subject and body (if body present) | §Rules |
| 5 | Body explains *why*, not just *what* | §Rules |
| 6 | Performance/memory claims quantified with numbers | §Rules |
| 7 | `Fixes:`/`Closes:`/`Link:` trailers used for issue/PR references | §Trailers |

**Output format:** numbered findings list only — `{n}. [COMMIT:<hash>] Rule: §N. Observation: <one line>`
No findings → emit: `✓ No commit message violations found.`
This file applies to all PRs. Runs in addition to file-type-specific instruction files.
