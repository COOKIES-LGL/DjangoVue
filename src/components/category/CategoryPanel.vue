<template>
  <div class="category-index-box">
    <div class="category-title"><i class="el-icon-discount"></i>视频</div>
    <div class="category-card-container">
      <CategoryCard v-for="item in 10" :key="item" />
      <add-card />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, watch } from 'vue';
import CategoryCard from './CategoryCard.vue';
import AddCard from './AddCard.vue';

@Options({
  props: {
    type: String,
  },
  components: {
    CategoryCard,
    AddCard
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
  .category-card-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0px 20px 20px;
    .category-card-box{
      margin-top: 30px;
    }
  }
}
</style>
