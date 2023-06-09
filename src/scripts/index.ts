'use strict';

import DOM from './dom';
import { WeatherReport, getWeatherReport } from './weather';
import toggleSwitch from './toggle-switch';
import '../styles/style.css';

let tempUnit: 'c' | 'f' = 'f';
let speedUnit: 'kph' | 'mph' = 'kph';

/**************************************************
 * Fetch and display weather report
 *************************************************/
const queryBtn: HTMLElement = document.querySelector('.get-weather');
queryBtn.addEventListener('click', async (event) => {
  const locationInput: HTMLInputElement =
    document.querySelector('.location-input');

  if (locationInput.validity.valueMissing === false) {
    showWeather(locationInput.value, { speedUnit, tempUnit });
  } else DOM.showError('Please provide a location');

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
let weatherReport: WeatherReport;

function showWeather(
  query: string,
  units: { speedUnit: 'kph' | 'mph'; tempUnit: 'c' | 'f' }
) {
  DOM.loading();
  const data = getWeatherReport(query);
  data
    .then((data) => {
      weatherReport = data as WeatherReport;
      DOM.showWeather(weatherReport, units);
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
  const currentTemp = document.querySelector('.current .temperature');

  if ('forecast' in weatherReport) {
    if (tempUnit === 'f') {
      tempUnit = 'c';
      const temperature = `${weatherReport.current.temp_c}`;
      currentTemp.textContent = `${parseInt(temperature)}°C`;
    } else {
      tempUnit = 'f';
      const temperature = `${weatherReport.current.temp_f}`;
      currentTemp.textContent = `${parseInt(temperature)}F`;
    }

    const forecast = document.querySelectorAll('.forecast-day');
    for (let i = 0; i < forecast.length; ++i) {
      const temp = forecast[i].querySelector('.temperature');
      const temperature =
        weatherReport.forecast.forecastday[i].day['avgtemp_' + tempUnit];
      if (tempUnit === 'c')
        temp.textContent = `${parseInt(temperature as string)}°C`;
      else temp.textContent = `${parseInt(temperature as string)}F`;
    }
  }

  event.stopPropagation();
});

// Speed unit conversion button
const speedConverter = document.querySelector('.speed .toggle-switch-actuator');
speedConverter.addEventListener('click', (event) => {
  if ('current' in weatherReport) {
    const windSpeed = document.querySelector('.wind .wind-speed');
    const gust = document.querySelector('.other .gust');

    if (speedUnit === 'kph') speedUnit = 'mph';
    else speedUnit = 'kph';

    windSpeed.textContent =
      weatherReport.current['wind_' + speedUnit] + speedUnit;
    gust.textContent = weatherReport.current['gust_' + speedUnit] + speedUnit;
  }

  event.stopPropagation();
});

showWeather('Accra, Ghana', { speedUnit, tempUnit });
toggleSwitch.activate();
