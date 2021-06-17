<template>
  <div class="index-content-box">
    RankList
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class RankList extends Vue {}
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
