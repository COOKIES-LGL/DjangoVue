import { api } from './base';
import { AxiosResponse } from 'axios';
import { LinkCategoryItemType, GetCategoryByTypeParam } from './types';

export const getCategoryList = async (): Promise<AxiosResponse> => {
  const res: AxiosResponse<LinkCategoryItemType> = await api.get('/getAllCategory/');
  return res;
};

export const getSpecialCategoryList = async (id: number): Promise<AxiosResponse> => {
  const res: AxiosResponse<LinkCategoryItemType> = await api.get('/getSpecialCategory/');
  return res;
};

export const getCategoryByType = async (params: GetCategoryByTypeParam): Promise<AxiosResponse> => {
  const res: AxiosResponse<LinkCategoryItemType> = await api.get('/getCategoryByType/', { params });
  return res;
};
