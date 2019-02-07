/**
  引入封装的axios,封装请求传参函数
} */

import http from '@/js/libs/http';

export default http;

// 此方法让以参数 / 方式拼接 如：api/truck/111
export const apiFormat = (str, res) => {
  let reg = /\{(\w+?)\}/gi;
  return str.replace(reg, ($0, $1) => {
    return res[$1];
  });
};

// 此方法让参数以 ? 方式拼接 如：api/truck?id=111
export const apiFormat2 = (url, params) => {
  if (params) {
    let propertys = Object.keys(params);
    url = url + '?';
    propertys.forEach((key, index) => {
      if (params[key]) {
        if (index === propertys.length - 1) {
          url = url + key + '=' + params[key];
        } else {
          url = url + key + '=' + params[key] + '&';
        }
      }
    });
  }
  return url;
};