<template>
  <div class="sidebar-box">
    <SideBar @changeSelect="CardPage.changeSelect" :propsData="CardPage.sidebarList"></SideBar>
  </div>
  <div class="inner-container">
    <div class="index-content-box">
      <SearchIndex type="inner"></SearchIndex>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import SideBar from '@/components/SideBar.vue';
import { reactive } from 'vue';
import SearchIndex from '@/components/search/SearchIndex.vue';
import { LinkCategoryItemType } from '@/api';

@Options({
  props: {
    sidebarList: '',
  },
  emits: {
    changeSelect: '', //不写会报警告
  },
  components: {
    SideBar,
    SearchIndex,
  },
})
export default class CardPage extends Vue {
  private sidebarList: LinkCategoryItemType[];
  
  private CardPage = setup(() => {
    const sidebarList = reactive(this.sidebarList);
    const changeSelect = (targetItem: LinkCategoryItemType) => {
      this.$emit('changeSelect', targetItem);
    }
    return {
      sidebarList,
      changeSelect
    };
  });
}
</script>
<style scoped lang="less">
.sidebar-box {
  width: 220px;
  height: 100vh;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}
.inner-container {
  flex: 1;
  .index-content-box {
    box-shadow: 0px 0px 20px -5px rgba(158, 158, 158, 0.2);
    width: 96%;
    border-radius: 10px;
    margin: 30px auto;
    background: #ffffff;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
</style>
