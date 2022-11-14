import axios, { AxiosRequestConfig } from 'axios';

type AxiosRequestHeaders = AxiosRequestConfig<any>['headers'];

const instance = axios.create({
  // baseURL: 'http://localhost:4000',
  timeout: 30_000,
});

instance.interceptors.response.use(
  response => response,

  error => {
    // eslint-disable-next-line eqeqeq
    if (error?.response?.data?.message != null) {
      return Promise.reject(new Error(error.response.data.message));
    } else {
      return Promise.reject(error);
    }
  }
);

export const get = <T>({
  url,
  params,
  headers,
}: {
  url: string;
  params?: Record<string, string>;
  headers?: AxiosRequestHeaders;
}) => {
  return instance.get<T>(url, { headers, params });
};

export const post = <T>({
  url,
  headers,
  data,
}: {
  url: string;
  headers?: AxiosRequestHeaders;
  data: Record<string, string>;
}) => {
  return instance.post<T>(url, data, { headers });
};
