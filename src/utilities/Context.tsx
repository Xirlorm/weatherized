import { Dispatch, SetStateAction, createContext } from "react";
import { Units, WeatherReport } from "./types";

const WeatherContext = createContext({
  report: null as (null | WeatherReport),
  setReport: (() => {}) as Dispatch<SetStateAction<WeatherReport | null>>,
  location: '',
  setLocation: (() => {}) as Dispatch<SetStateAction<string>>,
  units: { temperature: 'c', speed: 'mph', } as Units,
  setUnits: (() => {}) as Dispatch<SetStateAction<Units>>,
  errorMsg: '',
  setErrorMsg: (() => {}) as Dispatch<SetStateAction<string>>,
  showError: false,
  setShowError: (() => {}) as Dispatch<SetStateAction<boolean>>,
});

export default WeatherContext;