import axios from 'axios';
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';

export const axiosInstance = axios.create({
  baseURL: 'http://79b7-31-33-81-5.ngrok.io/api/v1',
});

const AxiosProvider = ({ children }) => {
  const userCxt = useContext(UserContext);
  const { user } = userCxt;
  useEffect(() => {
    // Add a request interceptor
    axiosInstance.interceptors.request.use(
      function (config) {
        console.log(config)
        if (user?.token) {
          config.headers['Authorization'] = `Bearer ${user.token}`;
        }
        // Do something before request is sent
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );
  }, []);
  return children;
};

export default AxiosProvider;
