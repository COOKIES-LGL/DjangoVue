<template>
  <div class="index-content-box">
    <a href="https://COOKIES-LGL.github.io">归零@you</a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class MyBlog extends Vue {}
</script>
<style scoped lang="less">
.index-content-box {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
