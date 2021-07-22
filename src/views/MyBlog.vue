<template>
  <cardPage :sidebarList="BlogSideBarMenu" @changeSelect="BlogIndex.changeCategoryLv1">
    <template v-slot:content>
      <div class="category-title"><i class="el-icon-discount"></i>{{ BlogIndex.currentCategoryLv1 }}</div>
      <div class="content-container">
        <left-filter-tab @filterChange="BlogIndex.filterChange" :currentCategoryLv1Id="1"></left-filter-tab>
        <div class="content">
        <!-- <category-panel></category-panel> -->
        </div>
      </div>
    </template>
  </cardPage>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { watch } from 'vue';
import CardPage from '@/components/CardPage.vue';
import { BlogSideBarMenu, SideBarMenuType } from '@/constants';
import LeftFilterTab from '@/components/LeftFilterTab.vue';
import CategoryPanel from '@/components/category/CategoryPanel.vue';

@Options({
  components: {
    CardPage,
    LeftFilterTab,
    CategoryPanel,
  },
})
export default class MyBlog extends Vue {
  private BlogSideBarMenu: SideBarMenuType[] = BlogSideBarMenu;

  private BlogIndex = setup(async () => {
    const changeCategoryLv1 = function(newValue: SideBarMenuType) {
      console.log(newValue, 'newValue');
    };
    const filterChange = () => {
      console.log('filter change');
    }
    watch(this.$props, (newValue: any) => {
      console.log(newValue);
    });
    return {
      changeCategoryLv1,
      filterChange,
    };
  });
}
</script>
<style scoped lang="less">
.content-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  .content {
    flex: 1;
  }
}
</style>