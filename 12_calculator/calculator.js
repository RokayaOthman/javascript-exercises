const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(...numbers) {
  // numbers is array for as a rest parameter
	return numbers.reduce((total,current) => total + current, 0);
};

const multiply = function(...numbers) {
  return numbers.reduce((total, current) => total * current, 1);
};

const power = function(a, b) {
  let result = 1
	for (let i = 1; i <= b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(number) {
  if (number == 1 || number == 0)
  {
    return 1
  }
   return number * factorial(number - 1);
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
