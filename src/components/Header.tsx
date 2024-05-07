import { Switch, Button } from "antd";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { getWeatherReport } from "../utilities/weatherReport";
import WeatherContext from "../utilities/Context";
import { WeatherReport } from "../utilities/types";

function Header() {
  const {
      location,
      setLocation,
      units,
      setUnits,
      setReport,
      errorMsg,
      setErrorMsg,
      showError,
      setShowError,
    } = useContext(WeatherContext);

  const getWeather = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setReport(null);

    const report = getWeatherReport(location);
    report
      .then(report => {
        setReport(report as WeatherReport);
        setShowError(false);
      })
      .catch((error: Error) => {
        setErrorMsg(error.message);
        setShowError(true);
      });
  }

  return <div className="p-3">
    <header className="flex flex-wrap justify-between">
      <section >
        <h1 className="font-bold text-2xl">°<span>WEATHER</span>ized</h1>
        <form action="" className="flex"
          onSubmit={event => event.preventDefault()}
        >
          <div>
            <label htmlFor="query" className="hidden">Location</label>
            <input
              required
              id="query"
              type="text"
              placeholder="Enter a location..."
              onChange={(event) => setLocation(event.target.value)}
              value={location}
              className="border-stone-600 m-2 border-b-2"
            />
          </div>    
          <div>
            <Button
              icon={<MagnifyingGlassIcon
              color="#000" className="w-6" />}
              onClick={getWeather}
              className="submit-btn border-none"
            />
          </div>
        </form>
      </section>
      <section className="conversion bg-white/40 p-4 rounded-2xl flex items-center gap-4 m-3">
        <div>
          <Switch
            onChange={() => {
              setUnits(unit => ({
                ...unit,
                temperature: unit.temperature == 'f' ? 'c' : 'f',
              }))
            }}
          />&nbsp;°{units.temperature.toUpperCase()}
        </div>
        <div>
          <Switch onChange={() => {
              setUnits(unit => ({
                ...unit,
                speed: unit.speed == 'kph' ? 'mph' : 'kph',
              }))
            }} />&nbsp;{units.speed}
        </div>
      </section>
    </header>
    <section className={`error flex items-center gap-2 border-2 rounded-lg p-2 ${showError ? '' : 'hidden'}`}>
      <Button
        icon={<XMarkIcon color="rgb(255, 99, 71)" className="w-7 m-1" />}
        className='error-close-btn border-none'
        onClick={() => setShowError(val => !val)}
      />
      <p className="message">{errorMsg}</p>
    </section>
  </div>
}

export default Header