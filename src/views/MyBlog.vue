<template>
  <cardPage :sidebarList="BlogSideBarMenu" @changeSelect="DiscoverIndex.changeCategoryLv1">
    <template v-slot:content>
      <div class="category-title"><i class="el-icon-discount"></i>{{ DiscoverIndex.currentCategoryLv1 }}</div>
      <category :currentCategoryLv1="DiscoverIndex.currentCategoryLv1Id"></category>
      <!-- <el-empty description="暂无数据"></el-empty> -->
    </template>
  </cardPage>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { watch } from 'vue';
import CardPage from '@/components/CardPage.vue';
import { BlogSideBarMenu, SideBarMenuType } from '@/constants';

@Options({
  components: {
    CardPage,
  },
})
export default class MyBlog extends Vue {
  private BlogSideBarMenu: SideBarMenuType[] = BlogSideBarMenu;
  private DiscoverIndex = setup(async () => {
    const changeCategoryLv1 = function(newValue: SideBarMenuType) {
      console.log(newValue, 'newValue');
    };
    watch(this.$props, (newValue: any) => {
      console.log(newValue);
    });
    return {
      changeCategoryLv1,
    };
  });
}
</script>
<style scoped lang="less"></style>
