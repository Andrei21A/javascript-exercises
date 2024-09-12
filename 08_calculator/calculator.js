const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  let sum = 0;
	for(arg of arr)
  sum += arg;
  return sum;
};

const multiply = function(arr) {
  let mult = 1;
	for(arg of arr)
  mult *= arg;
  return mult;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  let fac = 1;
	for(let i = 1; i <= x; i++) {
    fac *= i;
  }
  return fac;
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
