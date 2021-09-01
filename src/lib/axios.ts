import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';

export default class Axios {
  static request(config: AxiosRequestConfig): Promise<AxiosResponse<unknown>> {
    return axios.request(config);
  }

  static get(url: string, data: unknown): Promise<AxiosResponse<unknown>> {
    return axios.get(url, {
      params: data,
      paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
    });
  }

  static post(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<unknown>> {
    return axios.post(url, data, config);
  }

  static put(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<unknown>> {
    return axios.put(url, data, config);
  }

  static delete(url: string, data?: any): Promise<AxiosResponse<unknown>> {
    return axios.delete(url, data);
  }

  static setBaseURL(url: string): void {
    axios.defaults.baseURL = url;
  }

  static setHeader(key: string, value: any): void {
    axios.defaults.headers.common[key] = value;
  }

  static addRequestInterceptor(
    onFulfilled: (val: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>,
    onRejected: (err: any) => any
  ): void {
    axios.interceptors.request.use(onFulfilled, onRejected);
  }

  static addResponseInterceptor(
    onFulfilled: (val: AxiosResponse<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>,
    onRejected: (err: any) => any
  ): void {
    axios.interceptors.response.use(onFulfilled, onRejected);
  }
}
