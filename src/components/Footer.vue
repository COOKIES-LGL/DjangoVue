<template>
  <div class="footer-box">
    
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class Footer extends Vue {
  private Footer = setup(() => {
    return {
      
    };
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer-box {
  height: 1=00px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
