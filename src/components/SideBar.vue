<template>
  <div class="sidebar-container">
    <div class="logo-box" @click="SideBar.changeCollapse">归零@you</div>
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      :collapse="SideBar.isCollapse"
      :collapse-transition="true"
    >
      <template v-for="(item, index) in SideBarMenu" :key="index">
        <el-menu-item :index="item.name" class="el-menu-item-class" v-if="item.children.length === 0">
          <i :class="item.icon"></i>
          <template #title>{{ item.label }}</template>
        </el-menu-item>
        <el-submenu :index="item.name" v-else>
          <template #title>
            <div class="el-menu-item-class">
              <i :class="item.icon"></i> <span>{{ item.label }}</span>
            </div>
          </template>
          <el-menu-item-group v-for="(child, subIndex) in item.children" :key="subIndex">
            <el-menu-item class="el-menu-item-class" :index="child.name"
              ><i :class="child.icon"></i>{{ child.label }}</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref } from 'vue';
import { SideBarMenu, SideBarMenuType } from '@/constants';

@Options({
  props: {
    msg: String,
  },
})
export default class SideBar extends Vue {
  private SideBarMenu: SideBarMenuType[] = SideBarMenu;
  private SideBar = setup(() => {
    const isCollapse = ref(false);
    const changeCollapse = () => {
      console.log(111);
      // isCollapse.value = !isCollapse.value;
    };
    return {
      isCollapse,
      changeCollapse,
    };
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.sidebar-container {
  position: fixed;
  height: 100vh;
  background: #fff;
  z-index: 1001;
  .logo-box {
    height: 72px;
    line-height: 72px;
    font-size: 32px;
    font-weight: bold;
    width: auto;
    font-family: 'Times New Roman', Times, serif;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    min-height: 400px;
    .el-menu-item-class {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  }
}
</style>
