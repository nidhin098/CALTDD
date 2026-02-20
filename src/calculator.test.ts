// src/calculator.test.ts

import { describe, it, expect } from "bun:test";
import { calculate } from "./calculator";

describe("Calculator - Success Cases", () => {

  const successCases = [
    { name: "addition", a: 2, b: 3, op: "add", expected: 5 },
    { name: "subtraction", a: 5, b: 2, op: "subtract", expected: 3 },
    { name: "multiplication", a: 4, b: 3, op: "multiply", expected: 12 },
    { name: "division", a: 10, b: 2, op: "divide", expected: 5 },

    // Extra edge cases
    { name: "negative addition", a: -2, b: -3, op: "add", expected: -5 },
    { name: "multiply with zero", a: 10, b: 0, op: "multiply", expected: 0 },
    { name: "decimal division", a: 5, b: 2, op: "divide", expected: 2.5 },
  ];

  successCases.forEach(({ name, a, b, op, expected }) => {
    it(`should handle ${name}`, () => {
      const result = calculate(a, b, op as any);
      expect(result).toBe(expected);
    });
  });

});


describe("Calculator - Error Cases", () => {

  it("should throw error when dividing by zero", () => {
    expect(() => calculate(10, 0, "divide")).toThrow(
      "Cannot divide by zero"
    );
  });

  it("should throw error for invalid operation", () => {
    expect(() =>
      calculate(2, 3, "power" as any)
    ).toThrow("Invalid operation");
  });

});