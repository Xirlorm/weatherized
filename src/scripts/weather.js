'use strict';

export default async function getWeather(query) {
  const piece = { 1: 'f588d841', 2: '1413562' };

  try {
    const response = await fetch(
      'https://api.weatherapi.com/v1/forecast.json?' +
        `key=7e0540${piece['1']}fb852${piece['2']}32104&q=${query}&days=3`,
      { cors: true }
    );
    const data = await response.json();

    if (data.error == undefined) return data;

    throw data.error;
  } catch (data) {
    return Promise.reject(data);
  }
}
