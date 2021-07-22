import { createStore } from 'vuex';
import { getCategoryList, getCategoryByType, LinkCategoryItemType, GetCategoryByTypeParam } from '@/api';

export default createStore({
  state: {
    allLinkCategory: [],
    specialTypeCategory: [],
  },
  getters: {
    getAllLinkCategory(state: any) {
      return state.allLinkCategory;
    },
    getspecialTypeCategory(state: any) {
      return state.specialTypeCategory;
    },
  },
  mutations: {
    set_all_link_category(state: any, data: LinkCategoryItemType[]) {
      state.allLinkCategory = data;
    },
    set_special_type_category(state: any, data: LinkCategoryItemType[]) {
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
    async getSpecialTypeCategoryList({ commit }: any, params: GetCategoryByTypeParam) {
      commit('set_all_link_category', []);
      const res = await getCategoryByType(params);
      if (res && res.data && res.data.length) {
        commit('set_special_type_category', res.data);
        return res.data;
      } else {
        commit('set_special_type_category', []);
        return [];
      }
    },
  },
  modules: {},
});
