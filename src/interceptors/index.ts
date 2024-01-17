import axios from "axios";
import { logoutUser } from "../services/authService";

export const axiosAuth = axios.create();

axiosAuth.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("x-access-token");
    if (accessToken) {
      config.headers["x-access-token"] = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("x-refresh-token");
    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return await axios
        .post(
          process.env.REACT_APP_BACKEND_URL + "/auth/user/refresh-tokens",
          {},
          {
            headers: {
              "x-refresh-token": refreshToken,
              "id": localStorage.getItem("_id"),
            },
          }
        )
        .then((response) => {
          localStorage.setItem("x-access-token", response.data.accessToken);
          localStorage.setItem("x-refresh-token", response.data.refreshToken);
          axiosAuth.defaults.headers.common["x-access-token"] =
            response.data.accessToken;
          originalRequest.headers["x-access-token"] = response.data.accessToken;
          return axios(originalRequest);
        })
        .catch((err) => {
          logoutUser();
        });
    }
    return Promise.reject(error);
  }
);
