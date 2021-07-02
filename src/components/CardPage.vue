<template>
  <div class="sidebar-box">
    <SideBar></SideBar>
  </div>
  <div class="inner-container">
    <div class="index-content-box">
      <SearchIndex type='inner'></SearchIndex>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SideBar from '@/components/SideBar.vue';
import SearchIndex from '@/components/search/SearchIndex.vue';

@Options({
  components: {
    SideBar,
    SearchIndex,
  },
})
export default class CardPage extends Vue {}
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
