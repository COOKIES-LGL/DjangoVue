import { api } from './base';
import { WeatherType } from './types';

export const getCollectionCategory = async (): Promise<WeatherType[]> => {
  const res: WeatherType[] = await api.get('collection/list/');
  return res;
};

export const getJueJinList = async (id: number): Promise<WeatherType> => {
  const res: WeatherType = await api.post('https://api.juejin.cn/recommend_api/v1/article/recommend_cate_feed', {
    params: {
      id_type: 2,
      sort_type: 3,
      cate_id: '6809637767543259144',
      cursor: '0',
      limit: 20,
    },
  });
  return res;
};
