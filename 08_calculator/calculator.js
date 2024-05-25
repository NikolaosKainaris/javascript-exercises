const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a-b
};

const sum = function(numbers) {
  return numbers.reduce((a,b) => add(a,b), 0)
};

const multiply = function(numbers) {
  return numbers.reduce((a,b) => a*b,1)

};

const power = function(a, b) {
  return Math.pow(a, b)
};

const factorial = function(a) {
  if (a === 0) return 1
  else return a * factorial(a-1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
