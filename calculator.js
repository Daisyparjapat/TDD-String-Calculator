class Calculator {
  
  handleEmptyString(expression) {
    if (expression.trim() === "") {
      return 0;
    }
    return expression;
  }
  }
  
  module.exports = Calculator;
  