<template>
  <div class="category-box">
    <filter></filter>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { ref, watch } from 'vue';
import Filter from '@/components/Filter.vue';
import { useStore } from 'vuex';
import { LinkCategoryItemType } from '@/api'; 

interface LinkCategoryObjectType {
  [key:string]: LinkCategoryItemType[];
}

@Options({
  props: {
    type: String,
  },
  components: {
    Filter,
  },
})
export default class Category extends Vue {
  private type: string;
  private LinkCategoryObject: LinkCategoryObjectType[] = [];
  private FormatData(linkCategoryList: LinkCategoryItemType[]) {
    // for ()
    // linkCategoryList.filter((item: LinkCategoryItemType)=>{
    //   if (item.category_level)

    // })
    console.log(linkCategoryList);
  }
  private CategoryIndex = setup(() => {
    const store = useStore();
    const state = store.state;
    this.FormatData(state.allLinkCategory);
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
.category-box {
  width: 92%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
