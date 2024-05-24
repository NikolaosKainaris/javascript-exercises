const roundToOneDecimal = function(x) {
  return Math.round(x*10)/10
}

const convertToCelsius = function(temperatureCelcius) {
  return roundToOneDecimal((temperatureCelcius - 32) * 5/9)
};

const convertToFahrenheit = function(temperatureFahrenheit) {
  return roundToOneDecimal((temperatureFahrenheit * 9/5) + 32)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
