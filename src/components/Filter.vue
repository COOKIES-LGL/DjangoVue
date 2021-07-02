<template>
  <div class="filter-box">

  </div>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { watch, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

@Options({
  props: {
    msg: String,
  },
})
export default class Filter extends Vue {
  private HeaderBar = setup(() => {
    const filterObject = reactive({
      category_lv1: '11'
    });
    const store = useStore();
    const state = store.state;
    console.log(state, 111);
    const route = useRoute();
    watch(
      () => route.path,
      (newValue: string) => {
        filterObject.category_lv1 = newValue === '/' ? 'home' : newValue.slice(1);
      },
      {
        immediate: true,
      }
    );
    return {
      filterObject,
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
