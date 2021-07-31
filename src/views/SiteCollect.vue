<template>
  <CardPage :hideSearch="true" :sidebarList="categoryLv1" @changeSelect="SiteCollectIndex.changeCategoryLv1">
    <template v-slot:content>
      <div class="label-mesg-box">
        <div class="label-left-box">
          <h2>导航网址提交</h2>
          <h3>网址、我们只要最好的,欢迎补充。</h3>
          <h3>
            内容需符合<a
              href="https://baike.baidu.com/item/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8%E6%B3%95/16843044?fromtitle=%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8%E6%B3%95&fromid=12291792&fr=aladdin"
              >《中华人民共和国网络安全法》</a
            >的相关规定，否则我们有权对您发表的内容进行举报。
          </h3>
          <h3>* 本站全人工审核，发广告、填写不规范，无法通过审核，感谢理解！</h3>
          <h3>* 一般提交的申请会在三个工作日内完成审核。</h3>
          <h3>* 本站拥有最终解释权。</h3>
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
      <div class="category-title"><i class="el-icon-discount"></i>{{ SiteCollectIndex.currentCategoryLv1 }}</div>
      <div class="form-box">
        <form-modal :categoryLv1Id="SiteCollectIndex.currentCategoryLv1Id"></form-modal>
      </div>
    </template>
  </CardPage>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import CardPage from '@/components/CardPage.vue';
import { watch, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { CollectionRequest } from '@/constants';
import { LinkCategoryItemType } from '@/api';
import { SideBarMenuType } from '@/constants';
import FormModal from '@/components/FormModal.vue';

@Options({
  components: {
    CardPage,
    FormModal,
  },
})
export default class SiteCollect extends Vue {
  private CollectionRequest: string[] = CollectionRequest;
  private categoryLv1: LinkCategoryItemType[] = [];
  private FormatData(linkCategoryList: LinkCategoryItemType[]) {
    this.categoryLv1 = linkCategoryList.filter((item: LinkCategoryItemType) => item.category_level === 1);
  }

  private SiteCollectIndex = setup(async () => {
    const store = useStore();
    const route = useRoute();
    if(route.query) {
      console.log(route.query);
    }
    await store.dispatch('getCategoryList').then((res: LinkCategoryItemType[]) => {
      this.FormatData(res);
    });
    let currentCategoryLv1Id = ref<number>(this.categoryLv1[0].id);
    let currentCategoryLv1 = ref<string>(this.categoryLv1[0].category_name);
    const changeCategoryLv1 = function(newValue: SideBarMenuType) {
      currentCategoryLv1.value = newValue.label;
      currentCategoryLv1Id.value = newValue.id;
    };

    watch(this.$props, (newValue: any) => {
      console.log(newValue);
    });
    
    return {
      changeCategoryLv1,
      currentCategoryLv1,
      currentCategoryLv1Id,
    };
  });
}
</script>
<style scoped lang="less">
@import '../styles/constants.less';
.label-mesg-box {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 20px;
  .label-left-box {
    text-align: left;
  }
  .label-right-box {
    margin-top: 20px;
    .text-item {
      text-align: left;
      line-height: 30px;
    }
  }
}
.category-title {
  font-size: 20px;
  width: 90%;
  height: 50px;
  padding-left: 20px;
  border-bottom: 2px solid @infomation3;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
}
.form-box {
  padding: 30px;
  margin: 20px auto;
  width: 90%;
}
</style>
