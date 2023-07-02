import axios, {
  AxiosHeaders,
  AxiosResponse,
  Method,
  RawAxiosRequestHeaders,
} from 'axios';
import { API_BASE_URL } from './constants';

export const callAPI = <T = any, R = AxiosResponse<T>, D = any>(
  endpoint: string,
  method: Method = 'GET',
  headers?: RawAxiosRequestHeaders | AxiosHeaders,
  params?: object,
  data?: D
): Promise<R> => {
  const options = {
    baseURL: API_BASE_URL,
    url: endpoint,
    method,
    headers,
    data,
    params,
  };

  return axios(options);
};
