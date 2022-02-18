<template>
  <div>
    <Tabs>
      <v-row justify="center" class="mt-2">
        <RegisterItem type="expense" @register="registerData">
          <template v-slot:type>
            <v-card-text>支出</v-card-text>
          </template>
          <template v-slot:example>
            例：2022/01/01
            <v-spacer></v-spacer>
            食費
            <v-spacer></v-spacer>
            300
          </template>
        </RegisterItem>
        <RegisterItem type="income" @register="registerData">
          <template v-slot:type>
            <v-card-text>収入</v-card-text>
          </template>
          <template v-slot:example>
            例：2022/01/25
            <v-spacer></v-spacer>
            給料
            <v-spacer></v-spacer>
            {{ num.toLocaleString() }}
          </template>
        </RegisterItem>
      </v-row>
    </Tabs>
  </div>
</template>
<script>
import axios from "axios";
import Tabs from "../components/tabs.vue";
import RegisterItem from "../components/register/registerItem.vue";
export default {
  name: "Register",
  components: {
    Tabs,
    RegisterItem,
  },
  data() {
    return {
      num: 50000,
    };
  },
  mounted() {},
  methods: {
    async registerData(registerData, type) {
      try {
        const { data } = await axios.post(`/api/registering/${type}`, {
          data: registerData,
        });
        console.log(data);
      } catch (err) {
        console.log(err?.message);
      }
    },
  },
};
</script>
