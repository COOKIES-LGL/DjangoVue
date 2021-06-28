import { api } from './base';
import { WeatherType } from './types';

export const getCategoryList = async (): Promise<WeatherType[]> => {
  const res: WeatherType[] = await api.get('/getAllCategory/');
  return res;
};

export const getLinkList = async (id: number): Promise<WeatherType> => {
  const res: WeatherType = await api.get('/', {
    params: {
      collection_id: id,
    },
  });
  return res;
};
