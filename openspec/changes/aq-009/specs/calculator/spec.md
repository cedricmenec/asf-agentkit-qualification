# Spec Delta

## Purpose

Defines the qualification calculator's multiplication behavior and finite-number operand validation so callers can rely on consistent products and error handling.

## ADDED Requirements

### Requirement: Finite-number multiplication

The calculator SHALL provide a multiplication operation that accepts two finite numeric operands and returns their product, including when either operand is zero or negative.

#### Scenario: Product of positive operands

- **GIVEN** the operands `3` and `4`
- **WHEN** `multiply(3, 4)` is invoked
- **THEN** it returns `12`

#### Scenario: Product with a negative operand

- **GIVEN** the operands `-4` and `3`
- **WHEN** `multiply(-4, 3)` is invoked
- **THEN** it returns `-12`

#### Scenario: Product with zero

- **GIVEN** the operands `0` and `7`
- **WHEN** `multiply(0, 7)` is invoked
- **THEN** it returns `0`

### Requirement: Multiplication operand validation

The calculator SHALL reject any multiplication operand that is not a finite number by throwing `TypeError` and SHALL NOT return a product.

#### Scenario: Reject a NaN operand

- **GIVEN** one operand is `NaN`
- **WHEN** `multiply(NaN, 2)` is invoked
- **THEN** it throws `TypeError`

#### Scenario: Reject an infinite operand

- **GIVEN** one operand is `Infinity` or `-Infinity`
- **WHEN** `multiply(1, Infinity)` is invoked
- **THEN** it throws `TypeError`

#### Scenario: Reject a non-numeric operand

- **GIVEN** one operand is a non-numeric value such as a string, `null`, `undefined`, boolean, or object
- **WHEN** `multiply('3', 4)` is invoked
- **THEN** it throws `TypeError`
