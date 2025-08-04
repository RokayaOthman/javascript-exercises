const roundIfNeeded = (num) => Number.isInteger(num) ? num : parseFloat(num.toFixed(1));
// the (num) in the beginning is the parameter
// if statement comes before the '?'
// else comes after the ':'
// '=>' points to the logic that will be executed after the function runs

const convertToCelsius = function(Fahrenheit) {
  // °C= (5 / 9 ) * (F - 32)
  let number = (5 / 9) * (Fahrenheit - 32);
  return roundIfNeeded(number);
};

const convertToFahrenheit = function(Celsius) {
  // °F = (9 / 5) * C + 32
  let number = (9 / 5) * Celsius + 32;
  return roundIfNeeded(number);
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(0));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// °C= (5 / 9 ) * (F - 32)
// °F = (9 / 5) * C + 32
