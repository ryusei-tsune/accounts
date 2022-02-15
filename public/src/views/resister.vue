<template>
  <div>
    <Tabs>
      <v-row justify="center" class="mt-2">
        <resisterItem type="expense">
          <template v-slot:type>
            <v-card-text>支出</v-card-text>
          </template>
          <template v-slot:example>
            例：
            <v-spacer></v-spacer>
            2022/01/01
            <v-spacer></v-spacer>
            食費
            <v-spacer></v-spacer>
            300
          </template>
        </resisterItem>
        <resisterItem type="income">
          <template v-slot:type>
            <v-card-text>収入</v-card-text>
          </template>
          <template v-slot:example>
            例：
            <v-spacer></v-spacer>
            2022/01/25
            <v-spacer></v-spacer>
            給料
            <v-spacer></v-spacer>
            {{ num.toLocaleString() }}
          </template>
        </resisterItem>
      </v-row>
    </Tabs>
  </div>
</template>
<script>
import Tabs from "../components/tabs.vue";
import resisterItem from "../components/resister/resisterItem.vue";
export default {
  name: "Resiter",
  components: {
    Tabs,
    resisterItem,
  },
  data() {
    return {
      num: 50000,
    };
  },
  mounted() {},
  methods: {},
};
</script>
