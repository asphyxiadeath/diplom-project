import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(config => {
  config.url =
    config.url + 'onecall?'+'&lat=53.893009'+'&lon=27.567444'+'&exclude=minutely,hourly'+'&units=metric' + '&appid=' + process.env.REACT_APP_API_KEY;
  return config;
});

export default api;