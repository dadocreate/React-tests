import axios from 'axios';

const API_KEY = 'ab9e9445e45343395207f3ddfd9507bb';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATER = 'FETCH_WEATER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATER,
    payload: request
  };
}
