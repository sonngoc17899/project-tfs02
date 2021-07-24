const axios = require("axios");

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        "Content-type": "application/json",
      },
});
axiosInstance.interceptors.request.use(
  (config) => new Promise((resolve) => setTimeout(() => resolve(config), 700))
);

export default axiosInstance;