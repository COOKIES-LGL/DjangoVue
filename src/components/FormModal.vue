<template>
  <div class="filter-box">
    <el-select
      @change="FormModal.handleTab1Change"
      class="el-select-div"
      v-model="FormModal.form.filterLv"
      placeholder="请选择所属类目"
    >
      <el-option
        :key="item.id"
        :label="item.category_name"
        :value="item.id"
        v-for="item in FormModal.category.categoryLv1"
      ></el-option>
    </el-select>
  </div>
  <el-form class="el-form-box" ref="form" label-width="100px" :model="FormModal.form">
    <div class="group-box">
      <el-form-item :required="true" label="类目Lv2">
        <el-select
          @change="FormModal.handleTab2Change"
          v-model="FormModal.form.grandparent_id"
          placeholder="请选择所属类目"
        >
          <el-option
            :key="item.id"
            :label="item.category_name"
            :value="item.id"
            v-for="item in FormModal.category.categoryLv2"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :required="true" label="类目Lv3">
        <el-select @change="FormModal.handleTab3Change" v-model="FormModal.form.parent_id" placeholder="请选择所属类目">
          <el-option
            :key="item.id"
            :label="item.category_name"
            :value="item.id"
            v-for="item in FormModal.category.categoryLv3"
          ></el-option>
        </el-select>
      </el-form-item>
    </div>
    <el-form-item :required="true" label="网址链接">
      <el-input placeholder="请输入完整网址" v-model="FormModal.form.link"></el-input>
    </el-form-item>
    <el-form-item :required="true" label="网址名称">
      <el-input placeholder="请输入网址官方名称" v-model="FormModal.form.title"></el-input>
    </el-form-item>
    <el-form-item :required="true" label="网址描述">
      <el-input placeholder="清晰的描述,才能获得更多的关注" type="textarea" v-model="FormModal.form.desc"></el-input>
    </el-form-item>
    <el-form-item :required="true" label="需要翻墙">
      <el-switch :width="60" v-model="FormModal.form.need_vpn"></el-switch>
      <div class="group-submit">
        <el-button type="primary" @click="FormModal.onSubmit">立即创建</el-button>
        <el-button @click="FormModal.resetClick">取消</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import weChat from '@/assets/Wechat.jpeg';
import { reactive, onMounted } from 'vue';
import { LinkCategoryItemType } from '@/api';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

interface CategoryLv2Array {
  categoryLv1?: LinkCategoryItemType[];
  categoryLv2?: LinkCategoryItemType[];
  categoryLv3?: LinkCategoryItemType[];
}

@Options({
  props: {
    currentCategoryLv1Id: Number,
    formProps: {},
  },
})
export default class FormModal extends Vue {
  private weChat: string = weChat;
  private currentCategoryLv1Id = 1;
  private rules: {
    title: [
      { required: true; message: '请输入链接名称'; trigger: 'blur' },
      { min: 1; max: 64; message: '长度在 1 到 64 个字符'; trigger: 'blur' }
    ];
    link: [
      { required: true; message: '请输入链接地址'; trigger: 'blur' },
      { min: 6; max: 200; message: '请输入有效的链接地址'; trigger: 'blur' }
    ];
    need_vpn: [{ required: true; message: '请选择是否需要翻墙访问'; trigger: 'change' }];
    parent_id: [{ required: true; message: '请选择类目Lv1'; trigger: 'change' }];
    grandparent_id: [{ required: true; message: '请选择类目Lv2'; trigger: 'change' }];
    desc: [{ required: true; message: '请填写链接描述'; trigger: 'blur' }];
  };

