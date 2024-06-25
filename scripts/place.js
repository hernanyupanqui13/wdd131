function calculateWindChill(temp, windSpeed) {
  const c1 = 13.12;
  const c2 = 0.6215;
  const c3 = 11.37;
  const c4 = 0.3965;

  const windChill = c1 + c2 * temp - c3 * Math.pow(windSpeed, 0.16) + c4 * temp * Math.pow(windSpeed, 0.16);

  return windChill.toFixed(2);
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

const windChill = calculateWindChill(temp, windSpeed);

if(temp <= 10 || windSpeed > 4.8) {
  windChillHtml.textContent = windChill;
} else {
  windChillHtml.textContent = "N/A";
}