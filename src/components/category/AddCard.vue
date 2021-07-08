<template>
  <div class="category-card-box">
    <div class="category-card-top">
      <div class="icon">+</div>
      <div class="title">知乎论坛</div>
    </div>
    <div class="desc">只是一个非常活跃的博客论坛系统,值得收藏</div>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { watch } from 'vue';

@Options({
  props: {
    linkList: String,
  },
})
export default class AddCard extends Vue {
  private linkList: string;
  private CategoryCard = setup(() => {
    watch(this.$props, (newValue: any) => {
      console.log(newValue);
    });
    return {};
  });
}
</script>
<style scoped lang="less">
@import '../../styles/constants.less';
.category-card-box {
  width: 240px;
  height: 90px;
  display: flex;
  flex-direction: column;
  background-origin: padding-box;
  border-radius: 10px;
  background: #ffffff;
  border: 2px solid @tab-background;
  // box-shadow: -4px -4px 8px #eaedf6, 4px 4px 8px #d6d8e0;
  .category-card-top {
    margin: 5px 10px;
    border-bottom: 2px solid @cell-background;
    position: relative;
    .icon {
      position: absolute;
      background: #ffffff;
      top: -30px;
      left: 0px;
      width: 45px;
      height: 45px;
      line-height: 45px;
      border-radius: 50%;
      font-size: 30px;
      border: 1px solid @tab-background;
    }
  }
  .desc {
    padding: 0px 10px 10px 10px;
  }
}
</style>
