<template>
  <div class="index-content-box">
    <div class="block">
      <el-carousel type="card" inteval="6000" trigger="click" height="180px">
        <el-carousel-item>
          <img src="~@/assets/card1.png" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="~@/assets/card2.png" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="~@/assets/card3.png" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="~@/assets/card4.png" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="~@/assets/card5.png" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <SearchIndex></SearchIndex>
  </div>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import SearchIndex from '@/components/search/SearchIndex.vue';
import CategoryPanel from '@/components/category/CategoryPanel.vue';

@Options({
  components: {
    SearchIndex,
    CategoryPanel,
  },
})
export default class Index extends Vue {
  private IndexPage = setup(async () => {
    const filterChange = (value: any) => {
      console.log(value);
    };
    return {
      filterChange,
    };
  });
}
</script>
<style scoped lang="less">
.index-content-box {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .block {
    width: 40%;
    margin: 120px auto 20px;
    .carousel-inner-box {
      background: #eee;
      height: 100%;
      /deep/ .el-carousel-item {
        padding: 5px;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
</style>
