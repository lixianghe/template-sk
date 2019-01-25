import Cookies from 'js-cookie';

const app = {
  state: {
    sliderbar: {
      opened: true
    },
    lang: 'zh'
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sliderbar.opened = !state.sliderbar.opened;
    },
    CLOSE_SIDEBAR: (state) => {
      state.sliderbar.opened = false;
    },
    TOGGLE_LANG: state => {
      state.lang = state.lang === 'zh' ? 'en' : 'zh';
      Cookies.set('lang', state.lang);
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR');
    },
    CloseSideBar ({ commit }) {
      commit('CLOSE_SIDEBAR');
    },
    ToggleLang: ({ commit }) => {
      commit('TOGGLE_LANG');
    }
  }
};

export default app;