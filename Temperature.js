const tempResult = document.querySelector("#tempResult");

const celsiusToFahrenheit = () => {
  const result = parseFloat(((convertNumberFrom.value * 9) / 5) + 32);
  tempResult.textContent = result.toFixed(2);
};

const celsiusToKelvin = () => {
  const result = parseFloat(convertNumberFrom.value) + 273.15;
  tempResult.textContent = result.toFixed(2);
};

const fahrenheitToCelsius = () => {
  const result = parseFloat((convertNumberFrom.value - 32) * (5 / 9));
  tempResult.textContent = result.toFixed(2);
};

const fahrenheitToKelvin = () => {
  const result = parseFloat((convertNumberFrom.value - 32) * (5 / 9) + 273.15);
  tempResult.textContent = result.toFixed(2);
};

const kelvinToCelsius = () => {
  const result = parseFloat(convertNumberFrom.value) - 273.15;
  tempResult.textContent = result.toFixed(2);
};

const kelvinToFahrenheit = () => {
  const result = parseFloat((convertNumberFrom.value - 273.15) * (9 / 5) + 32);
  tempResult.textContent = result.toFixed(2);
};

const temperatureChecker = () => {
  const fromTemp = document.querySelector("#fromTemp");
  const toTemp = document.querySelector("#toTemp");
 
  if (fromTemp.value === "celsius" && toTemp.value === "fahrenheit") {
    celsiusToFahrenheit();
  } else if (fromTemp.value === "celsius" && toTemp.value === "kelvin") {
    celsiusToKelvin();
  } else if (fromTemp.value === "fahrenheit" && toTemp.value === "celsius") {
    fahrenheitToCelsius();
  } else if (fromTemp.value === "fahrenheit" && toTemp.value === "kelvin") {
    fahrenheitToKelvin();
  } else if (fromTemp.value === "kelvin" && toTemp.value === "celsius") {
    kelvinToCelsius();
  } else if (fromTemp.value === "kelvin" && toTemp.value === "fahrenheit") {
    kelvinToFahrenheit();
  }
  else {
    tempResult.textContent = "Not possible!";
  }
};

const convertNumberFrom = document.querySelector("#convertFrom");
convertNumberFrom.addEventListener("input", temperatureChecker);