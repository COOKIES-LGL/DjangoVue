<template>
  <div class="category-box">
    <filter-tab-simple
      @filterChange="CategoryIndex.filterChange"
      :currentCategoryLv1Id="currentCategoryLv1"
    ></filter-tab-simple>
    <div class="link-content-box">
      <CategoryPanel
        v-for="(item, index) in CategoryIndex.reactiveData.categoryPanelData"
        :key="index"
        :dataList="item"
      ></CategoryPanel>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, watch, reactive } from 'vue';
import FilterTabSimple from '@/components/FilterTabSimple.vue';
import { useRouter } from 'vue-router';
import { LinkCategoryItemType, getLinkList, GetLinkListParams, LinkItemType } from '@/api';
import CategoryPanel, { CategoryPanelType } from '@/components/category/CategoryPanel.vue';

interface LinkCategoryObjectType {
  [key: string]: LinkCategoryItemType[];
}

@Options({
  props: {
    currentCategoryLv1: Number,
  },
  components: {
    FilterTabSimple,
    CategoryPanel,
  },
})
export default class Category extends Vue {
  private type: string;
  private LinkCategoryObject: LinkCategoryObjectType[] = [];
  private CategoryIndex = setup(() => {
    const currentCategoryLv1 = ref<number>(1);
    let reactiveData = reactive({
      categoryPanelData: {},
    });
    const router = useRouter();

    const filterChange = (filterObject: any, category: LinkCategoryItemType[]) => {
      if(!category) return;
      router.push({
        // 增加router参数
        path: '/onlineTool',
        query: {
          lv1: filterObject.category_lv1,
          lv2: filterObject.category_lv2,
        },
      });
      if (currentCategoryLv1.value === filterObject.category_lv1) return;
      currentCategoryLv1.value = filterObject.category_lv1;
      const params: GetLinkListParams = {
        grandparent_id: filterObject.category_lv1,
      };
      getLinkList(params).then(res => {
        const response = res.data;
        const renderList = [];
        if (response.length <= 0) return;
        category.forEach((item: LinkCategoryItemType) => {
          const panelLinkList = response.filter((link: LinkItemType) => {
            return item.id === link.parent_id;
          });
          const tempObject: CategoryPanelType = {
            id: item.id,
            categoryName: item.category_name,
            linkList: panelLinkList,
          };
          renderList.push(tempObject);
        });
        reactiveData.categoryPanelData = renderList;
        // console.log(reactiveData.categoryPanelData);
      });
    };
    watch(
      this.$props,
      (newValue: any) => {
        currentCategoryLv1.value = newValue.currentCategoryLv1;
      },
      { immediate: true }
    );
    return {
      filterChange,
      reactiveData,
    };
  });
}
</script>
<style scoped lang="less">
.category-box {
  width: 94%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.link-content-box {
  width: 100%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
