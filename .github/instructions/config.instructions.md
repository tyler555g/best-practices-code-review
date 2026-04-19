---
applyTo: "**/*.json,**/*.yml,**/*.yaml"
---

Check changed config/workflow files against `@tyler.given/best-practices-content`:

**Reference:** `technology_and_information/information_technology/npm-package-development.md` §4, §8

| # | Check | Rule ref |
|---|---|---|
| 1 | CI uses `npm ci` (not `npm install`) to enforce lockfile | §4 |
| 2 | CI includes `npm audit --audit-level=moderate` step | §4, §8 |
| 3 | Release workflow uses `npm publish --access public --provenance` | §4 |
| 4 | CI uses an Automation-type npm token (not personal token) | §4 |
| 5 | No secrets or tokens hardcoded in workflow files | §4 |
| 6 | `package.json` version follows semver and is bumped by automation | §5 |
| 7 | `package.json` `"files"` allowlist present | §1 |

**Output format:** numbered findings list only — `{n}. [file:line] Rule: §N. Observation: <one line>`
No findings → emit: `✓ No config/workflow violations found.`
Load only this file for JSON/YAML changes.
