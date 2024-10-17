const { test, expect } = require("playwright/test");
const Calculator = require("../pageObject/calculate");

test.describe("Calculator Tests", () => {
  let calculator;

  test.beforeEach(() => {
    calculator = new Calculator();
  });

  test("should add two numbers", () => {
    expect(calculator.add(5, 3)).toBe(8);
    console.log(calculator.add(10, 5));
    expect(calculator.add(-5, 3)).toBe(-2);
  });

  test("should subtract two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(3, 5)).toBe(-2);
  });

  test("should multiply two numbers", () => {
    expect(calculator.multiply(5, 3)).toBe(15);
    expect(calculator.multiply(0, 3)).toBe(0);
  });

  test("should divide two numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
  });

  test("should find the modulus of two numbers", () => {
    expect(calculator.modulus(5, 3)).toBe(2);
    expect(() => calculator.modulus(6, 0)).toThrow(
      "Cannot find modulus by zero"
    );
  });
});
