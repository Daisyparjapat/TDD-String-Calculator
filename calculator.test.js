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

});
