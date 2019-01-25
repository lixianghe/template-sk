import Vue from 'vue';
import Echarts from 'echarts';
import '@/icon/iconfont.js';
import '@/styles/index.less'; // global css

import App from './App.vue';
import router from './router';
import store from './store';
import core from '@/js/core'; // 封装的全局方法、指令、过滤器等
import i18n from './lang';
import './plugins/element.js';

Vue.config.productionTip = false;

Vue.prototype.$echarts = Echarts;

Vue.use(core);

new Vue({
  router,
  store,
  i18n,
  Echarts,
  render: h => h(App)
}).$mount('#app');
