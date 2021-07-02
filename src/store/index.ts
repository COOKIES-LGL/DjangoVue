import { createStore } from 'vuex';
import { getCategoryList, LinkCategoryItemType } from '@/api';

export default createStore({
  state: {
    allLinkCategory: [],
  },
  getters: {
    getAllLinkCategory (state: any) {
      return state.allLinkCategory;
    }
  },
  mutations: {
    set_all_link_category(state: any, data: LinkCategoryItemType[]) {
      state.allLinkCategory = data;
    },
  },
  actions: {
    async getCategoryList({ commit }: any) {
      commit('set_all_link_category', []);
      const res = await getCategoryList();
      if (res && res.data && res.data.length) {
        commit('set_all_link_category', res.data);
        return res.data;
      } else {
        commit('set_all_link_category', []);
        return [];
      }
    },
  },
  modules: {},
});
