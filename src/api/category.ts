import { api } from './base';
import { WeatherType } from './types';

export const getCollectionList = async (): Promise<WeatherType[]> => {
  const res: WeatherType[] = await api.get('collection/list/');
  return res;
};

export const getCollectionPage = async (id: number): Promise<WeatherType> => {
  const res: WeatherType = await api.get('/', {
    params: {
      collection_id: id,
    },
  });
  return res;
};
