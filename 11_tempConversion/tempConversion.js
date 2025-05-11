const convertToCelsius = function(temperature) {
     let temperatureInCelsius=Math.round((temperature-32)*(5/9)*10)/10;
     return(temperatureInCelsius);
};

const convertToFahrenheit = function(temperature) {
     let temperatureInFahrenheit=Math.round(((temperature*(9/5))+32)*10)/10;
     return(temperatureInFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
