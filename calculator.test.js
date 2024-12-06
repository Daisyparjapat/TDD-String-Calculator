const Calculator = require('./calculator');

describe('Calculator Tests', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  // Test for empty string
  test('should return 0 for an empty string input', () => {
    expect(calculator.handleEmptyString("")).toBe(0);
  });

  // Test for single number
  test('should return the single number for a single number input', () => {
    expect(calculator.calculate("add", 2)).toBe(2);
    expect(calculator.calculate("subtract", 2)).toBe(2);
    expect(calculator.calculate("multiply", 2)).toBe(2);
    expect(calculator.calculate("divide", 2)).toBe(2);
  });

  // Test for two numbers
  test('should add two numbers correctly', () => {
    expect(calculator.calculate("add", 5, 3)).toBe(8); 
  });

  test('should subtract two numbers correctly', () => {
    expect(calculator.calculate("subtract", 5, 3)).toBe(2); 
  });

  test('should multiply two numbers correctly', () => {
    expect(calculator.calculate("multiply", 5, 3)).toBe(15);
  });

  test('should divide two numbers correctly', () => {
    expect(calculator.calculate("divide", 6, 3)).toBe(2);
  });

 // Test numbers with newlines and commas
 test('should calculate correctly with numbers separated by newlines or commas', () => {
  expect(calculator.calculateFromString("add", "5, 3, 2")).toBe(10);  // 5 + 3 + 2 = 10
  expect(calculator.calculateFromString("subtract", "5\n3\n1")).toBe(1);  // 5 - 3 - 1 = 1
  expect(calculator.calculateFromString("multiply", "2,3\n2")).toBe(12);  // 2 * 3 * 2 = 12
  expect(calculator.calculateFromString("divide", "12\n2,3")).toBe(2);  // 12 / 2 / 3 = 2
});
});
