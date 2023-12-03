
function celToFar() {
  let celsiusValue = parseFloat(celsius.value);
  let outputInFahrenheit = (celsiusValue * 9/5) + 32;
  let outputInKelvin = celsiusValue + 273.15;

  fahrenheit.value = parseFloat(outputInFahrenheit.toFixed(2));
  kelvin.value = parseFloat(outputInKelvin.toFixed(2));
}

function farToCel() {
  let fahrenheitValue = parseFloat(fahrenheit.value);
  let outputInCelsius = (fahrenheitValue - 32) * 5/9;
  let outputInKelvin = (fahrenheitValue + 459.67) * 5/9;

  celsius.value = parseFloat(outputInCelsius.toFixed(2));
  kelvin.value = parseFloat(outputInKelvin.toFixed(2));
}
