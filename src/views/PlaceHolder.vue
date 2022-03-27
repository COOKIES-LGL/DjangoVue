<template>
  <div class="place-holder-box">
  </div>
  <Footer />
  <el-backtop target=".home-box"></el-backtop>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Footer from '@/components/Footer.vue';

@Options({
  components: {
    Footer,
  },
})
export default class PlaceHolder extends Vue {
  private toDoImage: string;
}
</script>
<style scoped lang="less">
@import '../styles/constants.less';
.place-holder-box {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  min-height: 100vh;
}
</style>
