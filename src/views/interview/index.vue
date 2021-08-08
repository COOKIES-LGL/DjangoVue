<template>
  <CardPage
    :hideSearch="true"
    :sidebarList="InterviewIndex.sideBarMenu"
    @changeSelect="InterviewIndex.changeCategoryLv1"
  >
    <template v-slot:content>
      <div class="block">
        <span class="demonstration">每日优选推荐</span>
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="category-title"><i class="el-icon-discount"></i>{{ InterviewIndex.currentCategoryLv1 }}</div>
      <category :currentCategoryLv1="InterviewIndex.currentCategoryLv1Id"></category>
      <!-- <el-empty description="暂无数据"></el-empty> -->
    </template>
  </CardPage>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, onBeforeMount, reactive } from 'vue';
import CardPage from '@/components/CardPage.vue';
import { useStore } from 'vuex';
import Category from './Category.vue';
import { LinkCategoryItemType } from '@/api';
import { SideBarMenuType, SideBarMenuIcons } from '@/constants';

@Options({
  components: {
    CardPage,
    Category,
  },
})
export default class Interview extends Vue {
  private type: string;
  private categoryLv1: LinkCategoryItemType[] = [];
  private sideBarMenuIcons: string[] = SideBarMenuIcons;

  private InterviewIndex = setup(async () => {
    const store = useStore();
    let sideBarMenu: SideBarMenuType[] = reactive([]);
    // onBeforeMount(() => {
    //   console.log(111111);
    // });
    await store.dispatch('getSpecialTypeCategoryList', { category_type: 1 }).then(res => {
      this.categoryLv1 = res.filter((item: LinkCategoryItemType) => item.category_level === 2);
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
    return {
      sideBarMenu,
      changeCategoryLv1,
      currentCategoryLv1Id,
      currentCategoryLv1,
    };
  });
}
</script>
<style scoped lang="less">
.block {
  width: 100%;
  margin: 20px auto;
  background: #ffffff;
}
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
