# Proposal

## Why

This is a bounded qualification change that exercises the OpenCode + OpenSpec plan, apply, and review cycle on a tiny, isolated, non-sensitive behavior: adding multiplication to the existing Node 22 calculator. It gives the qualification project a second functional increment while proving the checklist and review contract on real code.

## What Changes

- Add a public `multiply(left, right)` operation to `src/calculator.mjs` that returns the product of two finite numbers, including zero and negative operands.
- Reject `NaN`, infinite, and non-numeric operands with `TypeError`, matching the existing `add` and `subtract` convention.
- Extend `test/calculator.test.mjs` with deterministic native Node tests for positive, negative, zero, and rejected operands.
- Preserve Node 22 compatibility, the existing `npm run check` command, the `esbuild` development dependency, and `npm ci --ignore-scripts`.
- No breaking changes.

## Capabilities

### New Capabilities

- `calculator`: multiplication behavior and finite-number operand validation for the qualification calculator.

### Modified Capabilities

- None. This change adds only the multiplication requirement; existing `add` and `subtract` behavior is unchanged.

## Impact

- **Code**: `src/calculator.mjs` and `test/calculator.test.mjs`.
- **API**: one additional named export, `multiply`, from the calculator module.
- **Dependencies and systems**: no dependency changes, no `package-lock.json` change, and no workflow, permission, or deployment changes.

### Not covered by this demonstration

- No API, HTTP endpoint, UI, browser, touch, keyboard, or visual interaction.
- No package publication, deployment, secrets, external service calls, or paid model invocations.
- No changes to workflows, permissions, rulesets, backlog, `AGENTS.md`, or OpenSpec configuration.
- No OPSX semantic sync, archive, draft-PR creation, independent PR CI execution, or merge in the planning phase; those remain post-sync review steps.
- No change to `package.json`, `package-lock.json`, or `scripts/check-build.mjs`.

No unresolved requirements were identified, and no decisions were invented beyond the task contract.
