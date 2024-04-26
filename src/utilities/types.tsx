export interface Units {
  temperature: 'c' | 'f',
  speed: 'kph' | 'mph',
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