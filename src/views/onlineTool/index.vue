<template>
  <CardPage>
    <template v-slot:content>
      <div class="block">
        <span class="demonstration">每日优选推荐</span>
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <category></category>
      <!-- <el-empty description="暂无数据"></el-empty> -->
    </template>
  </CardPage>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, watch, onBeforeMount } from 'vue';
import CardPage from '@/components/CardPage.vue';
import { useStore } from 'vuex';
import Category from './Category.vue';

@Options({
  props: {
    type: String,
  },
  components: {
    CardPage,
    Category,
  },
})
export default class OnlineTool extends Vue {
  private type: string;
  private DiscoverIndex = setup(async () => {
    const store = useStore();
    onBeforeMount(() => {
      console.log(111111);
    });
    await store.dispatch('getSpecialTypeCategoryList', { category_type: 2 }).then(res => {
      console.log(res);
    });
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
.block {
  width: 100%;
  margin: 20px auto;
  background: #ffffff;
}
</style>
