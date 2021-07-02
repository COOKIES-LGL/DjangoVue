<template>
  <div class="home-box">
    <div class="home-side-box">
      <SideBar></SideBar>
    </div>
    <div class="home-content-box">
      <HeaderBar></HeaderBar>
      <div class="home-content-inner">
        <suspense>
          <template #default>
            <router-view></router-view>
          </template>
          <template #fallback>
            <div>加载中...</div>
          </template>
        </suspense>
      </div>
    </div>
  </div>
  <Footer />
  <el-backtop target=".home-box"></el-backtop>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderBar from '@/components/HeaderBar.vue'; // @ is an alias to /src
import SideBar from '@/components/SideBar.vue';
import Footer from '@/components/Footer.vue';

@Options({
  components: {
    HeaderBar,
    SideBar,
    Footer,
  },
})
export default class Home extends Vue {}
</script>
<style scoped lang="less">
@import '../styles/constants.less';
.home-box {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  min-height: 100vh;
  .home-content-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: @cell-background;
    .home-content-inner {
      width: 100%;
      padding-top: 74px;
    }
  }
}
</style>
