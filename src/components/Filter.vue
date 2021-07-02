<template>
  <div class="filter-box"></div>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

@Options({
  props: {
    msg: String,
  },
})
export default class Filter extends Vue {
  private HeaderBar = setup(() => {
    const currentIndex = ref<string>('home');
    const route = useRoute();
    watch(
      () => route.path,
      (newValue: string) => {
        currentIndex.value = newValue === '/' ? 'home' : newValue.slice(1);
      },
      {
        immediate: true,
      }
    );
    return {
      currentIndex,
    };
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../styles/constants.less';
.filter-box {
}
</style>
