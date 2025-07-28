

// import axios from "axios";

// export const api = axios.create({
//   baseURL: "http://localhost:8081/api",
// });

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token"); 
//     console.log("Interceptor Token:", token);
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
// utils/api.js
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8081/api", 
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
