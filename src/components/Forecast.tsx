'use strict';

import { useContext } from "react";
import WeatherContext from "../utilities/Context";

function Forecast() {
  const {report, units} = useContext(WeatherContext);

  if (report == null) return (<div className="flex justify-center">
    <div className="bg-white/40 p-4 rounded-2xl shadow-md  shadow-stone-40">
      <div className="loader"></div>
    </div>
  </div>);

  return <div className="flex justify-evenly gap-2 flex-wrap items-center my-4">
    <section className="current flex flex-col items-center text-center">
      <h2 className="font-bold italic m-2">Currently</h2>
      <section className="location text-2xl font-bold">
        {report?.location.name},&nbsp;
        {report?.location.country}
      </section>
      <section className="condition font-bold">
        <img
          src={report?.current.condition.icon}
          alt="Weather condition"
          className="m-auto w-24"
        />
        <span>{report?.current.condition.text}</span>
      </section>
      <section className="temperature m-2 font-bold">
        <span className="text-3xl block m-2">
          {units.temperature == 'c' ? report?.current.temp_c : report?.current.temp_f}°
          {units.temperature.toUpperCase()} <br />
        </span>
        <span className="italic">
          Feels like&nbsp;
          {units.temperature == 'c' ? report?.current.feelslike_c : report?.current.feelslike_f}°
          {units.temperature.toUpperCase()}
        </span>
      </section>
      <section className="wind backdrop-blur-none bg-white/30 rounded-xl p-4">
        <h3 className="text-xl m-2 font-semibold">Wind</h3>
        <div className="flex gap-3">
          <div className="angle">{report?.current.wind_degree}</div>
          <div className="dir">{report?.current.wind_dir}</div>
          <div className="speed">
            {units.speed == 'kph' ? report?.current.wind_kph : report?.current.wind_mph}
            {units.speed}
          </div>
        </div>
      </section>
      <section className="more backdrop-blur-none bg-white/30 rounded-xl p-4 grid grid-cols-2 gap-4 m-4">
        <div>
          <h3 className="font-semibold">UV</h3>
          <p className="value">{report?.current.uv}</p>
        </div>
        <div>
          <h3 className="font-semibold">Gust</h3>
          <p className="value">
            {units.speed == 'kph' ? report?.current.gust_kph : report?.current.gust_mph}
            {units.speed}
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Humidity</h3>
          <p className="value">{report?.current.humidity}</p>
        </div>
        <div>
          <h3 className="font-semibold">Day</h3>
          <p className="value">{report?.current.is_day}</p>
        </div>
      </section>
    </section>
    <section className="forecast">
      <h3 className="font-bold text-2xl py-2">Forecast</h3>
      <div className="grid grid-cols-3 gap-4 justify-center text-center">
        {report?.forecast.forecastday.map(entry => (
            <div className="backdrop-blur-none bg-white/30 rounded-xl p-1.5">
              <div className="date font-semibold text-2xl">{entry.date.split('-')[2]}</div>
              <img src={entry.day.condition.icon} alt=""  className="m-auto" />
              <div className="font-semibold text-lg">
                {units.temperature == 'c' ? entry.day.avgtemp_c : entry.day.avgtemp_f}°
                {units.temperature.toUpperCase()}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  </div>
}

export default Forecast