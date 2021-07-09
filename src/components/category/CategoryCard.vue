<template>
  <div class="category-card-box">
    <div class="category-card-top">
      <div class="icon">知</div>
      <div class="title">知乎论坛</div>
      <div class="vpn-icon" v-if="1">VPN</div>
    </div>
    <el-tooltip
      :append-to-body="false"
      placement="top"
      :show-after="300"
      effect="light"
      content="只是一个非常活跃的博客论坛系统,值得收藏"
    >
      <div class="desc">只是一个非常活跃的博客论坛系统,值得收藏</div>
    </el-tooltip>
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
export default class CategoryCard extends Vue {
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
  transform: translate(0px);
  transition: transform 1s;
  &:hover {
    transform: translate(-10px);
  }
  /deep/ .el-popper {
    min-height: 32px;
    line-height: 16px;
    max-width: 240px;
  }
  // box-shadow: -4px -4px 8px #eaedf6, 4px 4px 8px #d6d8e0;
  .category-card-top {
    margin: 5px 10px;
    border-bottom: 2px solid @cell-background;
    position: relative;
    display: flex;
    .title {
      width: 90%;
    }
    .vpn-icon {
      width: 15%;
      font-size: 12px;
      font-weight: bold;
      color: @infomation3;
    }
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
