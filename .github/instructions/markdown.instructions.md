---
applyTo: "**/*.md"
---

Check changed Markdown files against `@tyler.given/best-practices-content`:

**Reference:** `packages/content/SKILL.md` content guidelines + `README.md`

| # | Check | Rule ref |
|---|---|---|
| 1 | Content is written for a knowledgeable generalist (not over-simplified) | Content Guidelines |
| 2 | Scannable format: headers, bullets, or tables — not dense prose paragraphs | Content Guidelines |
| 3 | Sources cited with links (standards bodies, research, authoritative references) | Content Guidelines |
| 4 | No unsourced opinion presented as fact | Content Guidelines |
| 5 | No empty placeholder sections without content | Content Guidelines |
| 6 | Frontmatter present if file is a SKILL.md or agent definition | SKILL.md spec |

**Output format:** numbered findings list only — `{n}. [file:line] Rule: <rule ref>. Observation: <one line>`
No findings → emit: `✓ No Markdown violations found.`
Load only this file for Markdown changes.
