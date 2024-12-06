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

});
