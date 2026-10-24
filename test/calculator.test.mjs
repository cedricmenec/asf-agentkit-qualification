import assert from 'node:assert/strict';
import test from 'node:test';
import { add, subtract } from '../src/calculator.mjs';

test('add accepts finite operands', () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-4, 1), -3);
});

test('subtract accepts finite operands', () => {
  assert.equal(subtract(8, 3), 5);
  assert.equal(subtract(1, 4), -3);
});

test('rejects non-finite operands', () => {
  assert.throws(() => add(Number.NaN, 1), TypeError);
  assert.throws(() => subtract(1, Number.POSITIVE_INFINITY), TypeError);
});
