<template>
  <div class="search-box">
    <SearchSelect>
      <template v-slot:input="props"
        ><SearchInput :configData="props.data"
      /></template>
    </SearchSelect>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { SearchTabList, SearchTabListType } from '@/constants';
import SearchInput from './SearchInput.vue';
import SearchSelect from './SearchSelect.vue';

@Options({
  props: {
    msg: String,
  },
  components: {
    SearchInput,
    SearchSelect,
  },
})
export default class SearchIndex extends Vue {
  private SearchTabList: SearchTabListType[] = SearchTabList;
  private SearchIndex = setup(() => {
    return {
      
    };
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.search-box {
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
