import {
  ElIcon,
  ElImage,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElSlider,
  ElSubmenu,
  ElButton,
  ElMessageBox,
  ElLoading,
} from 'element-plus';

// 组件写在components中
export const components: any[] = [
  ElIcon,
  ElImage,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElSlider,
  ElSubmenu,
  ElButton,
];
// 插件写在plugins中
export const plugins: any[] = [ElMessageBox, ElLoading];
