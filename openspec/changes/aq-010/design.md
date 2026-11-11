# Design

## Context

See `proposal.md - Why`. The calculator in `src/calculator.mjs` currently exports `add` and `subtract`. Both validate each operand with `Number.isFinite` and throw a `TypeError` with the message `Expected two finite numbers`. Tests live in `test/calculator.test.mjs` and use the built-in `node:test` runner. `npm run check` runs those tests and then `scripts/check-build.mjs`, which bundles `src/calculator.mjs` with esbuild.

The change must stay within the two existing source/test files and must not alter dependencies, the lockfile, workflows, or configuration.

## Goals / Non-Goals

**Goals:**

- Add one exported `absolute(value)` operation with the same validation style as the existing operations.
- Cover positive, negative, zero, non-numeric, `NaN`, and infinity cases with deterministic Node tests.
- Keep `npm run check` passing under Node 26.13.0.

**Non-Goals:**

- Changing `add`, `subtract`, their validation, or their tests.
- Introducing UI, browser, or real-device behavior.
- Adding dependencies, scripts, workflows, or configuration changes.

## Decisions

### Validate before delegating to `Math.abs`

`absolute` will first reject non-finite values with `Number.isFinite` and then return `Math.abs(value)`. `Number.isFinite` returns `false` for non-numeric values, `NaN`, and both infinities, so one guard covers every rejected case from the spec.

Alternative considered: use `typeof value === 'number'` and then check `Number.isFinite`. That adds a redundant branch because `Number.isFinite` already rejects non-numbers.

Alternative considered: implement the sign logic manually. `Math.abs` is the standard runtime primitive and keeps the implementation minimal.

### Reuse the existing validation style

The guard will throw `TypeError` to match `add` and `subtract`. A dedicated message such as `Expected a finite number` makes the single-argument failure clear without changing the existing functions.

### Add tests to the existing test file

The new cases will be added to `test/calculator.test.mjs` using `node:test` and `node:assert/strict`, matching the current structure. Tests will assert numeric results for finite inputs and `TypeError` for each rejected category. This keeps discovery automatic through `node --test` and avoids adding configuration.

## Risks / Trade-offs

- [Negative zero may be asserted incorrectly] -> Test zero and `-0` consistently with `Math.abs`, which returns positive zero, and avoid relying on implementation-specific sign behavior beyond the spec.
- [Existing build check only looks for `function add(`] -> Keep `add` unchanged so `scripts/check-build.mjs` continues to pass, and rely on `npm run check` for full validation.
- [Validation drift between operations] -> Use the same `Number.isFinite` guard and `TypeError` type as the existing functions.
