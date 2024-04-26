'use strict';

import { WeatherReport, WeatherError } from "./types";

export async function getWeatherReport(
  location: string
): Promise<WeatherReport | WeatherError> {
  const url = 'https://api.weatherapi.com/v1/forecast.json';
  const key = `${'7e0540f588'}${'d841fb8521'}${'4135623210'}${'4'}`;

  try {
    const response = await fetch(
      `${url}?key=${key}&q=${location}&days=3`,
      { mode: 'cors' }
    );
    const data = await response.json();

    if (!response.ok || 'error' in data) {
      throw new Error(data.error.message);
    }

    return data;
  } catch (error) {
    return Promise.reject({ message: (error as Error).message });
  }
}