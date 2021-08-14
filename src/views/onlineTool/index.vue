<template>
  <CardPage
    :hideSearch="true"
    :sidebarList="InterviewIndex.sideBarMenu"
    @changeSelect="InterviewIndex.changeCategoryLv1"
  >
    <template v-slot:content>
      <div class="block" v-if="InterviewIndex.sliderData.length > 0">
        <span class="demonstration">优选推荐</span>
        <el-carousel class="panel-box" trigger="click" height="120px">
          <el-carousel-item class="slider-panel" v-for="(item, index) in InterviewIndex.sliderData.length" :key="item">
            <div class="slider-item" v-for="(item, i) in InterviewIndex.sliderData[index]" :key="'i' + i">
              <LinkCard :linkItem="item"></LinkCard>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="category-title"><i class="el-icon-discount"></i>{{ InterviewIndex.currentCategoryLv1 }}</div>
      <category :currentCategoryLv1="InterviewIndex.currentCategoryLv1Id"></category>
    </template>
  </CardPage>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, onBeforeMount, reactive } from 'vue';
import CardPage from '@/components/CardPage.vue';
import { useStore } from 'vuex';
import Category from './Category.vue';
import LinkCard from '@/components/category/LinkCard.vue';
import { LinkCategoryItemType, getSpecialLinkList, LinkItemType } from '@/api';
import { SideBarMenuType, SideBarMenuIcons } from '@/constants';

@Options({
  components: {
    CardPage,
    Category,
    LinkCard,
  },
})
export default class Interview extends Vue {
  private type: string;
  private sliderPaginationNumber = 4;
  private categoryLv1: LinkCategoryItemType[] = [];
  private sideBarMenuIcons: string[] = SideBarMenuIcons;

  private InterviewIndex = setup(async () => {
    const store = useStore();
    let sideBarMenu: SideBarMenuType[] = reactive([]);
    const sliderData: Array<LinkItemType[]> = reactive([]);
    onBeforeMount(() => {
      getSpecialLinks(currentCategoryLv1Id.value);
    });
    const getSpecialLinks = (id: number) => {
      getSpecialLinkList({ parent_id: id }).then(res => {
        if (res.data.length === 0) return;
        const pageNum = Math.ceil(res.data.length / this.sliderPaginationNumber);
        const Data: LinkItemType[] = res.data;
        for (let index = 0; index < pageNum; index++) {
          const sliderDataItem: LinkItemType[] = [];
          for (let jndex = 0; jndex < this.sliderPaginationNumber; jndex++) {
            if (Data.length === 0) break;
            sliderDataItem.push(Data.pop());
          }
          sliderData.push(sliderDataItem);
        }
      });
    };
    await store.dispatch('getSpecialTypeCategoryList', { category_type: 2 }).then(res => {
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
      getSpecialLinks(newValue.id);
    };
    return {
      sideBarMenu,
      sliderData,
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
  .demonstration {
    font-size: 16px;
  }
  .panel-box {
    padding: auto 10px;
    .slider-panel {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }
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
