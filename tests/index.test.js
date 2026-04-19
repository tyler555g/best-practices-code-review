import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = resolve(__dirname, '..');

test('package.json has required fields', () => {
  const pkg = JSON.parse(readFileSync(join(PKG_ROOT, 'package.json'), 'utf8'));
  assert.equal(pkg.name, '@tyler.given/best-practices-code-review');
  assert.equal(pkg.type, 'module');
  assert.ok(pkg.files, 'files allowlist must exist');
  assert.ok(pkg.publishConfig?.access === 'public', 'publishConfig.access must be public');
  assert.ok(pkg.engines?.node, 'engines.node must be set');
});

test('AGENTS.md exists and has required sections', () => {
  const content = readFileSync(join(PKG_ROOT, 'AGENTS.md'), 'utf8');
  assert.ok(content.includes('12-Factor'), 'AGENTS.md must reference 12-Factor Agents');
  assert.ok(content.includes('Constraints'), 'AGENTS.md must have Constraints section');
  assert.ok(content.includes('Never @-mention') || content.includes('no auto-tagging') || content.includes('No auto-tagging'), 'AGENTS.md must prohibit auto-tagging');
});

test('CLAUDE.md exists and has required sections', () => {
  const content = readFileSync(join(PKG_ROOT, 'CLAUDE.md'), 'utf8');
  assert.ok(content.includes('12-Factor'), 'CLAUDE.md must reference 12-Factor Agents');
  assert.ok(content.includes('Constraints'), 'CLAUDE.md must have Constraints section');
});

test('all instruction files have applyTo frontmatter', () => {
  const instructionsDir = join(PKG_ROOT, '.github', 'instructions');
  const files = readdirSync(instructionsDir).filter(f => f.endsWith('.instructions.md'));
  assert.ok(files.length >= 3, 'at least 3 instruction files required');
  for (const file of files) {
    const content = readFileSync(join(instructionsDir, file), 'utf8');
    assert.ok(content.startsWith('---'), `${file} must have YAML frontmatter`);
    assert.ok(content.includes('applyTo'), `${file} must have applyTo field`);
  }
});

test('bin/setup.js exists and is executable node script', () => {
  const setupPath = join(PKG_ROOT, 'bin', 'setup.js');
  assert.ok(existsSync(setupPath), 'bin/setup.js must exist');
  const content = readFileSync(setupPath, 'utf8');
  assert.ok(content.startsWith('#!/usr/bin/env node'), 'setup.js must have node shebang');
});

test('content/agent-definition.md exists', () => {
  assert.ok(
    existsSync(join(PKG_ROOT, 'content', 'agent-definition.md')),
    'content/agent-definition.md must exist'
  );
});
