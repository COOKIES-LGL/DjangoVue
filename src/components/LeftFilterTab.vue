<template>
  <div class="filter-box">
    <el-tabs
      type="card"
      v-model="LeftFilterIndex.filterObject.category_lv1"
      @tab-click="LeftFilterIndex.handleTab1Click"
    >
      <el-tab-pane
        v-for="(item, index) in LeftFilterIndex.category.categoryLv1"
        :key="index"
        :label="item.category_name"
        :name="item.id.toString()"
      >
        <div class="inner-content">
          <el-tabs
            v-model="LeftFilterIndex.filterObject.category_lv2"
            @tab-click="LeftFilterIndex.handleTab2Click"
          >
            <el-tab-pane
              v-for="(item, index) in LeftFilterIndex.category.categoryLv2"
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
import { reactive, ref, watch } from 'vue';
import { useStore } from 'vuex';
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
export default class LeftFilterTab extends Vue {
  private LeftFilterIndex = setup(() => {
    // const currentCategoryLv1Id = ref<number>(inject('currentCategoryLv1Id'));可以获取到无法弄到响应式,后续TODO
    let category: CategoryLv2Array = reactive({
      categoryLv1: [],
      categoryLv2: [],
    });

    const filterObject = reactive({
      category_lv1: '1',
      category_lv2: '1',
    });
    const currentCategoryLv1Id = ref<number>(1);
    const store = useStore();
    const state = store.state;
    const allLinkCategory = state.allLinkCategory;

    const formatData = (currentid: number) => {
      category.categoryLv1 = allLinkCategory.filter((item: LinkCategoryItemType) => item.category_parent == currentid);
      filterObject.category_lv1 = category.categoryLv1[0].id.toString();
      if (category.categoryLv1 && category.categoryLv1.length > 0) {
        category.categoryLv2 = allLinkCategory.filter(
          (item: LinkCategoryItemType) => item.category_parent == category.categoryLv1[0].id
        );
        filterObject.category_lv2 = category.categoryLv2[0] && category.categoryLv2[0].id.toString();
      }
    };
    watch(
      this.$props,
      (newValue: any) => {
        console.log(newValue, 'current');
        currentCategoryLv1Id.value = newValue.currentCategoryLv1Id;
        formatData(currentCategoryLv1Id.value);
      },
      { immediate: true }
    );

    watch(
      filterObject,
      (newValue: any) => {
        this.$emit('filterChange', newValue, category.categoryLv2);
      },
      { immediate: true }
    );

    const handleTab1Click = (item: any) => {
      const currentTab1Id = item.props.name;
      category.categoryLv2 = allLinkCategory.filter((item: LinkCategoryItemType) => {
        return item.category_parent == Number(currentTab1Id);
      });
      if (category.categoryLv2 && category.categoryLv2.length > 0) {
        filterObject.category_lv2 = category.categoryLv2[0].id.toString();
      }
      // console.log(category_lv2.categoryLv2);
    };

    const handleTab2Click = (item: any) => {
      const currentTab2Id = item.props.name;
      filterObject.category_lv2 = currentTab2Id;
      // console.log(category_lv3.categoryLv3);
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
