import { api } from './base';
import { AxiosResponse } from 'axios'; 
import { LinkCategoryItemType } from './types';

export const getCategoryList = async (): Promise<AxiosResponse> => {
  const res: AxiosResponse<LinkCategoryItemType> = await api.get('/getAllCategory/');
  return res;
};

export const getSpecialCategoryList = async (id: number): Promise<AxiosResponse> => {
  const res: AxiosResponse<LinkCategoryItemType> = await api.get('/', {
    params: {
      collection_id: id,
    },
  });
  return res;
};
