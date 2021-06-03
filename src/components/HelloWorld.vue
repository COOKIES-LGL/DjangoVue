<template>
  <div class="hello">
    <h1>{{ msg }} {{ HelloWorld.refs }} {{ $isMobile }} {{$filter.formatNumber(100000)}}</h1>
    <h3 @click="HelloWorld.open">Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
          target="_blank"
          rel="noopener"
          >router</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
          target="_blank"
          rel="noopener"
          >vuex</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, onMounted, getCurrentInstance } from 'vue';
import { ElMessage } from 'element-plus';

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  private msg!: string;

  private HelloWorld = setup(() => {
    const refs = ref('first!!!!');
    const { proxy }: any = getCurrentInstance() // 获取全局属性方法
    console.log(proxy.$isMobile);
    onMounted(() => {
      // proxy.$messageBox({
      //   type: 'success',
      //   message: '删除成功!',
      // });
    });
    return {
      refs,
      open() {
        ElMessage('只是一条消息提示');
      },
    };
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
