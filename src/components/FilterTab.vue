<template>
  <div class="filter-box">
    <el-tabs type="card" v-model="FilterIndex.filterObject.category_lv1" @tab-click="FilterIndex.handleTab1Click">
      <el-tab-pane
        v-for="(item, index) in FilterIndex.category_lv1"
        :key="index"
        :label="item.category_name"
        :name="item.id.toString()"
      >
        <div class="inner-content">
          <el-tabs v-model="FilterIndex.filterObject.category_lv2" @tab-click="FilterIndex.handleTab2Click">
            <el-tab-pane
              v-for="(item, index) in FilterIndex.category_lv2.categoryLv2"
              :key="index"
              :label="item.category_name"
              :name="item.id.toString()"
            >
              <el-tabs v-model="FilterIndex.filterObject.category_lv3" @tab-click="FilterIndex.handleTab3Click">
                <el-tab-pane
                  v-for="(item, index) in FilterIndex.category_lv3.categoryLv3"
                  :key="index"
                  :label="item.category_name"
                  :name="item.id.toString()"
                >
                </el-tab-pane>
              </el-tabs>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { reactive, inject, ref, watch, computed } from 'vue';
import { useStore } from 'vuex';
import { LinkCategoryItemType } from '@/api';

interface CategoryLv2Array {
  categoryLv2?: LinkCategoryItemType[];
  categoryLv3?: LinkCategoryItemType[];
}

@Options({
  inject: ['currentCategoryLv1Id'],
})
export default class FilterTab extends Vue {
  private FilterIndex = setup(() => {
    const currentCategoryLv1Id = ref<number>(inject('currentCategoryLv1Id'));

    let category_lv1: LinkCategoryItemType[] = reactive([]);
    let category_lv2: CategoryLv2Array = reactive({
      categoryLv2: [],
    });
    let category_lv3: CategoryLv2Array = reactive({
      categoryLv3: [],
    });
    const filterObject = reactive({
      category_lv1: '1',
      category_lv2: '1',
      category_lv3: '1',
    });
    const store = useStore();
    const state = store.state;
    const allLinkCategory = state.allLinkCategory;
    console.log(currentCategoryLv1Id.value, 'current');

    const formatData = (currentid: number) => {
      category_lv1 = allLinkCategory.filter((item: LinkCategoryItemType) => item.category_parent == currentid);
      filterObject.category_lv1 = category_lv1[0].id.toString();
      if (category_lv1 && category_lv1.length > 0) {
        category_lv2.categoryLv2 = allLinkCategory.filter(
          (item: LinkCategoryItemType) => item.category_parent == category_lv1[0].id
        );
        filterObject.category_lv2 = category_lv2.categoryLv2[0].id.toString();
      }
      if (category_lv2.categoryLv2 && category_lv2.categoryLv2.length > 0) {
        category_lv3.categoryLv3 = allLinkCategory.filter(
          (item: LinkCategoryItemType) => item.category_parent == category_lv2.categoryLv2[0].id
        );
        filterObject.category_lv3 = category_lv3.categoryLv3[0].id.toString();
      }
    };

    formatData(currentCategoryLv1Id.value);

    const handleTab1Click = (item: any) => {
      const currentTab1Id = item.props.name;
      category_lv2.categoryLv2 = allLinkCategory.filter((item: LinkCategoryItemType) => {
        return item.category_parent == Number(currentTab1Id);
      });
      if (category_lv2.categoryLv2 && category_lv2.categoryLv2.length > 0) {
        filterObject.category_lv2 = category_lv2.categoryLv2[0].id.toString();
        category_lv3.categoryLv3 = allLinkCategory.filter(
          (item: LinkCategoryItemType) => item.category_parent == category_lv2.categoryLv2[0].id
        );
        if (category_lv3.categoryLv3 && category_lv3.categoryLv3.length > 0) {
          filterObject.category_lv3 = category_lv3.categoryLv3[0].id.toString();
        }
      }
      console.log(category_lv2.categoryLv2);
    };

    const handleTab2Click = (item: any) => {
      const currentTab2Id = item.props.name;
      category_lv3.categoryLv3 = allLinkCategory.filter((item: LinkCategoryItemType) => {
        return item.category_parent == Number(currentTab2Id);
      });
      if (category_lv3.categoryLv3 && category_lv3.categoryLv3.length > 0) {
        filterObject.category_lv3 = category_lv3.categoryLv3[0].id.toString();
      }
      filterObject.category_lv2 = category_lv2.categoryLv2[0].id.toString();
      console.log(category_lv3.categoryLv3);
    };

    const handleTab3Click = (item: any) => {
      const currentTab3Id = item.props.name;
      console.log(currentTab3Id, 'pageScroll');
    };
    watch(currentCategoryLv1Id, (newValue: any) => {
      console.log(newValue.configData, `1111111`);
    });
    return {
      filterObject,
      handleTab1Click,
      handleTab2Click,
      handleTab3Click,
      category_lv1,
      category_lv2,
      category_lv3,
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
