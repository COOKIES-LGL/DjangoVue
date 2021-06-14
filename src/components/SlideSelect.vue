<template>
  <div class="search-top">
    <el-tabs v-model="SelectSelect.activeName" type="card" @tab-click="SelectSelect.handleTabClick">
      <el-tab-pane
        v-for="(item, index) in SearchTabList"
        :key="index"
        :label="item.label"
        :name="item.value"
        >{{ item.label }}</el-tab-pane
      >
    </el-tabs>
  </div>
  <slot name="input"></slot>
  <div class="search-bottom"></div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref } from 'vue';
import { SearchTabList, SearchTabListType } from '@/constants';


@Options({
  props: {
    msg: String,
  },
})
export default class SelectSelect extends Vue {
  private SearchTabList: SearchTabListType[] = SearchTabList;
  private SelectSelect = setup(() => {
    const activeName = ref('activeName');
    const handleTabClick = () => {
      console.log(111);
    };
    return {
      activeName,
      handleTabClick,
    };
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
