import assert from 'node:assert/strict';
import { build, version } from 'esbuild';

assert.equal(version, '0.25.10');

const result = await build({
  entryPoints: ['src/calculator.mjs'],
  bundle: true,
  platform: 'node',
  target: 'node22',
  format: 'esm',
  write: false,
});

assert.equal(result.errors.length, 0);
assert.equal(result.outputFiles.length, 1);
assert.ok(result.outputFiles[0].text.includes('function add('));
process.stdout.write(`esbuild ${version}: bundle en mémoire valide\n`);
