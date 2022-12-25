import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
});

axiosConfig.interceptors.request.use(function (config) {
  config.headers.Authorization =  localStorage.getItem("user");
    console.log( config.headers.Authorization);
    // console.log("intercepted");
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
export default axiosConfig;