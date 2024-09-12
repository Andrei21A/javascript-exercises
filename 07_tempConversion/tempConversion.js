const convertToCelsius = function(x) {
  return Math.round((x - 32) * 5 / 9 * 10) / 10;
};

const convertToFahrenheit = function(x) {
    return Number((x * 9 / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
