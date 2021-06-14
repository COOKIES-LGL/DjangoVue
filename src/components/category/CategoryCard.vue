<template>
  <div class="category-card-box"></div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, watch } from 'vue';

@Options({
  props: {
    type: String,
  },
})
export default class CategoryCard extends Vue {
  private type: string;
  private CategoryCard = setup(() => {
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
.category-card-box {
  width: 120px;
  height: 60px;
}
</style>
