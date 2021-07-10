import { api } from './base';
import { AxiosResponse } from 'axios';
import { GetLinkListParams, GetLinkListForOrderParams, LinkItemType } from './types';

export const getLinkList = async (params: GetLinkListParams): Promise<AxiosResponse> => {
  const res: AxiosResponse<LinkItemType> = await api.get('/getLinksById/', {
    params,
  });
  return res;
};

export const getLinkListForOrder = async (params: GetLinkListForOrderParams): Promise<AxiosResponse> => {
  const res: AxiosResponse<LinkItemType> = await api.get('/getLinksByIds/', {
    params,
  });
  return res;
};

export const getSpecialLinkList = async (params: GetLinkListParams): Promise<AxiosResponse> => {
  const res: AxiosResponse = await api.get('/', {
    params,
  });
  return res;
};
