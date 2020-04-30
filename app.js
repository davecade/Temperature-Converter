const celsius_div = document.getElementById('celsius-input');
const fahrenheit_div = document.getElementById('fahrenheit-input')
const kelvin_div = document.getElementById('kelvin-input')

function convertCelsius(celsius) {
    const cTemp = parseFloat(celsius)
    console.log(typeof(cTemp))
    if (cTemp<0 || cTemp>=0) {
        fahrenheit_div.value = "";
        kelvin_div.value = "";
        fahrenheit_div.placeholder = `${((cTemp*(9/5))+32).toFixed(2)} °F`;
        kelvin_div.placeholder = `${(cTemp+273.15).toFixed(2)} °K`;
    } else reset();
}

function convertFarenheit(fahrenheit) {
    const fTemp = parseFloat(fahrenheit)
    if (fTemp<0 || fTemp>=0) {
        celsius_div.value = "";
        kelvin_div.value = "";
        celsius_div.placeholder = `${(((fTemp-32)*(5/9))).toFixed(2)} °C`
        kelvin_div.placeholder = `${((fTemp-32)*(5/9) + 273.15).toFixed(2)} °K`;
    } else reset();
}

function convertKelvin(kelvin) {
    const kTemp = parseFloat(kelvin)
    if (kTemp<0 || kTemp>=0) {
        fahrenheit_div.value = "";
        celsius_div.value = "";
        fahrenheit_div.placeholder = `${(((kTemp-273.15)*(9/5) + 32)).toFixed(2)} °F`
        celsius_div.placeholder = `${(kTemp-273.15).toFixed(2)} °C`;
    } else reset();
}

function reset(){
    celsius_div.placeholder = 'Celsius...';
    fahrenheit_div.placeholder = 'Fahrenheit...';
    kelvin_div.placeholder = 'Kelvin...';
}

function main() {
    celsius_div.addEventListener('input', () => convertCelsius(celsius_div.value))
    fahrenheit_div.addEventListener('input', () => convertFarenheit(fahrenheit_div.value))
    kelvin_div.addEventListener('input', () => convertKelvin(kelvin_div.value))
}

main();