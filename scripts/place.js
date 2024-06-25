function calculateWindChill(temp, windSpeed) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
}

const windChillHtml = document.querySelector('#windChillValue');
const tempHtml = document.querySelector('#temperatureValue');
const windSpeedHtml = document.querySelector('#windSpeedValue');

// Define the temperature and wind speed
const temp = 10
const windSpeed = 10
// Set the values in the HTML
tempHtml.textContent = temp + "°C";
windSpeedHtml.textContent = windSpeed + " km/h";


if(temp <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temp, windSpeed);
  windChillHtml.textContent = windChill;
} else {
  windChillHtml.textContent = "N/A";
}