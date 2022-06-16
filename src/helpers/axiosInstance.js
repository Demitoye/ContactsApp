import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import env from '../config/env';
import {LOGOUT} from '../constants/routeNames';
import {navigate} from '../navigations/SideMenu/RootNavigator';

let headers = {};

const axiosInstance = axios.create({
  // baseURL: env.DEV_BACKEND_URL + 'api/',
  baseURL: process.env.DEV_BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  error => {
    console.log(error);
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 403) {
      navigate(LOGOUT, {tokenExpired: true});
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export default axiosInstance;
