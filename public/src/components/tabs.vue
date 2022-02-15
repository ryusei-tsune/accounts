<template>
  <div>
    <v-container>
      <v-tabs v-model="tab" centered>
        <v-tabs-slider color="indigo"></v-tabs-slider>
        <v-tab to="/history">履歴</v-tab>
        <v-tab to="/register">入出金登録</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <slot></slot>
      </v-tabs-items>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "tabs-component",
  components: {},
  data() {
    return {
      tab: "",
    };
  },
  mounted() {},
  methods: {},
};
</script>
