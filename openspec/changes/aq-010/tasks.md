# Tasks

## 1. Implementation and deterministic tests

- [x] 1.1 Add and export `absolute(value)` in `src/calculator.mjs` using a `Number.isFinite` guard that throws `TypeError` for rejected input; verify the module imports and `absolute(-2)` returns `2` with `node --input-type=module -e "import { absolute } from './src/calculator.mjs'; if (absolute(-2) !== 2) process.exit(1)"`.
- [x] 1.2 Add deterministic native Node tests to `test/calculator.test.mjs` for positive, negative, zero, non-numeric (`'2'`, `null`, `undefined`), `NaN`, `Infinity`, and `-Infinity`; verify `npm test` exits 0 and each accepted result and each `TypeError` case is asserted.
- [x] 1.3 Confirm the change does not alter `add` or `subtract` behavior, `package.json`, `package-lock.json`, workflows, or configuration; verify `git diff --name-only HEAD` reports only `src/calculator.mjs`, `test/calculator.test.mjs`, and `openspec/changes/aq-010/tasks.md`.

## 2. Integration validation

- [x] 2.1 Run `npm run check` under Node 26.13.0; verify exit code 0 and that both the native test suite and the esbuild bundle check complete successfully.

## Manual acceptance

- GIVEN the published draft PR diff, WHEN a human reviewer inspects it, THEN the diff contains only the absolute value implementation, its tests, and the OpenSpec planning artifacts, with no dependency, workflow, configuration, secret, deployment, or AQ-009 changes.
- GIVEN a human runs the implemented module under Node 26.13.0, WHEN they apply `absolute` to representative positive, negative, zero, non-numeric, `NaN`, and infinity inputs, THEN the observed results and `TypeError` failures match the delta specification.

## Post-sync review

- Independently compare the post-sync canonical spec with the aq-010 delta and confirm every requirement and scenario is preserved without weakening.
- Archive the change only after the project's review requirements are satisfied.
- Verify independent GitHub PR CI at the exact published SHA, then complete the manual merge review; do not auto-merge or retry any paid invocation.
