import { api } from './base';
import { WeatherType } from './types';

export const getCollectionList1 = async (): Promise<WeatherType[]> => {
  const res: WeatherType[] = await api.get('collection/list/');
  return res;
};

export const getCollectionPage1 = async (id: number): Promise<WeatherType> => {
  const res: WeatherType = await api.get('/', {
    params: {
      collection_id: id,
    },
  });
  return res;
};
