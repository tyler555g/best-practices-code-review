---
applyTo: "**/*.js,**/*.ts,**/*.mjs,**/*.cjs"
---

Check changed JavaScript/TypeScript files against `@tyler.given/best-practices-content`:

**Reference:** `technology_and_information/information_technology/npm-package-development.md`

| # | Check | Rule ref |
|---|---|---|
| 1 | `package.json` has `"files"` allowlist (not `.npmignore`) | §1 |
| 2 | `package.json` has `"publishConfig": {"access":"public"}` for scoped packages | §1 |
| 3 | `package.json` has `"engines": {"node":">=22"}` | §1 |
| 4 | `package.json` has `"type":"module"` or explicit CJS entry | §2 |
| 5 | `postinstall` script is minimal, auditable, documented in README | §4 |
| 6 | No secrets, `.env`, or credentials in any published file | §4 |
| 7 | New public API is documented (JSDoc or README) | §1 |
| 8 | Tests exist for new logic (`tests/*.test.js`) | §3 |

**Output format:** numbered findings list only — `{n}. [file:line] Rule: §N. Observation: <one line>`
No findings → emit: `✓ No JS/TS violations found.`
Load only this file for JS/TS changes. Do not load other instruction files for unrelated file types.
