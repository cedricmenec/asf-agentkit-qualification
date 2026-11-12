# Design

## Context

See `proposal.md` - Why. The calculator is a single ESM module, `src/calculator.mjs`, with named exports `add` and `subtract`. Both operations use the same guard, `if (!Number.isFinite(left) || !Number.isFinite(right))`, and throw `TypeError('Expected two finite numbers')` before computing a result.

Tests use the built-in `node:test` runner and `node:assert/strict`. `npm run check` first runs `node --test` and then `scripts/check-build.mjs`, which imports `esbuild` 0.25.10 and builds an in-memory Node 22 ESM bundle. The project requires Node `>=22 <23`, installs with `npm ci --ignore-scripts`, and forbids external services, credentials, paid calls, deployment, and workflow changes.

## Goals / Non-Goals

**Goals:**

- Add `multiply(left, right)` with the same public shape and validation semantics as `add` and `subtract`.
- Cover positive, negative, zero, and rejected operands with deterministic native Node tests.
- Keep the change confined to the calculator module and its test file.
- Preserve `npm run check`, the `esbuild` development dependency, and the lockfile.

**Non-Goals:**

- No shared validation refactor and no change to `add` or `subtract`.
- No UI, API, package publication, deployment, or external integration.
- No changes to `package.json`, `package-lock.json`, `scripts/check-build.mjs`, workflows, configuration, backlog, or `AGENTS.md`.

## Decisions

1. **Duplicate the finite-number guard inside `multiply`.** This matches the existing convention exactly, keeps the diff minimal, and avoids touching `add`, `subtract`, or their tests. Alternatives considered: extracting a shared validation helper is unnecessary for a bounded qualification change; relying on JavaScript coercion was rejected because `NaN`, infinities, and non-numeric inputs would silently produce `NaN` or infinity instead of `TypeError`.

2. **Keep `multiply` in `src/calculator.mjs` as a named export.** The module is already the public surface and the `esbuild` entry point, so no new module or build wiring is needed.

3. **Extend the existing test file with `node:test` and `node:assert/strict`.** This follows the current test style and requires no harness or dependency changes. Cases cover positive, negative, and zero products plus `NaN`, `Infinity`, `-Infinity`, and non-numeric operands.

4. **Do not modify the dependency or build configuration.** No new package is required, and leaving `package.json` and `package-lock.json` untouched preserves the reproducibility of `npm ci --ignore-scripts`.

## Risks / Trade-offs

- **Missing guard would silently return `NaN` or infinity** → Add explicit rejection scenarios and tests for `NaN`, infinities, and non-numeric operands.
- **An install or test command could rewrite `package-lock.json`** → Use `npm ci --ignore-scripts` and verify the lockfile with `git diff --exit-code -- package-lock.json`.
- **Duplicated validation could drift from `add` and `subtract`** → Accept for this bounded change; consolidate only in a future change that owns that refactor.
- **`scripts/check-build.mjs` only asserts the presence of `function add(` in the bundle** → It will not fail if `multiply` is absent, so direct `node:test` coverage is the evidence for the new behavior; the script itself is not changed.

## Migration Plan

1. Add and export `multiply` in `src/calculator.mjs`.
2. Add deterministic tests to `test/calculator.test.mjs`.
3. Run `npm ci --ignore-scripts` and `npm run check`, then confirm `package-lock.json` is unchanged.
4. Roll back by reverting the two source/test files; there is no data, API, or deployment migration.

No open questions remain that would change the specs, approach, or task breakdown.
