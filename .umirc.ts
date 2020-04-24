import { defineConfig } from 'umi';

export default defineConfig({
  layout: {
    locale: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/login',
      component: '@/pages/login',
      layout: {
        hideMenu: true,
        hideNav: true,
      }
    },
    {
      path: '/',
      component: '@/pages/home',
      menu: {
        name: '首页', // 兼容此写法
      },
      icon: 'home',
    },
  ],
});
