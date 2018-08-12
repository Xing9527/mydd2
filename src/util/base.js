import axios from 'axios'

var instance = axios.create({
  baseURL: '/api/',
  withCredentials: true,
  timeout: 15000,
  headers: {'Content-Type': 'application/json;charset=UTF-8'}
});

export default instance;

