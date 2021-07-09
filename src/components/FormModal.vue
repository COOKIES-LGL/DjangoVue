<template>
  <el-form class="el-form-box" ref="form" label-width="100px" :model="FormModal.form">
    <div class="group-box">
      <el-form-item  :required="true" label="类目Lv1">
        <el-select v-model="FormModal.form.grandparent_id" placeholder="请选择所属类目">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :required="true" label="类目Lv2">
        <el-select v-model="FormModal.form.parent_id" placeholder="请选择所属类目">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
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
    <el-form-item :required="true"  label="需要翻墙">
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
import { reactive } from 'vue';

@Options({
  props: {
    categoryLv1Id: Number,
    formProps: {},
  },
})
export default class FormModal extends Vue {
  private weChat: string = weChat;
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
      parent_id: 0,
      grandparent_id: 0,
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
    };
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../styles/constants.less';
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
