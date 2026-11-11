# Spec Delta

## Purpose

Defines the observable contract of the calculator's absolute value operation so its finite-number results and rejected inputs can be verified deterministically.

## ADDED Requirements

### Requirement: Finite numbers return their absolute value

The calculator SHALL return the absolute value of any finite numeric input, preserving the numeric result for positive values, negating negative values, and returning zero for zero.

#### Scenario: Positive finite number

- **GIVEN** a finite positive numeric input
- **WHEN** the absolute value operation is applied
- **THEN** the result equals the input unchanged

#### Scenario: Negative finite number

- **GIVEN** a finite negative numeric input
- **WHEN** the absolute value operation is applied
- **THEN** the result equals the input multiplied by negative one

#### Scenario: Zero

- **GIVEN** the numeric input zero
- **WHEN** the absolute value operation is applied
- **THEN** the result is zero

### Requirement: Non-numeric input is rejected

The calculator SHALL reject input that is not a number, including strings, `null`, and `undefined`, by throwing a `TypeError` instead of returning a result.

#### Scenario: String input

- **GIVEN** a string input
- **WHEN** the absolute value operation is applied
- **THEN** a `TypeError` is thrown

#### Scenario: Null or undefined input

- **GIVEN** `null` or `undefined` as input
- **WHEN** the absolute value operation is applied
- **THEN** a `TypeError` is thrown

### Requirement: Non-finite numeric input is rejected

The calculator SHALL reject `NaN`, positive infinity, and negative infinity by throwing a `TypeError` instead of returning a result.

#### Scenario: NaN input

- **GIVEN** `NaN` as input
- **WHEN** the absolute value operation is applied
- **THEN** a `TypeError` is thrown

#### Scenario: Positive infinity input

- **GIVEN** positive infinity as input
- **WHEN** the absolute value operation is applied
- **THEN** a `TypeError` is thrown

#### Scenario: Negative infinity input

- **GIVEN** negative infinity as input
- **WHEN** the absolute value operation is applied
- **THEN** a `TypeError` is thrown
