<template>
  <div class="sidebar-container">
    <div class="logo-box" @click="SideBar.changeCollapse">{{ SideBar.logoText }}</div>
    <el-menu
      :default-active="SideBar.sideBarMenu[0].id.toString()"
      class="el-menu-vertical-demo"
      :collapse="SideBar.isCollapse"
      :collapse-transition="true"
      @select="SideBar.elMenuChange"
    >
      <template v-for="item in SideBar.sideBarMenu" :key="item.id.toString()">
        <el-menu-item :index="item.id.toString()" class="el-menu-item-class" v-if="!item.children">
          <i :class="item.icon"></i>
          <template #title>{{ item.label }}</template>
        </el-menu-item>
        <el-submenu :index="item.id.toString()" v-else>
          <template #title>
            <div class="el-menu-item-class">
              <i :class="item.icon"></i> <span>{{ item.label }}</span>
            </div>
          </template>
          <el-menu-item-group v-for="(child, subIndex) in item.children" :key="subIndex">
            <el-menu-item class="el-menu-item-class" :index="child.id.toString()"
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
import { ref, reactive } from 'vue';
import { SideBarMenuType } from '@/constants';

@Options({
  props: {
    propsData: Object,
  },
  emits: {
    changeSelect: '',
  },
})
export default class SideBar extends Vue {
  private propsData: SideBarMenuType[];

  private SideBar = setup(() => {
    const sideBarMenu: SideBarMenuType[] = reactive(this.propsData);
    const logoText = ref('To Be Stronger');
    const isCollapse = ref(false);
    const changeCollapse = () => {
      isCollapse.value = !isCollapse.value;
      logoText.value = logoText.value === '❤️' ? 'To Be Stronger' : '❤️';
    };
    const elMenuChange = (index: number) => {
      const targetItem = sideBarMenu.find((item: SideBarMenuType) => item.id == index);
      this.$emit('changeSelect', targetItem);
    };
    return {
      logoText,
      isCollapse,
      sideBarMenu,
      changeCollapse,
      elMenuChange,
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
    font-size: 28px;
    font-weight: bold;
    width: auto;
    cursor: pointer;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    min-height: 400px;
    .el-menu-item-class {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>
