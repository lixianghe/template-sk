export const isExternal = (path) => {
  return /^(https?:|mailto:|tel:)/.test(path);
};

/**
 * 存储localStorage/sessionStorage
 */
const setStore = (name, content, deep) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  if (deep) {
    window.localStorage.setItem(name, content);
  } else {
    window.sessionStorage.setItem(name, content);
  }
};

/**
 * 获取localStorage/sessionStorage
 */
const getStore = (name, deep) => {
  if (!name) return;
  if (deep) {
    return window.localStorage.getItem(name);
  } else {
    return window.sessionStorage.getItem(name);
  }
};

/**
 * 删除localStorage/sessionStorage
 */
const removeStore = (name, deep) => {
  if (!name) return;
  if (deep) {
    window.localStorage.removeItem(name);
  } else {
    window.sessionStorage.removeItem(name);
  }
};

// i18n语言切换;
export const translation = function (message) {
  return this.$t('route.' + message);
};

export default {
  setStore,
  getStore,
  removeStore
};