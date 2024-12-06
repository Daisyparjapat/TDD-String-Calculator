class Calculator {

  add(a) {
    return a + 0; 
  }

  subtract(a) {
    return a;  
  }

  multiply(a) {
    return a * 1;  
  }

  divide(a) {
    if (a === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / 1;  
  }

  calculate(operation, ...args) {
    if (args.length === 1) {
      switch (operation) {
        case 'add':
          return this.add(args[0]);
        case 'subtract':
          return this.subtract(args[0]);
        case 'multiply':
          return this.multiply(args[0]);
        case 'divide':
          return this.divide(args[0]);
        default:
          throw new Error(`Unknown operation: ${operation}`);
      }
    }
    if (args.length === 2) {
      const [a, b] = args;
      switch (operation) {
        case 'add':
          return a + b;
        case 'subtract':
          return a - b;
        case 'multiply':
          return a * b;
        case 'divide':
          if (b === 0) {
            throw new Error("Cannot divide by zero");
          }
          return a / b;
        default:
          throw new Error(`Unknown operation: ${operation}`);
      }
    }
  }
  
  handleEmptyString(expression) {
    if (expression.trim() === "") {
      return 0;
    }
    return expression;
  }
  }
  
  module.exports = Calculator;
  