import {
  ElIcon,
  ElImage,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSlider,
  ElSubmenu,
  ElButton,
  ElMessageBox,
  ElLoading,
  ElBacktop,
  ElTabs,
  ElTabPane,
  ElDivider,
} from 'element-plus';

// 组件写在components中
export const components: any[] = [
  ElIcon,
  ElImage,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSlider,
  ElSubmenu,
  ElButton,
  ElBacktop,
  ElTabs,
  ElTabPane,
  ElDivider
];
// 插件写在plugins中
export const plugins: any[] = [ElMessageBox, ElLoading];
