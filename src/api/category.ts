import { api } from './base';
import { AxiosResponse } from 'axios'; 

export const getCategoryList = async (): Promise<AxiosResponse> => {
  const res: AxiosResponse = await api.get('/getAllCategory/');
  return res;
};

export const getSpecialCategoryList = async (id: number): Promise<AxiosResponse> => {
  const res: AxiosResponse = await api.get('/', {
    params: {
      collection_id: id,
    },
  });
  return res;
};
