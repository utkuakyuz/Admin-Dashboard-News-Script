import axios from 'axios';
export default (header) => {
  let headers = header || {};
  const ax = axios.create({
    // backend'in çalıştığı port
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: headers,
  });
  return ax;
};