  private FormModal = setup(() => {
    let form = reactive({
      title: '',
      link: '',
      desc: '',
      need_vpn: false,
      parent_id: null,
      grandparent_id: null,
    });
    let category: CategoryLv2Array = reactive({
      categoryLv1: [],
      categoryLv2: [],
      categoryLv3: [],
    });
    const filterObject = reactive({
      category_lv1: '1',
      category_lv2: '1',
      category_lv3: '1',
    });
    const route = useRoute();
    const store = useStore();
    const state = store.state;
    const allLinkCategory = state.allLinkCategory;

    const formatData = (currentCategoryLv1Id: number) => {
      category.categoryLv1 = allLinkCategory.filter(
        (item: LinkCategoryItemType) => item.category_parent == currentCategoryLv1Id
      );
      if (category.categoryLv1.length <= 0) return;
      filterObject.category_lv1 = category.categoryLv1[0].id.toString();
      if (category.categoryLv1 && category.categoryLv1.length > 0) {
        category.categoryLv2 = allLinkCategory.filter(
          (item: LinkCategoryItemType) => item.category_parent == category.categoryLv1[0].id
        );
        if (category.categoryLv2.length <= 0) return;
        filterObject.category_lv2 = category.categoryLv2[0] && category.categoryLv2[0].id.toString();
      }
      if (category.categoryLv2 && category.categoryLv2.length > 0) {
        category.categoryLv3 = allLinkCategory.filter(
          (item: LinkCategoryItemType) => item.category_parent == category.categoryLv2[0].id
        );
        if (category.categoryLv3.length <= 0) return;
        filterObject.category_lv3 = category.categoryLv3[0] && category.categoryLv3[0].id.toString();
      }
    };

    const handleTab1Change = (item: any) => {
      const currentTab1Id = item;
      filterObject.category_lv1 = currentTab1Id;
      category.categoryLv2 = allLinkCategory.filter((item: LinkCategoryItemType) => {
        return item.category_parent == Number(currentTab1Id);
      });
      if (category.categoryLv2 && category.categoryLv2.length > 0) {
        filterObject.category_lv2 = category.categoryLv2[0].id.toString();
        category.categoryLv3 = allLinkCategory.filter(
          (item: LinkCategoryItemType) => item.category_parent == category.categoryLv2[0].id
        );
        if (category.categoryLv3 && category.categoryLv3.length > 0) {
          filterObject.category_lv3 = category.categoryLv3[0].id.toString();
        }
      }
      // console.log(category_lv2.categoryLv2);
    };

    const handleTab2Change = (item: any) => {
      const currentTab2Id = item;
      filterObject.category_lv2 = currentTab2Id;
      category.categoryLv3 = allLinkCategory.filter((item: LinkCategoryItemType) => {
        return item.category_parent == Number(currentTab2Id);
      });
      if (category.categoryLv3 && category.categoryLv3.length > 0) {
        filterObject.category_lv3 = category.categoryLv3[0].id.toString();
      }
      // console.log(category_lv3.categoryLv3);
    };

    const handleTab3Change = (item: any) => {
      const currentTab3Id = item;
      filterObject.category_lv3 = currentTab3Id;
    };

    onMounted(() => {
      const queryObject = route.query;
      formatData(this.currentCategoryLv1Id);
      if (queryObject.lv1 && queryObject.lv2) {
        // handleTab1Click(queryObject.lv1);
        // handleTab2Click(queryObject.lv2);
        // handleTab3Click(queryObject.lv3);
      }
    });
    const onSubmit = function() {
      console.log(form, '提交表单');
    };
    const resetClick = function() {
      form = {
        title: '',
        link: '',
        desc: '',
        need_vpn: false,
        parent_id: 0,
        grandparent_id: 0,
      };
    };
    return {
      onSubmit,
      resetClick,
      form,
      category,
      handleTab1Change,
      handleTab2Change,
      handleTab3Change,
    };
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../styles/constants.less';
.filter-box {
  width: 55%;
  float: left;
  margin-bottom: 20px;
  span {
    font-size: 16px;
    font-weight: bold;
  }
  .el-select-div {
    width: 40%;
  }
}
.el-form-box {
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .group-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 900px;
  }
  /deep/ .el-form-item__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .group-submit {
      width: 800px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    .el-select {
      width: 350px;
    }
  }
  /deep/ .el-form-item__label {
    font-size: 16px;
    font-weight: bold;
  }
  /deep/ .el-form-item {
    width: 900px;
  }
  /deep/ .el-input__inner {
    background: @cell-background;
  }
  /deep/ .el-textarea__inner {
    height: 80px;
    background: @cell-background;
  }
}
</style>
