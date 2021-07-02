<template>
  <div class="category-box">
    <filter></filter>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, watch } from 'vue';
import Filter from '@/components/Filter.vue';
import { useStore } from 'vuex';

@Options({
  props: {
    type: String,
  },
  components: {
    Filter,
  },
})
export default class Category extends Vue {
  private type: string;

  private CategoryIndex = setup(() => {
    const store = useStore();
    store.dispatch('getCategoryList');
    const state = store.state;
    console.log(state, 111);
    const searchValue = ref<string>(null);
    const changeCollapse = () => {
      console.log(111);
    };
    watch(this.$props, (newValue: any) => {
      console.log(newValue);
    });
    return {
      searchValue,
      changeCollapse,
    };
  });
}
</script>
<style scoped lang="less">
.category-box {
  width: 92%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
