<template>
  <div>
    <v-tabs v-model="tab" align-with-title>
      <v-tabs-slider color="yellow"></v-tabs-slider>

      <v-tab to="/resister">入出金登録</v-tab>
      <v-tab to="/history">履歴</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <slot></slot>
    </v-tabs-items>
  </div>
</template>