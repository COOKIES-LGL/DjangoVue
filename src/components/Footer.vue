<template>
  <div class="footer-box">
    <div>©️2021-10-01 用户自定义全网式导航站点</div>
    <div class="wechat-box"><img :src="weChat"/></div>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import weChat from '@/assets/Wechat.jpeg';

@Options({
  props: {
    msg: String,
  },
})
export default class Footer extends Vue {
  private weChat: string = weChat;
  private Footer = setup(() => {
    return {
      
    };
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer-box {
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  .wechat-box img{
    width: 100px;
    height: 100px;
  }
}
</style>
