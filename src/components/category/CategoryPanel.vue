<template>
  <div class="category-index-box">
    <div class="category-title"><i class="el-icon-discount"></i>视频</div>
    <CategoryCard />
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, watch } from 'vue';
import CategoryCard from './CategoryCard.vue';

@Options({
  props: {
    type: String,
  },
  components: {
    CategoryCard,
  },
})
export default class CategoryPanel extends Vue {
  private type: string;

  private CategoryPanel = setup(() => {
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
@import '../../styles/constants.less';
.category-index-box {
  width: 96%;
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
