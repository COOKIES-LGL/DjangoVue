<template>
  <div class="header-bar-box">
    <div class="menu-left">
      <i class="el-icon-heavy-rain icon-box"></i>
      <div>深圳</div>
    </div>
    <ul class="menu-list">
      <li
        :class="{ currentClass: item.value === HeaderBar.currentIndex }"
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
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

@Options({
  props: {
    msg: String,
  },
})
export default class HeaderBar extends Vue {
  private HeaderBarMenu: HeaderBarMenuType[] = HeaderBarMenu;

  private HeaderBar = setup(() => {
    const currentIndex = ref<string>('home');
    const navTo = (item: HeaderBarMenuType) => {
      console.log(item);
      Router.push({
        name: item.value,
      });
      currentIndex.value = item.value;
    };
    const route = useRoute();
    watch(
      () => route.path,
      (newValue: string) => {
        currentIndex.value = newValue === '/' ? 'home' : newValue.slice(1);
      },
      {
        immediate: true,
      }
    );
    return {
      navTo,
      currentIndex,
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
  padding-left: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  z-index: 999;
  background: #ffffff;
  border-bottom: @border-color solid 1px;
  .menu-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
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
    font-size: 16px;
    font-weight: bold;
    li {
      margin-left: 25px;
      cursor: pointer;
      &:hover {
        color: @infomation3;
      }
    }
    .currentClass {
      border-bottom: 2px solid @infomation3;
      color: @infomation3;
    }
  }
}
</style>
