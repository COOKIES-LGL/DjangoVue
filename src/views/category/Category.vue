<template>
  <div class="category-box">
    <div class="category-title"><i class="el-icon-discount"></i>前端</div>
    <el-divider></el-divider>
    <!-- <el-tabs
      v-model="CategoryIndex.activeName"
      type="card"
      @tab-click="CategoryIndex.handleTabClick"
    >
      <el-tab-pane
        v-for="(item, index) in SearchTabList"
        :key="index"
        :label="item.label"
        :name="item.value"
      ></el-tab-pane>
    </el-tabs> -->
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, watch } from 'vue';

@Options({
  props: {
    type: String,
  },
  components: {},
})
export default class Category extends Vue {
  private type: string;

  private CategoryIndex = setup(() => {
    const searchValue = ref<string>(null);
    const changeCollapse = () => {
      console.log(111);
    };
    watch(this.$props, (newValue: any) => {
      console.log(newValue);
    });
    return {
      searchValue,
      changeCollapse,
    };
  });
}
</script>
<style scoped lang="less">
.category-box {
  width: 96%;
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
    border-radius: 15px;
  }
}
</style>
