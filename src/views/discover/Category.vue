<template>
  <div class="category-filter-box">
    <filter-tab @filterChange="CategoryIndex.filterChange" :currentCategoryLv1Id="currentCategoryLv1"></filter-tab>
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
import { useRouter } from 'vue-router';
import FilterTab from '@/components/FilterTab.vue';
import { LinkCategoryItemType, getLinkList, GetLinkListParams, LinkItemType } from '@/api';
import CategoryPanel, { CategoryPanelType }  from '@/components/category/CategoryPanel.vue';

interface LinkCategoryObjectType {
  [key: string]: LinkCategoryItemType[];
}

@Options({
  props: {
    currentCategoryLv1: Number,
  },
  components: {
    FilterTab,
    CategoryPanel,
  },
})
export default class Category extends Vue {
  private categoryLv1: string;
  private LinkCategoryObject: LinkCategoryObjectType[] = [];

  private CategoryIndex = setup(() => {
    const currentCategoryLv1 = ref<number>(1);
    const currentCategoryLv2 = ref<number>(1);
    const router = useRouter();
    let reactiveData = reactive({
      categoryPanelData: {},
    });

    const filterChange = (filterObject: any, category: LinkCategoryItemType[]) => {
      console.log(filterObject, 'object', category);
      router.push({
        // 增加router参数
        path: '/discover',
        query: {
          lv1: filterObject.category_lv1,
          lv2: filterObject.category_lv2,
          lv3: filterObject.category_lv3,
        },
      });
      if (currentCategoryLv2.value === filterObject.category_lv2) return;
      currentCategoryLv2.value = filterObject.category_lv2;
      const params: GetLinkListParams = {
        grandparent_id: filterObject.category_lv2,
      };
      getLinkList(params).then(res => {
        const response = res.data;
        const renderList = [];
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
.category-filter-box {
  width: 94%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .link-content-box {
    width: 100%;
    margin: 0 auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
