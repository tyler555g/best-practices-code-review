# @tyler.given/best-practices-code-review

Mechanical, per-file-type code review agent powered by the
[@tyler.given/best-practices-content](https://github.com/tyler555g/best-practices) knowledge base.

## What it does

On install, copies agent instruction files into your project:

| File installed | Purpose |
|---|---|
| `AGENTS.md` | Copilot cloud agent / Codex — code review persona |
| `CLAUDE.md` | Claude Code — code review persona |
| `.github/instructions/javascript.instructions.md` | JS/TS checklist (applyTo `*.js,*.ts`) |
| `.github/instructions/markdown.instructions.md` | Markdown content checklist |
| `.github/instructions/config.instructions.md` | JSON/YAML/workflow checklist |
| `.github/instructions/commits.instructions.md` | Commit message checklist (applyTo `**`) |

Each instruction file is ≤ 2,000 characters — well under Copilot code review's 4,000-char limit.
Files load on demand per file type (12-Factor F3: own your context window).

## Install

```bash
npm install --save-dev @tyler.given/best-practices-code-review
```

The `postinstall` script runs automatically and copies the agent files.

### `--ignore-scripts` users

```bash
npm install --ignore-scripts --save-dev @tyler.given/best-practices-code-review
npx @tyler.given/best-practices-code-review setup
```

## What the postinstall script does

The installer (`bin/setup.js`):
1. Copies `AGENTS.md` and `CLAUDE.md` to your project root
2. Copies `.github/instructions/*.instructions.md` to your `.github/instructions/`
3. All operations are idempotent — safe to re-run on `npm update`

No network calls. No secrets. No side effects beyond writing those files.

## Pair with the Rubber Duck Agent

For Socratic PR review that transforms findings into *why* questions:

```bash
npm install --save-dev @tyler.given/best-practices-rubber-duck
```

## Part of the best-practices ecosystem

- [@tyler.given/best-practices](https://github.com/tyler555g/best-practices) — main skill
- [@tyler.given/best-practices-content](https://github.com/tyler555g/best-practices) — knowledge base
- [@tyler.given/best-practices-rubber-duck](https://github.com/tyler555g/best-practices-rubber-duck) — Socratic reviewer

## License

MIT
