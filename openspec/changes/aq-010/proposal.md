# Proposal

## Why

This is a bounded qualification change: it exercises the AgentKit 1.5.1 apply path on a dedicated branch that has no prior implementation. The change adds one small, isolated calculator operation so the planning, apply, and review flow can be validated without touching sensitive areas.

## What Changes

- Add and export `absolute(value)` from `src/calculator.mjs`.
- Return the absolute value for finite positive, negative, and zero numeric inputs.
- Throw `TypeError` for non-numeric values, `NaN`, and positive or negative infinity.
- Add deterministic Node tests for the accepted and rejected cases in `test/calculator.test.mjs`.
- Preserve the existing `npm run check` command, dependencies, and `package-lock.json`.
- Leave the current `add` and `subtract` behavior unchanged.

## Capabilities

### New Capabilities

- `calculator`: Defines the observable behavior of the calculator's absolute value operation, including accepted finite inputs and rejected values.

### Modified Capabilities

_None._

## Impact

- Code: `src/calculator.mjs`, `test/calculator.test.mjs`.
- Commands and dependencies: `npm run check` must continue to pass on Node 26.13.0; no dependency, lockfile, workflow, or configuration changes are in scope.
- This demonstration does not cover UI behavior, browser or real-device acceptance, deployment, secrets, GitHub permissions, auto-merge, paid retries, or the AQ-009 pull request.
