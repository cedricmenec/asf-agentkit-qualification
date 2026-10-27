export function add(left, right) {
  if (!Number.isFinite(left) || !Number.isFinite(right)) {
    throw new TypeError('Expected two finite numbers');
  }
  return left + right;
}

export function subtract(left, right) {
  if (!Number.isFinite(left) || !Number.isFinite(right)) {
    throw new TypeError('Expected two finite numbers');
  }
  return left - right;
}

export function multiply(left, right) {
  if (!Number.isFinite(left) || !Number.isFinite(right)) {
    throw new TypeError('Expected two finite numbers');
  }
  return left * right;
}
