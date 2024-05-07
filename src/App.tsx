import { useEffect, useState } from 'react'
import Header from './components/Header'
import Forecast from './components/Forecast'
import { Units, WeatherReport } from './utilities/types';
import WeatherContext from './utilities/Context';
import { getWeatherReport } from './utilities/weatherReport';
import './App.css'

function App() {
  const [location, setLocation] = useState('');
  const [report, setReport] = useState(null as (null | WeatherReport));
  const [units, setUnits] = useState({ temperature: 'c', speed: 'mph', } as Units);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Show weather for user's current location else default to "Accra, Ghana"
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { forecastWeather(`${coords.latitude},${coords.longitude}`) },
      () => { forecastWeather('Accra, Ghana') },
    );

    const forecastWeather = (location: string) => {
    const forecast = getWeatherReport(location);
    forecast
      .then(result => {
        setReport(result as WeatherReport);
        setShowError(false);
      })
      .catch((error: Error) => {
        setErrorMsg(error.message);
        setShowError(true);
      });
    }
  }, [location])
    
  return (
    <WeatherContext.Provider
      value={{
        location,
        setLocation,
        report,
        setReport,
        units,
        setUnits,
        showError,
        setShowError,
        errorMsg,
        setErrorMsg,
      }}
    >
      <Header />
      <Forecast />
    </WeatherContext.Provider>
  )
}

export default App
