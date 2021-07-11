<template>
  <div class="category-card-box" @click="CategoryCard.linktoUrl">
    <div class="category-card-top">
      <div class="icon">{{ CategoryCard.iconFromTitle }}</div>
      <div class="title" v-line-clamp="2">{{ CategoryCard.linkItem.link_title }}</div>
      <div class="vpn-icon" v-if="CategoryCard.linkItem.link_need_vpn">VPN</div>
    </div>
    <el-tooltip
      :append-to-body="false"
      placement="top"
      :show-after="300"
      effect="light"
      :content="CategoryCard.linkItem.link_desc"
    >
      <div class="desc" v-line-clamp="2">{{ CategoryCard.linkItem.link_desc }}</div>
    </el-tooltip>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { LinkItemType } from '@/api';
import { ref } from 'vue';

@Options({
  props: {
    linkItem: Object,
  },
})
export default class CategoryCard extends Vue {
  private linkItem: LinkItemType;

  private CategoryCard = setup(() => {
    const linkItem = ref<LinkItemType>(this.linkItem);
    // console.log(linkItem.value);
    const iconFromTitle: string = linkItem.value.link_title.slice(0, 1);
    const linktoUrl = () => {
      window.open(linkItem.value.link_url)
    }
    return {
      iconFromTitle,
      linkItem,
      linktoUrl,
    };
  });
}
</script>
<style scoped lang="less">
@import '../../styles/constants.less';
.category-card-box {
  width: 250px;
  height: 90px;
  display: flex;
  cursor: pointer;
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
    max-width: 250px;
  }
  // box-shadow: -4px -4px 8px #eaedf6, 4px 4px 8px #d6d8e0;
  .category-card-top {
    margin: 2px 0px 2px 10px;
    text-align: center;
    height: 24px;
    line-height: 24px;
    border-bottom: 2px solid @cell-background;
    position: relative;
    display: flex;
    .title {
      width: 90%;
      text-indent: 2.5rem;
      font-weight: bold;
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
      top: -28px;
      left: 0px;
      width: 45px;
      height: 45px;
      line-height: 45px;
      border-radius: 50%;
      font-weight: bold;
      font-size: 28px;
      border: 1px solid @tab-background;
    }
  }
  .desc {
    display: flex;
    font-size: 12px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px 10px 5px 10px;
    line-height: 24px;
  }
}
</style>
