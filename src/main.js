import Vue from 'vue';
import '@/icon/iconfont.js';
import '@/styles/index.less'; // global css

import App from './App.vue';
import router from './router';
import store from './store';
import core from '@/js/core'; // 封装的全局方法、指令、过滤器等
import i18n from './lang';
import iconModul from '@/components/icon/icon';

Vue.config.productionTip = false;

console.log(process.env);

// 将icon注册为全局组件
Vue.use(iconModul);

// 将工具类js注册为全局方法
Vue.use(core);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
