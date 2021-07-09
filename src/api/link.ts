import { api } from './base';
import { AxiosResponse } from 'axios'; 

export const getLinkList = async (): Promise<AxiosResponse> => {
  const res: AxiosResponse = await api.get('/getAllLink/');
  return res;
};

export const getSpecialLinkList = async (id: number): Promise<AxiosResponse> => {
  const res: AxiosResponse = await api.get('/', {
    params: {
      collection_id: id,
    },
  });
  return res;
};
