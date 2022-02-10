import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: false,
    username: "",
  },
  mutations: {
    userAuthentication(state, payload) {
      state.auth = payload;
      if (!state.auth) {
        state.username = "";
      }
    },
  },
  actions: {},
  modules: {},
});
