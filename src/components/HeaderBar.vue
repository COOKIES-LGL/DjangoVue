<template>
  <div class="header-bar-box">
    <div class="menu-left"><i class="el-icon-heavy-rain icon-box"></i><div>深圳</div></div>
    <ul class="menu-list">
      <li
        v-for="item in HeaderBarMenu"
        :key="item.value"
        @click="HeaderBar.navTo(item)"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { HeaderBarMenu, HeaderBarMenuType } from '@/constants';
import Router from '@/router/index';

@Options({
  props: {
    msg: String,
  },
})
export default class HeaderBar extends Vue {
  private HeaderBarMenu: HeaderBarMenuType[] = HeaderBarMenu;

  private HeaderBar = setup(() => {
    const navTo = (item: HeaderBarMenuType) => {
      console.log(item);
      Router.push({
        name: item.value
      })
    };
    return {
      navTo,
    };
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../styles/constants.less';
.header-bar-box {
  height: 74px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  z-index: 1001;
  background: #ffffff;
  border-bottom: @border-color solid 1px;
  .menu-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    .icon-box {
      height: 25px;
      width: 25px;
      font-size: 25px;
      color: @infomation3;
      cursor: pointer;
      margin-left: 20px;
    }
  }

  .menu-list {
    display: flex;
    flex-direction: row;
    color: @text-primary;
    margin-left: 40px;
    li {
      margin-left: 20px;
      cursor: pointer;
      &:hover {
        color: @infomation3;
      }
    }
  }
}
</style>
