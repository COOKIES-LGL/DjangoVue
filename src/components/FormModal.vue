<template>
  <div class="modal-form-box">
    <el-form label-position="left" class="el-form-box" ref="form" :model="FormModal.form">
      <el-form-item label="Category Lv1">
        <el-select v-model="FormModal.form.grandparent_id" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Category Lv2">
        <el-select v-model="FormModal.form.parent_id" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="网址链接">
        <el-input v-model="FormModal.form.link"></el-input>
      </el-form-item>
      <el-form-item label="网址名称">
        <el-input v-model="FormModal.form.title"></el-input>
      </el-form-item>
      <el-form-item label="网址描述">
        <el-input type="textarea" v-model="FormModal.form.desc"></el-input>
      </el-form-item>
      <el-form-item label="Need VPN">
        <el-switch v-model="FormModal.form.need_vpn"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="FormModal.onSubmit">立即创建</el-button>
        <el-button @click="FormModal.resetClick">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import weChat from '@/assets/Wechat.jpeg';
import { reactive } from 'vue';

@Options({
  props: {
    categoryLv1Id: String,
    formProps: {},
  },
})
export default class FormModal extends Vue {
  private weChat: string = weChat;
  private rules: {
    name: [
      { required: true; message: '请输入活动名称'; trigger: 'blur' },
      { min: 3; max: 5; message: '长度在 3 到 5 个字符'; trigger: 'blur' }
    ];
    region: [{ required: true; message: '请选择活动区域'; trigger: 'change' }];
    date1: [{ type: 'date'; required: true; message: '请选择日期'; trigger: 'change' }];
    date2: [{ type: 'date'; required: true; message: '请选择时间'; trigger: 'change' }];
    type: [{ type: 'array'; required: true; message: '请至少选择一个活动性质'; trigger: 'change' }];
    resource: [{ required: true; message: '请选择活动资源'; trigger: 'change' }];
    desc: [{ required: true; message: '请填写活动形式'; trigger: 'blur' }];
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
.modal-form-box {
}
</style>
