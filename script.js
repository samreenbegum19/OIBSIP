function convertTemp() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unitSelect").value;
  const resultDiv = document.getElementById("result");

  // Input validation
  if (isNaN(temp)) {
    resultDiv.innerHTML = "❌ Please enter a numeric value.";
    return;
  }

  // Absolute zero check
  if ((unit === "C" && temp < -273.15) ||
      (unit === "F" && temp < -459.67) ||
      (unit === "K" && temp < 0)) {
    resultDiv.innerHTML = "⚠️ Temperature cannot go below absolute zero!";
    return;
  }

  let celsius, fahrenheit, kelvin;

  // Conversion formulas
  if (unit === "C") {
    celsius = temp;
    fahrenheit = (temp * 9/5) + 32;
    kelvin = temp + 273.15;
  } else if (unit === "F") {
    celsius = (temp - 32) * 5/9;
    fahrenheit = temp;
    kelvin = celsius + 273.15;
  } else if (unit === "K") {
    kelvin = temp;
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
  }

  // Display results
  resultDiv.innerHTML = `
    🌡️ Celsius: ${celsius.toFixed(2)} °C <br>
    🌡️ Fahrenheit: ${fahrenheit.toFixed(2)} °F <br>
    🌡️ Kelvin: ${kelvin.toFixed(2)} K
  `;
}
resultDiv.innerHTML = `
  <span>🌡️ Celsius: ${celsius.toFixed(2)} °C</span>
  <span>🔥 Fahrenheit: ${fahrenheit.toFixed(2)} °F</span>
  <span>❄️ Kelvin: ${kelvin.toFixed(2)} K</span>
`;
