import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/',
  timeout: 5000,
});

export default axiosInstance;
