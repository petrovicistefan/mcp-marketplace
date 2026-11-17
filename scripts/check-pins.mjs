#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const root = new URL('..', import.meta.url).pathname;
const pluginsDir = join(root, 'plugins');

function* walkMcpJson(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walkMcpJson(p);
    else if (name === '.mcp.json') yield p;
  }
}

const pinRe = /^(?<pkg>@?[^@]+)@(?<ver>\d+\.\d+\.\d+(?:-[0-9A-Za-z.+-]+)?)$/;
let failed = 0;

for (const file of walkMcpJson(pluginsDir)) {
  const doc = JSON.parse(readFileSync(file, 'utf8'));
  const servers = doc.mcpServers || {};
  for (const [name, cfg] of Object.entries(servers)) {
    const args = cfg.args || [];
    const pinned = args.find((a) => typeof a === 'string' && a.includes('@') && !a.startsWith('-'));
    if (!pinned) {
      console.error(`${file}: no package@version pin for ${name}`);
      failed++;
      continue;
    }
    const m = pinned.match(pinRe);
    if (!m) {
      console.error(`${file}: cannot parse pin ${pinned}`);
      failed++;
      continue;
    }
    const { pkg, ver } = m.groups;
    let latest;
    try {
      latest = execFileSync('npm', ['view', pkg, 'version'], { encoding: 'utf8' }).trim();
    } catch (e) {
      console.error(`${file}: npm view failed for ${pkg}: ${e.message}`);
      failed++;
      continue;
    }
    if (latest !== ver) {
      console.error(`${file}: ${pkg} pinned @${ver} but npm has ${latest}`);
      failed++;
    } else {
      console.log(`ok ${pkg}@${ver} (${file})`);
    }
  }
}

if (failed) {
  console.error(`check-pins: ${failed} failure(s)`);
  process.exit(1);
}
console.log('check-pins: all pins match npm');
