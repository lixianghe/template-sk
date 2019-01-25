/** 基于vue的拓展 */
import axios from 'axios';

import _glTools from '@/js/core/utils'; // 全局方法（如时间过滤，lacalStorage，省份城市过滤等）
import _glDirectives from '@/js/core/directives'; // 全局指令
import _glFilters from '@/js/core/filters'; // 全局过滤器

const install = function (Vue) {
  if (install.installed) return;
  install.installed = true;
  // vue上挂载axios
  Vue.prototype.$http = Vue.$http = Vue.prototype.$http || axios;

  // vue挂载全局方法_glTools
  Vue.prototype._glTools = Vue._glTools = Vue.prototype._glTools || _glTools;

  // 全局使用指令
  Vue.use(_glDirectives);

  // 全局使用过滤器
  Vue.use(_glFilters);
};

const core = {
  install
};
export default core;
