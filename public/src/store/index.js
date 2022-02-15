import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: false,
    username: "",
    userId: "",
  },
  mutations: {
    userAuthentication(state, payload) {
      state.auth = payload;
      if (!state.auth) {
        state.username = "";
        state.userId = "";
      }
    },
    userResister(state, name, id) {
      state.username = name;
      state.userId = id;
    },
  },
  actions: {},
  modules: {},
});
