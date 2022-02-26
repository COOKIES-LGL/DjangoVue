<template>
  <div class="category-index-box" :id="CategoryPanel.LinkItemList.id">
    <div class="category-title"><i class="el-icon-discount"></i>{{ CategoryPanel.LinkItemList.categoryName }}</div>
    <VueDraggableNext
      class="category-card-container"
      :animation="200"
      v-model="CategoryPanel.LinkItemList.linkList"
      @end="CategoryPanel.onDraggeEnd"
      draggable=".category-card-box"
    >
      <CategoryCard v-for="(item, index) in CategoryPanel.LinkItemList.linkList" :key="index" :linkItem="item" />
      <add-card />
    </VueDraggableNext>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, watch, onMounted, toRaw } from 'vue';
import CategoryCard from './CategoryCard.vue';
import AddCard from './AddCard.vue';
import { LinkItemType, postLinkListForOrder } from '@/api';
import { VueDraggableNext } from 'vue-draggable-next';

export interface CategoryPanelType {
  id: number;
  categoryName: string;
  linkList: LinkItemType[];
}

@Options({
  props: {
    dataList: Object,
  },
  components: {
    CategoryCard,
    AddCard,
    VueDraggableNext,
  },
})
export default class CategoryPanel extends Vue {
  private dataList: CategoryPanelType;

  private CategoryPanel = setup(() => {
    let LinkItemList = ref<CategoryPanelType>(this.dataList);
    let rawLinkListData: LinkItemType[] = this.dataList.linkList;

    onMounted(() => {
      rawLinkListData = toRaw(this.dataList).linkList;
    });

    const onDraggeEnd = (e: any) => {
      const { oldIndex, newIndex } = e;
      [rawLinkListData[oldIndex] ,rawLinkListData[newIndex]] = [rawLinkListData[newIndex], rawLinkListData[oldIndex]];
      console.log(oldIndex, newIndex , rawLinkListData);
      for (let index = 0 ; index < rawLinkListData.length; index ++) {
        rawLinkListData[index].order_id = index;
      }
      postLinkListForOrder({ linkList: rawLinkListData });
    };

    watch(
      this.$props,
      (newValue: any) => {
        LinkItemList.value = newValue.dataList;
      },
      { immediate: true }
    );

    return {
      LinkItemList,
      onDraggeEnd,
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
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ffffff;
    border-top: 2px solid @table-border-color;
  }
  .category-card-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 10px 0px 20px;
    .category-card-box {
      margin: 30px 10px 0px 10px;
    }
  }
}
</style>
