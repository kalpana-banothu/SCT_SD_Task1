const temperatureInput = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");
const resultValue = document.querySelector(".result-value");

convertBtn.addEventListener("click", convertTemperature);

swapBtn.addEventListener("click", function () {
    const temp = fromUnit.value;

    fromUnit.value = toUnit.value;
    toUnit.value = temp;

    convertTemperature();
});

function convertTemperature() {

    const temperature = Number(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (temperatureInput.value === "") {
        resultValue.textContent = "Enter a temperature";
        return;
    }

    if (from === "kelvin" && temperature < 0) {
        resultValue.textContent = "Invalid temperature";
        return;
    }

    let celsius;

    // Convert to Celsius first
    if (from === "celsius") {
        celsius = temperature;
    } 
    else if (from === "fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } 
    else {
        celsius = temperature - 273.15;
    }

    // Convert Celsius to target unit
    let converted;

    if (to === "celsius") {
        converted = celsius;
    } 
    else if (to === "fahrenheit") {
        converted = (celsius * 9 / 5) + 32;
    } 
    else {
        converted = celsius + 273.15;
    }

    resultValue.textContent =
        `${converted.toFixed(2)} ${getSymbol(to)}`;
}

function getSymbol(unit) {

    if (unit === "celsius") {
        return "°C";
    }

    if (unit === "fahrenheit") {
        return "°F";
    }

    return "K";
}