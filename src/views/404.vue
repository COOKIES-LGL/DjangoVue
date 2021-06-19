<template>
  <div class="todo-box">
    <img :src="todoImage">
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import todo from '@/assets/todo.png';

@Options({
  components: {
  },
})
export default class NotFound extends Vue {
    private todoImage: string = todo;
}
</script>
<style lang="less" scoped>
.todo-box {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  img {
      width: 160px;
      height: 160px;
  }
}
</style>
