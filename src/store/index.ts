import { createStore } from 'vuex'
import { getCategoryList } from '@/api';

export default createStore({
  state: {
    relatedArticles: [],
  },
  mutations: {
    set_category_list(state: any, data: any) {
      state.relatedArticles = data;
    },
  },
  actions: {
    async getCategoryList({ commit }: any, params: any) {
      commit('set_category_list', []);
      const res = await getCategoryList();
      console.log(res);
      // if (res && res.data && res.data.length) {
        // res.articles.map((item: any) => {
        //   item.article_id = item.id;
        // });
        // commit('set_related_articles', res.articles);
        // return res.articles;
      // } else {
      //   commit('set_related_articles', []);
      //   return [];
      // }
    },
  },
  modules: {
  }
})
