<template>
  <div class="category-card-box" @click="AddCard.toAddModal">
    <div class="category-card-top">
      <div class="icon"><i class="el-icon-link"></i></div>
      <div class="title">点击添加</div>
    </div>
    <div class="desc">
      <i class="el-icon-circle-plus-outline"></i>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

@Options({
  props: {
    linkList: String,
  },
  components: {},
})
export default class AddCard extends Vue {
  private linkList: string;
  private AddCard = setup(() => {
    watch(this.$props, (newValue: any) => {
      console.log(newValue);
    });
    const router = useRouter();
    const toAddModal = () => {
      router.push({
        path: '/siteCollect',
        query: {
          lv1: 1,
          lv2: 2
        }
      })
    };
    return {
      toAddModal,
    };
  });
}
</script>
<style scoped lang="less">
@import '~@/styles/constants.less';
.category-card-box {
  width: 240px;
  height: 90px;
  display: flex;
  flex-direction: column;
  background-origin: padding-box;
  border-radius: 10px;
  background: #ffffff;
  border: 2px solid @tab-background;
  cursor: pointer;
  // box-shadow: -4px -4px 8px #eaedf6, 4px 4px 8px #d6d8e0;
  .category-card-top {
    margin: 5px 10px;
    border-bottom: 2px solid @cell-background;
    position: relative;
    .icon {
      position: absolute;
      background: #ffffff;
      top: -30px;
      left: 0px;
      width: 45px;
      height: 45px;
      line-height: 45px;
      border-radius: 50%;
      font-size: 30px;
      border: 1px solid @tab-background;
    }
  }
  .desc {
    padding: 0px 10px 10px 10px;
    font-size: 36px;
    color: @infomation3;
  }
}
</style>
