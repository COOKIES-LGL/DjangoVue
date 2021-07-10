<template>
  <div class="category-index-box">
    <div class="category-title"><i class="el-icon-discount"></i>{{CategoryPanel.LinkItemList.categoryName}}</div>
    <div class="category-card-container">
      <CategoryCard v-for="(item, index) in CategoryPanel.LinkItemList.linkList" :key="index" :linkItem="item" />
      <add-card />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, watch } from 'vue';
import CategoryCard from './CategoryCard.vue';
import AddCard from './AddCard.vue';
import { LinkItemType } from '@/api';

@Options({
  props: {
    dataList: Object,
  },
  components: {
    CategoryCard,
    AddCard,
  },
})
export default class CategoryPanel extends Vue {
  private dataList: LinkItemType[];

  private CategoryPanel = setup(() => {
    let LinkItemList = ref<LinkItemType[]>(this.dataList);
    watch(
      this.$props,
      (newValue: any) => {
        LinkItemList.value = newValue.dataList;
      },
      { immediate: true }
    );
    return {
      LinkItemList,
    };
  });
}
</script>
<style scoped lang="less">
@import '../../styles/constants.less';
.category-index-box {
  width: 98%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .category-title {
    font-size: 20px;
    padding-left: 20px;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ffffff;
    border-bottom: 2px solid @infomation3;
    border-radius: 15px;
  }
  .category-card-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 10px 10px 20px;
    .category-card-box {
      margin: 30px 10px 0px 10px;
    }
  }
}
</style>
