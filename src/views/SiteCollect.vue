<template>
  <CardPage>
    <template v-slot:content>
      <div class="label-mesg-box">
        <div class="label-left-box">
          <h2>导航网址提交</h2>
          <h3>网站收录种类繁多，个人能力有限，固有所纰漏。欢迎补充</h3>
          <h3>
            内容需符合<a
              href="https://baike.baidu.com/item/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8%E6%B3%95/16843044?fromtitle=%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8%E6%B3%95&fromid=12291792&fr=aladdin"
              >《中华人民共和国网络安全法》</a
            >的相关规定，否则我们有权对您发表的内容进行举报。
          </h3>
          <h3>* 本站全人工审核，发广告、填写不规范，无法通过审核，感谢理解！</h3>
          <h3>* 本站拥有最终解释权</h3>
        </div>
        <el-card class="label-right-box">
          <template #header>
            <div class="card-header">
              <span>收录要求</span>
            </div>
          </template>
          <div v-for="o in CollectionRequest" :key="o" class="text-item">
            {{ o }}
          </div>
        </el-card>
      </div>
      <div class="form-box">
        推荐资源
      </div>
    </template>
  </CardPage>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CardPage from '@/components/CardPage.vue';
import { CollectionRequest } from '@/constants';

@Options({
  components: {
    CardPage,
  },
})
export default class SiteCollect extends Vue {
  private CollectionRequest: string[] = CollectionRequest;
}
</script>
<style scoped lang="less">
.label-mesg-box {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  .label-left-box {
    text-align: left;
  }
  .label-right-box {
    margin-top: 20px;
    .text-item {
      text-align: left;
    }
  }
}
.form-box {
}
</style>
