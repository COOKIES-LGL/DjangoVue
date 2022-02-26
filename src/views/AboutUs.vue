<template>
  <div class="about">
    <h1 class="solog">我们不生产网站,我们只是网站的搬运工</h1>
    <a class="author" href="https://COOKIES-LGL.github.io">归零@you</a>
    <img class="xmind-img" :src="feImage" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderBar from '@/components/HeaderBar.vue'; // @ is an alias to /src
import SideBar from '@/components/SideBar.vue';
import Footer from '@/components/Footer.vue';
import feImage from '@/assets/images/fe.jpg';

@Options({
  components: {
    HeaderBar,
    SideBar,
    Footer,
  },
})
export default class Home extends Vue {
  private feImage: string = feImage;
}
</script>
<style lang="less" scoped>
.about {
  width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .solog {
    margin-top: 36px;
  }
  .author {
    text-decoration: none;
    font-size: 16px;
  }
  .xmind-img {
    margin: 50px auto;
    border-radius: 40px;
  }
}
</style>
