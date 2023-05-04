'use strict';

import DOM from './dom.js';
import getWeather from './weather.js';
import toggleSwitch from './toggleSwitch.js';
import '../styles/style.css';

let tempUnit = 'f';
let speedUnit = 'kph';

// Get and set location input field to 'Accra, Ghana'
const locationInput = document.querySelector('.location-input');
locationInput.value = 'Accra, Ghana';

/**************************************************
 * Fetch and display weather report
 *************************************************/
const queryBtn = document.querySelector('.get-weather');
queryBtn.addEventListener('click', async (event) => {
  if (locationInput.validity.valueMissing === false) {
    showWeather(locationInput.value, { speedUnit, tempUnit });
  } else DOM.showError('Search item not provided');

  event.preventDefault();
});

/**************************************************
 * Clear error message when error close button is
 * clicked.
 *************************************************/
const closeErrorBtn = document.querySelector('.close-error-btn');
closeErrorBtn.addEventListener('click', DOM.closeError);

/**************************************************
 * Get weather report of location entered by user
 * and display results.
 *************************************************/
let weatherReport;

function showWeather(query, units) {
  DOM.loading();
  const data = getWeather(query);
  data
    .then((data) => {
      weatherReport = data;
      DOM.showWeather(data, units);
      DOM.closeError();
    })
    .catch((data) => {
      weatherReport = undefined;
      DOM.showError(data.message);
    });
}

/**************************************************
 * Convert temperature or speed when their various
 * buttons are clicked.
 *************************************************/
// Temperature unit conversion button
const tempConverter = document.querySelector('.temp .toggle-switch-actuator');
tempConverter.addEventListener('click', (event) => {
  const currentTemp = document.querySelector('.today .temperature');

  if (tempUnit === 'f') {
    tempUnit = 'c';
    const temperature = weatherReport.current.temp_c;
    currentTemp.textContent = `${parseInt(temperature)}°C`;
  } else {
    tempUnit = 'f';
    const temperature = weatherReport.current.temp_f;
    currentTemp.textContent = `${parseInt(temperature)}F`;
  }

  const forecast = document.querySelectorAll('.forecast-day');
  for (let i = 0; i < forecast.length; ++i) {
    const temp = forecast[i].querySelector('.temperature');
    const temperature =
      weatherReport.forecast.forecastday[i].day['avgtemp_' + tempUnit];
    if (tempUnit === 'c') temp.textContent = `${parseInt(temperature)}°C`;
    else temp.textContent = `${parseInt(temperature)}F`;
  }

  event.stopPropagation();
});

// Speed unit conversion button
const speedConverter = document.querySelector('.speed .toggle-switch-actuator');
speedConverter.addEventListener('click', (event) => {
  const windSpeed = document.querySelector('.wind .wind-speed');
  const gust = document.querySelector('.other .gust');

  if (speedUnit === 'kph') speedUnit = 'mph';
  else speedUnit = 'kph';

  windSpeed.textContent =
    weatherReport.current['wind_' + speedUnit] + speedUnit;
  gust.textContent =
    weatherReport.current['gust_' + speedUnit] + speedUnit;

  event.stopPropagation();
});

showWeather(locationInput.value, { speedUnit, tempUnit });
toggleSwitch.activate();
