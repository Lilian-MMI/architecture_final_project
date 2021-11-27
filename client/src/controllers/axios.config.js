import axios from "axios";

const uriGateway = "http://localhost:4000/api/";

let axiosApi = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

axiosApi.interceptors.response.use(
  /* RESPONSE */
  (response) => {
    return Promise.resolve(response);
  },

  /* ERROR */
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosApi;
