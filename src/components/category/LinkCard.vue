<template>
  <div class="category-card-box" @click="LinkCard.linktoUrl">
    <div class="category-card-left">
      <div class="icon">{{ LinkCard.iconFromTitle }}</div>
      <div class="vpn-icon" v-if="LinkCard.linkItem.link_need_vpn">VPN</div>
    </div>
    <div class="category-card-right">
      <div class="title" v-line-clamp="1">{{ LinkCard.linkItem.link_title }}</div>
      <el-tooltip
        :append-to-body="true"
        placement="bottom"
        :show-after="2000"
        effect="light"
        :content="LinkCard.linkItem.link_desc"
      >
        <div class="desc" v-line-clamp="2">{{ LinkCard.linkItem.link_desc }}</div>
      </el-tooltip>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { LinkItemType } from '@/api';
import { ref, watch } from 'vue';

@Options({
  props: {
    linkItem: Object,
  },
})
export default class LinkCard extends Vue {
  private linkItem: LinkItemType;

  private LinkCard = setup(() => {
    const linkItem = ref<LinkItemType>(this.linkItem);
    // console.log(linkItem.value);
    let iconFromTitle = ref<string>(linkItem.value.link_title.slice(0, 1).toUpperCase());
    const linktoUrl = () => {
      window.open(linkItem.value.link_url);
    };
    watch(
      this.$props,
      (newValue: any) => {
        linkItem.value = newValue.linkItem;
        iconFromTitle.value = linkItem.value.link_title.slice(0, 1).toUpperCase();
      },
      { immediate: true }
    );
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
  width: 330px;
  height: 100px;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  background-origin: padding-box;
  border-radius: 10px;
  background: #ffffff;
  border: 2px solid @permission-border-color;
  transform: translate(0px);
  transition: transform 1s;
  &:hover {
    transform: translateY(-10px);
  }
  // box-shadow: -4px -4px 8px #eaedf6, 4px 4px 8px #d6d8e0;
  .category-card-left {
    text-align: center;
    padding: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    .vpn-icon {
      margin-top: 10px;
      font-size: 12px;
      font-weight: bold;
      color: @infomation3;
    }
    .icon {
      background: #ffffff;
      width: 45px;
      height: 45px;
      line-height: 45px;
      border-radius: 50%;
      font-weight: bold;
      font-size: 28px;
      border: 1px solid @tab-background;
    }
  }
  .category-card-right {
    .title {
      width: 90%;
      line-height: 30px;
      border-bottom: 1px solid @table-border-color;
      font-weight: bold;
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
}
</style>
