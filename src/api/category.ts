import { api } from './base';
import { WeatherType } from './types';
import { AxiosResponse } from 'axios'; 

export const getCategoryList = async (): Promise<AxiosResponse> => {
  const res: AxiosResponse = await api.get('/getAllCategory/');
  return res;
};

export const getLinkList = async (id: number): Promise<AxiosResponse> => {
  const res: AxiosResponse = await api.get('/', {
    params: {
      collection_id: id,
    },
  });
  return res;
};
