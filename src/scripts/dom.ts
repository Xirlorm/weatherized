'use strict';

import { WeatherReport, Current, Location, Forecast } from './weather';

const error: HTMLElement = document.querySelector('.error');
const errorMsg: HTMLElement = document.querySelector('.error .message');
const main: HTMLElement = document.querySelector('main');

/**************************************************
 * Functions provided outside modular use
 **************************************************/
export default {
  showError(message: string) {
    error.style.visibility = 'visible';
    errorMsg.textContent = message;
    main.textContent = '';
  },

  closeError() {
    error.style.visibility = 'hidden';
    errorMsg.textContent = '';
  },

  showWeather(
    weatherData: WeatherReport,
    units: { speedUnit: string; tempUnit: string }
  ) {
    this.clearWeather();
    main.appendChild(currentWeather(weatherData, units));
    main.appendChild(forecast(weatherData.forecast, units.tempUnit));
  },

  clearWeather() {
    main.textContent = '';
  },

  loading() {
    this.clearWeather();
    const loader = document.createElement('div');
    loader.className = 'loader';
    main.appendChild(loader);
  }
};

/**************************************************
 *  Creates all DOM elements using data of current
 *  weather.
 **************************************************/
function currentWeather(
  weatherData: WeatherReport,
  units: { speedUnit: string; tempUnit: string }
) {
  const wetherDOM = document.createElement('section');
  wetherDOM.className = 'current';

  const heading = document.createElement('h4');
  heading.textContent = 'Currently';
  wetherDOM.appendChild(heading);

  const childrenDOM = [
    location(weatherData.location),
    condition(weatherData.current.condition),
    temperature(weatherData.current, units.tempUnit),
    wind(weatherData.current, units.speedUnit),
    other(weatherData.current, units.speedUnit)
  ];

  for (const dom of childrenDOM) wetherDOM.appendChild(dom);

  return wetherDOM;
}

function forecast(weatherData: Forecast, tempUnit: string) {
  const forecastDOM = document.createElement('section');
  forecastDOM.className = 'forecast';

  const heading = document.createElement('h4');
  heading.textContent = 'Forecast';
  forecastDOM.appendChild(heading);

  for (let i = 0; i < weatherData.forecastday.length; ++i) {
    const day = document.createElement('div');
    day.className = 'forecast-day';

    const temperature = document.createElement('div');
    temperature.className = 'temperature';
    temperature.textContent = `${
      weatherData.forecastday[i].day['avgtemp_' + tempUnit]
    }${tempUnit.toUpperCase()}`;
    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = weatherData.forecastday[i].day.condition.icon;
    const date = document.createElement('div');
    date.className = 'date';
    date.textContent = weatherData.forecastday[i].date;

    day.appendChild(temperature);
    day.appendChild(icon);
    day.appendChild(date);

    forecastDOM.appendChild(day);
  }

  return forecastDOM;
}

/**************************************************
 * Functions that create various weather data
 * components.
 **************************************************/
// Generate DOM for location data
function location(locationData: Location) {
  const locationDOM = document.createElement('section');
  locationDOM.className = 'location';
  locationDOM.textContent = `${locationData.name}, ${locationData.country}`;

  return locationDOM;
}

// Generate DOM for condition data
function condition(conditionData: { [key: string]: string }) {
  const conditionDOM = document.createElement('section');
  conditionDOM.className = 'condition';
  const icon = document.createElement('img');
  icon.src = conditionData.icon;
  const text = document.createElement('p');
  text.textContent = conditionData.text;
  conditionDOM.appendChild(icon);
  conditionDOM.appendChild(text);

  return conditionDOM;
}

// Generate DOM for temperature data
function temperature(weatherData: Current, tempUnit: string) {
  const temperatureDOM = document.createElement('div');
  temperatureDOM.textContent = `${
    weatherData['temp_' + tempUnit]
  }${tempUnit.toUpperCase()}`;
  temperatureDOM.className = 'temperature';

  return temperatureDOM;
}

// Generate DOM for wind data
function wind(weatherData: Current, speedUnit: string) {
  const windAngle = document.createElement('div');
  windAngle.textContent = `${weatherData.wind_degree}°`;
  const windDir = document.createElement('div');
  windDir.textContent = weatherData.wind_dir;
  const windSpeed = document.createElement('div');
  windSpeed.textContent = `${weatherData['wind_' + speedUnit]}${speedUnit}`;
  windSpeed.className = 'wind-speed';

  const windInfo = document.createElement('section');
  windInfo.appendChild(windAngle);
  windInfo.appendChild(windDir);
  windInfo.appendChild(windSpeed);

  const heading = document.createElement('h3');
  heading.textContent = 'Wind';

  const windDOM = document.createElement('div');
  windDOM.className = 'wind';
  windDOM.appendChild(heading);
  windDOM.appendChild(windInfo);

  return windDOM;
}

// Generate DOM for other data
function other(weatherData: Current, speedUnit: string) {
  const container = document.createElement('section');
  container.className = 'other';

  const title = ['UV', 'Gust', 'Humidity', 'Day'];
  const keys = ['uv', 'gust_', 'humidity', 'is_day'];

  for (let i = 0; i < title.length; i++) {
    const heading = document.createElement('h4');
    heading.textContent = title[i];
    const value = document.createElement('div');
    if (keys[i] === 'gust_')
      value.textContent = weatherData[keys[i] + speedUnit] + speedUnit;
    else value.textContent = weatherData[keys[i]] as string;
    value.className = title[i].toLowerCase();

    const section = document.createElement('section');
    section.appendChild(heading);
    section.appendChild(value);
    container.appendChild(section);
  }

  return container;
}
