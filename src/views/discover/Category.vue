<template>
  <div class="category-filter-box">
    <filter-tab></filter-tab>
    <div class="link-content-box">
      <category-panel></category-panel>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, watch } from 'vue';
import FilterTab from '@/components/FilterTab.vue';
import { useStore } from 'vuex';
import { LinkCategoryItemType } from '@/api';
import CategoryPanel from '@/components/category/CategoryPanel.vue';

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
  private FormatData(linkCategoryList: LinkCategoryItemType[]) {
    // for ()
    // linkCategoryList.filter((item: LinkCategoryItemType)=>{
    //   if (item.category_level)

    // })
    console.log(linkCategoryList, 111);
  }
  private CategoryIndex = setup(() => {
    const store = useStore();
    const state = store.state;
    this.FormatData(state.allLinkCategory);
    const currentCategoryLv1 = ref<number>(1);
    const searchValue = ref<string>(null);
    watch(
      this.$props,
      (newValue: any) => {
        console.log(newValue, 'new111');
        currentCategoryLv1.value = newValue.currentCategoryLv1;
      },
      { immediate: true }
    );
    return {
      searchValue,
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
    width: 94%;
    margin: 0 auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
