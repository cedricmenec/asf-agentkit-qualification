# Tasks

All checkboxes below describe work that is still pending. No unresolved requirement blocks this plan, and no task is marked complete by the planning phase.

## 1. Multiplication implementation

- [x] 1.1 Add the named export `multiply(left, right)` to `src/calculator.mjs`, returning the product when both operands are finite and throwing `TypeError('Expected two finite numbers')` otherwise; verify with `node --input-type=module -e "import { multiply } from './src/calculator.mjs'; if (multiply(3, 4) !== 12 || multiply(-4, 3) !== -12 || multiply(0, 7) !== 0) process.exit(1)"`.
- [x] 1.2 Extend `test/calculator.test.mjs` with deterministic cases for positive, negative, and zero products plus `NaN`, `Infinity`, `-Infinity`, and non-numeric operands; verify `npm test` exits 0 and the new multiplication tests are reported as passing.

## 2. Qualification checks

- [x] 2.1 Run `npm ci --ignore-scripts` then `npm run check`; verify exit 0, esbuild reports the in-memory bundle as valid, and `git diff --exit-code -- package-lock.json` exits 0, confirming the lockfile is unchanged.
- [x] 2.2 Review the changed product files and verify no workflow, configuration, backlog, `AGENTS.md`, `package.json`, or `package-lock.json` modification is present; verify `git status --porcelain` contains no such files.

## Manual acceptance

No browser, touch, keyboard, visual, or device-level surface exists in this change, so none of those checks apply. A human reviewer must still confirm the multiplication contract, the `TypeError` convention, the requirement that the PR stays in draft until independent checks pass, and the absence of forbidden file changes. This section records required human checks only; it is not evidence that any human check occurred.

## Post-sync review

- After apply, run the project's OPSX semantic sync and compare the canonical `openspec/specs/calculator/spec.md` against this delta, preserving every requirement and scenario.
- Archive the change only after the semantic comparison and the project's review requirements are satisfied.
- Open or update a draft PR, wait for independent GitHub PR CI on the exact head SHA, and complete the required manual merge review; no auto-merge is authorized.
- These steps occur after apply and are outside the implementation checklist; they are not evidence that sync, archive, CI, or merge occurred.
