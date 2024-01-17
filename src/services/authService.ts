import { axiosAuth } from "../interceptors";
import axios from "axios";
import { setSession, removeSession, setTokens } from "./storageService";
import { Md5 } from "ts-md5";


export function loginUser(user: any) {
  return new Promise((resolve, reject) => {
    const md5 = new Md5();
    axios.post(process.env.REACT_APP_BACKEND_URL + "/user/login", {
      email: user.email,
      password: md5.appendStr(user.password).end()
    }).then(response => {
      setSession({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        _id: response.data.user._id,
        email: response.data.user.email,
      });

      return resolve(response.data);
    }).catch(err => {
      return reject(err);
    });
  });
}

export function logoutUser() {
  removeSession();
  window.location.href = "/";
  return;
}

export function refreshTokens() {
  return new Promise((resolve, reject) => {
    axiosAuth.post(process.env.REACT_APP_BACKEND_URL + "/user/refresh-tokens", {}, {
      headers: {
        "x-refresh-token": localStorage.getItem("x-refresh-token"),
        "id": localStorage.getItem("_id")
      }
    }).then(response => {
      setTokens(response.data)

      return resolve(response.data);
    }).catch(err => {
      return reject(err);
    });
  });
}