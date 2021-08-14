import { api } from './base';
import { AxiosResponse } from 'axios';
import {
  GetLinkListParams,
  PostLinkListForOrderParams,
  GetLinkListForOrderParams,
  LinkItemType,
  GetSpecialLinkListParams,
} from './types';

export const getLinkList = async (params: GetLinkListParams): Promise<AxiosResponse> => {
  const res: AxiosResponse<LinkItemType> = await api.get('/getLinksById/', {
    params,
  });
  return res;
};

export const postLinkListForOrder = async (params: PostLinkListForOrderParams): Promise<AxiosResponse> => {
  const res: AxiosResponse<LinkItemType> = await api.post('/orderLinksByIds/', {
    params,
  });
  return res;
};

export const getLinkListForOrder = async (params: GetLinkListForOrderParams): Promise<AxiosResponse> => {
  const res: AxiosResponse<LinkItemType> = await api.post('/getLinksByIds/', {
    params,
  });
  return res;
};

export const getSpecialLinkList = async (params: GetSpecialLinkListParams): Promise<AxiosResponse> => {
  const res: AxiosResponse = await api.get('/getSpecialLinksById/', {
    params,
  });
  return res;
};

export const addSpecialLink = async (params: GetLinkListParams): Promise<AxiosResponse> => {
  const res: AxiosResponse = await api.post('/getSpecialLinksById/', {
    params,
  });
  return res;
};

export const addLink = async (params: GetLinkListParams): Promise<AxiosResponse> => {
  const res: AxiosResponse = await api.post('/', {
    params,
  });
  return res;
};
