<template>
  <div class="index-content-box">
    <SearchIndex></SearchIndex>
    <CategoryIndex/>
    <
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SearchIndex from '@/components/search/SearchIndex.vue';
import CategoryIndex from '@/components/category/CategoryIndex.vue';

@Options({
  components: {
    SearchIndex,
    CategoryIndex,
  },
})
export default class Home extends Vue {}
</script>
<style scoped lang="less">
.index-content-box {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;;
}
</style>
