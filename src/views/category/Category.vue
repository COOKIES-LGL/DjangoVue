<template>
  <CardPage>
    <template v-slot:content>
      <div class="block">
        <span class="demonstration">Click 指示器触发</span>
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="category-box">
        <div class="category-title"><i class="el-icon-discount"></i>前端</div>
        <el-divider></el-divider>
        <!-- <el-tabs
          v-model="CategoryIndex.activeName"
          type="card"
          @tab-click="CategoryIndex.handleTabClick"
        >
          <el-tab-pane
            v-for="(item, index) in SearchTabList"
            :key="index"
            :label="item.label"
            :name="item.value"
          ></el-tab-pane>
        </el-tabs> -->
      </div>
      <!-- <el-empty description="暂无数据"></el-empty> -->
    </template>
  </CardPage>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, watch } from 'vue';
import CardPage from '@/components/CardPage.vue';
import { useStore } from "vuex";

@Options({
  props: {
    type: String,
  },
  components: {
    CardPage,
  },
})
export default class Category extends Vue {
  private type: string;

  private CategoryIndex = setup(() => {
    const store = useStore();
    store.dispatch('getCategoryList');
    const state = store.state;
    console.log(state,111);
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
  width: 92%;
  margin: 20px auto;
  background: #ffffff;
}
.category-box {
  width: 92%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .category-title {
    font-size: 20px;
    padding-left: 20px;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ffffff;
    border-radius: 15px;
  }
}
</style>
