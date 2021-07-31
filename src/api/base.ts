import { ErrorCodes } from '@/constants';
import { ENV } from '@/config';
import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import Cookies from 'js-cookie';

const baseURL: string = `${ENV.HOST}${ENV.BASE_URL}api`;

Cookies.set('SPC_CDS_VER', '2');

export const api: AxiosInstance = Axios.create({
  baseURL,
  timeout: 60 * 1000,
  withCredentials: true,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.params) {
    config.params = {};
  }
  if (config.method === 'get') {
    Object.keys(config.params).forEach(key => {
      if (Array.isArray(config.params[key])) {
        config.params[key] = config.params[key].toString();
      }
    });
  }
  config.headers['X-CSRFToken'] = Cookies.get('csrftoken');
  // config.params.SPC_CDS_VER = Cookies.get('SPC_CDS_VER');
  // 删除 refreshTimestamp 参数
  if (config.params.refreshTimestamp) {
    delete config.params.refreshTimestamp;
  }
  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    if (
      response &&
      response.data &&
      (response.data.code === ErrorCodes.NOT_LOGIN || response.data.code === ErrorCodes.LOGIN_ERR)
    ) {
      //   Toast.$instance.error('请登录！');
      return Promise.reject(new Error('401'));
    }
    return response;
  },
  error => {
    if (error.response) {
      const { status }: AxiosResponse = error.response;
      if (status === 401) {
        window.location.href = `${ENV.HOST}/api/login/google-oauth2/`;
        return Promise.reject(new Error(status.toString()));
      }
    }
    // Toast.$instance.error('系统繁忙，请稍后再试！');
    return Promise.reject(error);
  }
);

type CustomParams = {
  successMessage?: string;
  errorMessage?: string;
};

export function handleResponse(
  customParams?: CustomParams
): [(value: AxiosResponse<any>) => any, (reason: any) => any] {
  const { successMessage, errorMessage } = customParams;
  const onFulfilled = (response: AxiosResponse) => {
    if (successMessage) {
      //   Toast.$instance.success(successMessage);
    }
    return response.data;
  };
  const onRejected = (error: AxiosError): any => {
    if (error.response) {
      const { status } = error.response;
      if (status === 400 && errorMessage) {
        // Toast.$instance.error(errorMessage);
        return Promise.reject(errorMessage);
      }
    }
    // Toast.$instance.error('系统繁忙，请稍后再试！');
    return Promise.reject(error);
  };

  return [onFulfilled, onRejected];
}
