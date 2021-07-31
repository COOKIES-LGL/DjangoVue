<template>
  <div class="about">
    <h1>我们不生产网站,我们只是网站的搬运工</h1>
    <a href="https://COOKIES-LGL.github.io">归零@you</a>
  </div>
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
<style lang="less" scoped>

</style>
