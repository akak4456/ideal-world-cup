import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:9999/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset = utf-8',
  },
  responseType: 'json',
});

export default Api;
