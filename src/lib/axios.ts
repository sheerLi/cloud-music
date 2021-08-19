import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';

export default class Axios {
  static request(config: AxiosRequestConfig) {
    return axios.request(config);
  }

  static get(url: string, data: any) {
    return axios.get(url, {
      params: data,
      paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
    });
  }

  static post(url: string, data?: any, config?: AxiosRequestConfig) {
    return axios.post(url, data, config);
  }

  static put(url: string, data?: any, config?: AxiosRequestConfig) {
    return axios.put(url, data, config);
  }

  static delete(url: string, data?: any) {
    return axios.delete(url, data);
  }

  static setBaseURL(url: string) {
    axios.defaults.baseURL = url;
  }

  static setHeader(key: string, value: any) {
    axios.defaults.headers.common[key] = value;
  }

  static addRequestInterceptor(
    onFulfilled: (val: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>,
    onRejected: (err: any) => any
  ) {
    axios.interceptors.request.use(onFulfilled, onRejected);
  }

  static addResponseInterceptor(
    onFulfilled: (val: AxiosResponse<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>,
    onRejected: (err: any) => any
  ) {
    axios.interceptors.response.use(onFulfilled, onRejected);
  }
}
