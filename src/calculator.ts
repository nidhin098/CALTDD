//Added change for PR Request//

export type Operation = "add" | "subtract" | "multiply" | "divide";

export function calculate(
  a: number,
  b: number,
  operation: Operation
): number {
  switch (operation) {
    case "add":
      return a + b;

    case "subtract":
      return a - b;

    case "multiply":
      return a * b;

    case "divide":
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;

    default:
      // This is extra safety (TypeScript usually prevents invalid ops)
      throw new Error("Invalid operation");
  }
}