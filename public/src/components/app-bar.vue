<template>
  <v-app-bar style="background: cyan">
    <v-toolbar-title>家計簿アプリ</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn small class="ml-2">in</v-btn>
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
