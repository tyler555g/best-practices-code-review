#!/usr/bin/env node
/**
 * Installer for @tyler.given/best-practices-code-review
 *
 * Copies AGENTS.md, CLAUDE.md, and .github/instructions/ files into the
 * target project. Idempotent — uses begin/end markers; safe to re-run on update.
 *
 * Manual fallback for --ignore-scripts users:
 *   npx @tyler.given/best-practices-code-review setup
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = resolve(__dirname, '..');
const TARGET_ROOT = process.env.INIT_CWD || process.cwd();

const BEGIN = '<!-- BEGIN best-practices-code-review -->';
const END = '<!-- END best-practices-code-review -->';

function installFile(srcPath, destPath) {
  const src = readFileSync(srcPath, 'utf8');
  const block = `${BEGIN}\n${src}\n${END}`;

  if (existsSync(destPath)) {
    let existing = readFileSync(destPath, 'utf8');
    if (existing.includes(BEGIN) && existing.includes(END)) {
      // Replace existing block
      existing = existing.replace(new RegExp(`${BEGIN}[\\s\\S]*?${END}`), block);
      writeFileSync(destPath, existing);
      console.log(`  updated: ${destPath}`);
      return;
    }
  }

  writeFileSync(destPath, block);
  console.log(`  installed: ${destPath}`);
}

function installPlain(srcPath, destPath) {
  const src = readFileSync(srcPath, 'utf8');
  writeFileSync(destPath, src);
  console.log(`  installed: ${destPath}`);
}

console.log('best-practices-code-review: installing agent files...');

// AGENTS.md and CLAUDE.md go to project root
installPlain(join(PKG_ROOT, 'AGENTS.md'), join(TARGET_ROOT, 'AGENTS.md'));
installPlain(join(PKG_ROOT, 'CLAUDE.md'), join(TARGET_ROOT, 'CLAUDE.md'));

// .github/instructions/ files
const instructionsSrc = join(PKG_ROOT, '.github', 'instructions');
const instructionsDest = join(TARGET_ROOT, '.github', 'instructions');
mkdirSync(instructionsDest, { recursive: true });

for (const file of readdirSync(instructionsSrc)) {
  if (file.endsWith('.instructions.md')) {
    installPlain(join(instructionsSrc, file), join(instructionsDest, file));
  }
}

console.log('best-practices-code-review: done.');
