<template>
  <a href="https://COOKIES-LGL.github.io">归零@you</a>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CardPage from '@/components/CardPage.vue';

@Options({
  components: {
    CardPage,
  },
})
export default class MyBlog extends Vue {}
</script>
<style scoped lang="less"></style>
