<template>
  <CardPage :sidebarList="DiscoverIndex.sideBarMenu" @changeSelect="DiscoverIndex.changeCategoryLv1">
    <template v-slot:content>
      <div class="category-title"><i class="el-icon-discount"></i>{{ DiscoverIndex.currentCategoryLv1 }}</div>
      <category :currentCategoryLv1="DiscoverIndex.currentCategoryLv1Id"></category>
      <!-- <el-empty description="暂无数据"></el-empty> -->
    </template>
  </CardPage>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, watch, onBeforeMount, reactive } from 'vue';
import CardPage from '@/components/CardPage.vue';
import { useStore } from 'vuex';
import Category from './Category.vue';
import { LinkCategoryItemType } from '@/api';
import { SideBarMenuType, SideBarMenuIcons } from '@/constants';

@Options({
  props: {
    type: String,
  },
  components: {
    CardPage,
    Category,
  },
  provide() {
    return {
      currentCategoryLv1Id: this.DiscoverIndex.currentCategoryLv1Id,
    };
  },
})
export default class Discover extends Vue {
  private type: string;
  private categoryLv1: LinkCategoryItemType[] = [];
  private sideBarMenuIcons: string[] = SideBarMenuIcons;

  // private FormatData(linkCategoryList: LinkCategoryItemType[]) {
  //   this.categoryLv1 = linkCategoryList.filter((item: LinkCategoryItemType) => item.category_level === 1);
  //   this.categoryLv1.forEach((item: LinkCategoryItemType, index: number) => {
  //     const sideBaritem: SideBarMenuType = {
  //       label: item.category_name,
  //       id: item.id,
  //       icon: this.sideBarMenuIcons[index],
  //     };
  //     this.sideBarMenu.push(sideBaritem);
  //   });
  // }

  private DiscoverIndex = setup(async () => {
    const store = useStore();
    let sideBarMenu: SideBarMenuType[] = reactive([]);
    onBeforeMount(() => {
      // 生命勾子
      console.log('beforeMounted');
    });
    await store.dispatch('getCategoryList').then((res: LinkCategoryItemType[]) => {
      this.categoryLv1 = res.filter((item: LinkCategoryItemType) => item.category_level === 1);
      this.categoryLv1.forEach((item: LinkCategoryItemType, index: number) => {
        const sideBaritem: SideBarMenuType = {
          label: item.category_name,
          id: item.id,
          icon: this.sideBarMenuIcons[index],
        };
        sideBarMenu.push(sideBaritem);
      });
    });
    let currentCategoryLv1Id = ref<number>(this.categoryLv1[0].id);
    let currentCategoryLv1 = ref<string>(this.categoryLv1[0].category_name);

    const changeCategoryLv1 = function(newValue: SideBarMenuType) {
      console.log(newValue, 'newValue');
      currentCategoryLv1.value = newValue.label;
      currentCategoryLv1Id.value = newValue.id;
    };
    watch(this.$props, (newValue: any) => {
      console.log(newValue);
    });
    return {
      sideBarMenu,
      changeCategoryLv1,
      currentCategoryLv1,
      currentCategoryLv1Id,
    };
  });
}
</script>
<style scoped lang="less">
.category-title {
  font-size: 20px;
  width: 94%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  border-radius: 15px;
}
</style>
