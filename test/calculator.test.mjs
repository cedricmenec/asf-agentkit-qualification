import assert from 'node:assert/strict';
import test from 'node:test';
import { absolute, add, subtract } from '../src/calculator.mjs';

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

test('absolute returns the absolute value of finite numbers', () => {
  assert.equal(absolute(4), 4);
  assert.equal(absolute(-4), 4);
  assert.equal(absolute(0), 0);
});

test('absolute rejects non-numeric inputs', () => {
  assert.throws(() => absolute('2'), TypeError);
  assert.throws(() => absolute(null), TypeError);
  assert.throws(() => absolute(undefined), TypeError);
});

test('absolute rejects non-finite numeric inputs', () => {
  assert.throws(() => absolute(Number.NaN), TypeError);
  assert.throws(() => absolute(Number.POSITIVE_INFINITY), TypeError);
  assert.throws(() => absolute(Number.NEGATIVE_INFINITY), TypeError);
});
