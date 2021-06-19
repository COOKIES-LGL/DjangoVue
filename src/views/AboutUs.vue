<template>
  <div class="about">
    <h1>This is an about us page</h1>
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
