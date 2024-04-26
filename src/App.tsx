import { useState } from 'react'
import Header from './components/Header'
import Forecast from './components/Forecast'
import { Units, WeatherReport } from './utilities/types';
import './App.css'
import WeatherContext from './utilities/Context';

function App() {
  const [location, setLocation] = useState('');
  const [report, setReport] = useState(null as (null | WeatherReport));
  const [units, setUnits] = useState({ temperature: 'c', speed: 'mph', } as Units);

  return (
    <WeatherContext.Provider
      value={{
        location,
        setLocation,
        report,
        setReport,
        units,
        setUnits,
      }}
    >
      <Header />
      <Forecast />
    </WeatherContext.Provider>
  )
}

export default App
