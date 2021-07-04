<template>
  <div class="index-content-box">
    <SearchIndex></SearchIndex>
    <category-panel></category-panel>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SearchIndex from '@/components/search/SearchIndex.vue';
import CategoryPanel from '@/components/category/CategoryPanel.vue';

@Options({
  components: {
    SearchIndex,
    CategoryPanel,
  },
})
export default class Index extends Vue {}
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
