function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

function calculate(a, b, operation) {
  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return "Invalid operation";
  }
}

console.log(calculate(10, 5, '+')); // Output: 15
console.log(calculate(10, 5, '-')); // Output: 5
console.log(calculate(10, 5, '*')); // Output: 50
console.log(calculate(10, 5, '/')); // Output: 2
console.log(calculate(10, 0, '/')); // Output: Cannot divide by zero
console.log(calculate(10, 5, '%')); // Output: Invalid operation