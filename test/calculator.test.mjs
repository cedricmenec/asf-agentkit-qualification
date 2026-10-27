import assert from 'node:assert/strict';
import test from 'node:test';
import { add, subtract, multiply } from '../src/calculator.mjs';

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

test('multiply accepts finite operands', () => {
  assert.equal(multiply(3, 4), 12);
  assert.equal(multiply(-4, 3), -12);
  assert.equal(multiply(0, 7), 0);
});

test('multiply rejects non-finite operands', () => {
  assert.throws(() => multiply(Number.NaN, 2), TypeError);
  assert.throws(() => multiply(1, Number.POSITIVE_INFINITY), TypeError);
  assert.throws(() => multiply(1, Number.NEGATIVE_INFINITY), TypeError);
});

test('multiply rejects non-numeric operands', () => {
  assert.throws(() => multiply('3', 4), TypeError);
  assert.throws(() => multiply(2, null), TypeError);
  assert.throws(() => multiply(undefined, 2), TypeError);
  assert.throws(() => multiply(true, 2), TypeError);
  assert.throws(() => multiply({}, 2), TypeError);
});
