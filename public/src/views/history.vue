<template>
  <div>
    <Tabs>
      <h1>history</h1>
      <v-row>
        <v-col cols="12" md="5" xl="4" class="mx-1">
          <displayItems :itemList="expenseList" :sum="expenseSum">
            <template v-slot:type>
              <v-card-text>支出</v-card-text>
            </template>
            <template v-slot:sum> 支出合計 </template>
          </displayItems>
        </v-col>
      </v-row>
    </Tabs>
  </div>
</template>

<script>
import axios from "axios";
import Tabs from "../components/tabs.vue";
import displayItems from "../components/history/display-items.vue";
export default {
  name: "History",
  components: {
    Tabs,
    displayItems,
  },
  data() {
    return {
      incomeList: [],
      expenseList: [],
      incomeSum: 0,
      expenseSum: 0,
      username: "",
      userId: "",
      type: [],
      expensetype: [],
      incometype: [],
      date: [],
      exdateList: [],
      indateList: [],
      ExsearchType: "",
      ExsearchDate: "",
      InsearchType: "",
      InsearchDate: "",
    };
  },
  mounted() {
    let user;
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const info = cookie.split("=");
      console.log(info);
      if (info[0] == "user") {
        user = JSON.parse(decodeURIComponent(info[1]).substr(2));
      }
    }
    this.$store.commit("userResister", user.name, user._id);
    this.initialize();
  },
  methods: {
    initialize() {
      this.getHistory();
    },
    async getHistory() {
      try {
        console.log(this.$store.state.userId);
        const { data } = await axios.get(
          `/acquisition/${this.$store.state.userId}`
        );
        this.incomeList = [...data.income];
        this.expenseList = [...data.expense];
        console.log(this.incomeList);
        console.log(this.expenseList);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>