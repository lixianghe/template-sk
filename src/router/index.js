import Vue from 'vue';
import Router from 'vue-router';
import Nprogress from 'nprogress'; // 引入进度条
import 'nprogress/nprogress.css';
import tools from '@/js/core/utils';

import layout from '../views/layout';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    // 登陆页面和404页面
    { path: '/404', component: () => import('@/views/404') },
    { path: '/login', component: () => import('@/views/login') },
    {
      path: '/',
      name: 'dashboard',
      redirect: '/dashboard',
      component: layout,
      hidden: true,
      children: [
        {
          path: 'dashboard',
          meta: { title: 'dashboard', icon: '#icon-siglyphalien' },
          component: () => import('@/views/home/index')
        }
      ]
    },
    {
      path: '/baseCenter',
      name: 'baseCenter',
      redirect: '/home',
      component: layout,
      meta: { title: 'baseCenter', icon: '#icon-maogou' },
      children: [
        {
          path: 'baseInfo',
          meta: { title: 'baseInfo' },
          component: () => import('@/views/baseInfo/index')
        },
        {
          path: 'youDao',
          meta: { title: 'youDao' },
          component: () => import('@/views/youDao/index')
        },
        {
          path: 'jueJin',
          meta: { title: 'jueJin' },
          component: () => import('@/views/jueJin/index.vue')
        }
      ]
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
});

// 实现路由守卫
router.beforeEach((to, from, next) => {
  let path = to.path;
  Nprogress.start();
  // 判断是否有token
  const token = tools.getStore('token', true);
  if (path !== '/login' && !token) {
    next({ path: '/login' });
  } else if (path === '/login') {
    if (token) {
      next({ path: '/' });
      Nprogress.done();
    } else {
      next();
    }
  } else {
    next();
  }
});
router.afterEach(transition => {
  Nprogress.done();
});

export default router;
