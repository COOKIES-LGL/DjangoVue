<template>
  <div class="filter-box">
    <el-tabs type="card" v-model="FilterIndex.filterObject.category_lv1" @tab-click="FilterIndex.handleTab1Click">
      <el-tab-pane
        v-for="(item, index) in FilterIndex.category.categoryLv1"
        :key="index"
        :label="item.category_name"
        :name="item.id.toString()"
      >
        <div class="inner-content">
          <el-tabs v-model="FilterIndex.filterObject.category_lv2" @tab-click="FilterIndex.handleTab2Click">
            <el-tab-pane
              v-for="(item, index) in FilterIndex.category.categoryLv2"
              :key="index"
              :label="item.category_name"
              :name="item.id.toString()"
            >
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { reactive, ref, watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { LinkCategoryItemType } from '@/api';

interface CategoryLv2Array {
  categoryLv1?: LinkCategoryItemType[];
  categoryLv2?: LinkCategoryItemType[];
}

@Options({
  props: {
    currentCategoryLv1Id: Number,
  },
})
export default class FilterTabSimple extends Vue {
  private currentCategoryLv1Id: number;
  private FilterIndex = setup(() => {
    let category: CategoryLv2Array = reactive({
      categoryLv1: [],
      categoryLv2: [],
    });
    const filterObject = reactive({
      category_lv1: '1',
      category_lv2: '1',
    });
    const route = useRoute();
    const store = useStore();
    const state = store.state;
    const allLinkCategory = state.allLinkCategory;

    const formatData = (currentCategoryLv1Id: number) => {
      category.categoryLv1 = allLinkCategory.filter(
        (item: LinkCategoryItemType) => item.category_parent == currentCategoryLv1Id
      );
      if (category.categoryLv1.length <= 0) return;
      filterObject.category_lv1 = category.categoryLv1[0].id.toString();
      if (category.categoryLv1 && category.categoryLv1.length > 0) {
        category.categoryLv2 = allLinkCategory.filter(
          (item: LinkCategoryItemType) => item.category_parent == category.categoryLv1[0].id
        );
        if (category.categoryLv2.length <= 0) return;
        filterObject.category_lv2 = category.categoryLv2[0] && category.categoryLv2[0].id.toString();
      }
    };

    onMounted(() => {
      const queryObject = route.query;
      formatData(this.currentCategoryLv1Id);
      if (queryObject.lv1 && queryObject.lv2) {
        handleTab1Click(queryObject.lv1);
        handleTab2Click(queryObject.lv2);
      }
    });

    watch(
      this.$props,
      (newValue: any) => {
        this.currentCategoryLv1Id = newValue.currentCategoryLv1Id;
        console.log(this.currentCategoryLv1Id);
        formatData(this.currentCategoryLv1Id);
      },
      { immediate: false }
    );

    watch(
      filterObject,
      (newValue: any) => {
        this.$emit('filterChange', newValue, category.categoryLv2);
      },
      { immediate: false, deep: true }
    );

    const handleTab1Click = (item: any) => {
      const currentTab1Id = item.props ? item.props.name : item;
      filterObject.category_lv1 = currentTab1Id;
      category.categoryLv2 = allLinkCategory.filter((item: LinkCategoryItemType) => {
        return item.category_parent == Number(currentTab1Id);
      });
      if (category.categoryLv2 && category.categoryLv2.length > 0) {
        filterObject.category_lv2 = category.categoryLv2[0].id.toString();
      }
      // console.log(category_lv2.categoryLv2);
    };

    const handleTab2Click = (item: any) => {
      const currentTab2Id = item.props ? item.props.name : item;
      filterObject.category_lv2 = currentTab2Id;
    };

    return {
      filterObject,
      handleTab1Click,
      handleTab2Click,
      category,
    };
  });
}
</script>

<style scoped lang="less">
@import '../styles/constants.less';
.filter-box {
  width: 100%;
  height: auto;
  /deep/ .el-tabs__item {
    text-align: center;
    font-size: 16px;
  }
  .inner-content {
    padding: 0 20px;
  }
  // /deep/ .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  //   border-bottom-color: #fff;
  //   background: @cell-background;
  // }
  /deep/ .el-tabs__nav-wrap::after {
    height: 0px;
  }
}
</style>
