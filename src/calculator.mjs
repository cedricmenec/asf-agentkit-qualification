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

export function absolute(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError('Expected a finite number');
  }
  return Math.abs(value);
}
