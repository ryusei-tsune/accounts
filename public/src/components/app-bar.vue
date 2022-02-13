<template>
  <v-app-bar color="cyan" dark max-height="60px">
    <v-toolbar-title>家計簿アプリ</v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="userAuth">
      <!-- {{ username }} -->
      <v-btn small to="/" class="ml-2" @click="logout()">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    userAuth() {
      return this.$store.state.auth;
    },
    username() {
      return this.$store.state.username;
    },
  },
  methods: {
    logout() {
      this.$store.commit("userAuthentication", false);
    },
  },
};
</script>
