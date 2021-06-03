import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { lineClampParams } from './directives';
import './styles/reset.less';
import 'element-plus/lib/theme-chalk/index.css';
import { components, plugins } from '@/support';
import { isMobile, formatNumber, formatDate} from '@/utils';

export const VueApp = createApp(App);

// 按需导入Element Plus组件和插件
components.forEach((component) => {
  VueApp.component(component.name, component);
});
plugins.forEach((plugin) => {
  VueApp.use(plugin);
});

VueApp.config.globalProperties.$isMobile = isMobile(); // 定义全局属性 const { proxy }: any = getCurrentInstance() 获取全局属性方法
VueApp.config.globalProperties.$filter = {
  formatNumber,
  formatDate,
}; // 定于全局方法代替全局过滤器

VueApp.directive('lineClamp', lineClampParams);
//  定义全局指令
VueApp.use(store)
  .use(router)
  .mount('#app');
