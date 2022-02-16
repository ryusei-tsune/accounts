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
    userRegister(state, payload) {
      console.log(payload.name, payload.id);
      state.username = payload.name;
      state.userId = payload.id;
    },
  },
  actions: {},
  modules: {},
});
