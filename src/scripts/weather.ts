'use strict';

export async function getWeatherReport(
  location: string
): Promise<WeatherReport | WeatherError> {
  const apiKey = '7e0540f588d841fb852141356232104';
  const apiUrl =
    `https://api.weatherapi.com/v1/forecast.json` +
    `?key=${apiKey}&q=${location}&days=3`;

  try {
    const response = await fetch(apiUrl, { mode: 'cors' });
    const data = await response.json();

    if (!response.ok || 'error' in data) {
      throw new Error(data.error.message);
    }

    return data;
  } catch (error) {
    return Promise.reject({ message: (error as Error).message });
  }
}

export interface WeatherError {
  message: string;
}

export interface WeatherReport {
  location: Location;
  current: Current;
  forecast: Forecast;
}

export interface Current {
  temp_c: number;
  temp_f: number;
  is_day: 1 | 0;
  condition: {
    [key: string]: string;
  };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: 'SSE';
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
  [key: string]: string | number | object;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface Forecast {
  forecastday: {
    date: string;
    day: {
      avgtemp_c: number;
      avgtemp_f: number;
      totalsnow_cm: number;
      condition: {
        [key: string]: string;
      };
      [key: string]: string | number | object;
    };
    astro: object;
    hour: { condition: object }[];
  }[];
}
