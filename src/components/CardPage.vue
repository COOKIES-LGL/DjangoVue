<template>
  <div class="index-content-box">
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class CardPage extends Vue {}
</script>
<style scoped lang="less">
.index-content-box {
  box-shadow: 0px 0px 20px -5px rgba(158, 158, 158, 0.2);
  width: 94%;
  border-radius: 10px;
  margin: 40px auto;
  background: #ffffff;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
