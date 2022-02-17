<template>
  <div>
    <Tabs>
      <v-row justify="center" class="mt-2">
        <v-col cols="12" md="5" xl="4" class="mx-1">
          <Search
            :variety="expenseType"
            type="expense"
            @search="searchItem"
          ></Search>
          <DisplayItems
            :itemList="expenseList"
            :sum="expenseSum"
            type="expense"
            @delete="deleteItem"
          >
            <template v-slot:type>
              <v-card-text>支出</v-card-text>
            </template>
            <template v-slot:sum> 支出合計 </template>
          </DisplayItems>
        </v-col>
        <v-col cols="12" md="5" xl="4" class="mx-1">
          <Search
            :variety="incomeType"
            type="income"
            @search="searchItem"
          ></Search>
          <DisplayItems
            :itemList="incomeList"
            :sum="incomeSum"
            type="income"
            @delete="deleteItem"
          >
            <template v-slot:type>
              <v-card-text>収入</v-card-text>
            </template>
            <template v-slot:sum> 収入合計 </template>
          </DisplayItems>
        </v-col>
      </v-row>
      <v-row text-align="right">
        <v-col cols="4" md="8"></v-col>
        <v-col cols="4" md="2">
          <h2>差引金額</h2>
        </v-col>
        <v-col cols="4" md="2">
          <v-row class="ma-0">
            <v-icon color="black">mdi-currency-cny</v-icon>
            <h2>{{ (incomeSum - expenseSum).toLocaleString() }}</h2>
          </v-row>
        </v-col>
      </v-row>
    </Tabs>
  </div>
</template>

<script>
import axios from "axios";
import Tabs from "../components/tabs.vue";
import DisplayItems from "../components/history/display-items.vue";
import Search from "../components/history/searchItem.vue";
export default {
  name: "History",
  components: {
    Tabs,
    DisplayItems,
    Search,
  },
  data() {
    return {
      incomeList: [],
      incomeType: {},
      expenseList: [],
      expenseType: {},
      incomeSum: 0,
      expenseSum: 0,
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
    console.log(user);
    console.log(user.name, String(user._id));
    this.$store.commit("userRegister", { name: user.name, id: user._id });
    console.log(this.$store.state.userId, this.$store.state.username);
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
          `/api/acquisition/${this.$store.state.userId}`
        );

        //データの取得
        this.incomeList = [...data.income];
        this.expenseList = [...data.expense];
        console.log(this.incomeList);
        console.log(this.expenseList);

        //支出データの各項目(日付，項目)の種類を把握
        let _keys = this.expenseList
          .map((row) => Object.keys(row))
          .reduce((value1, value2) => value1.concat(value2));
        let keys = Array.from(new Set(_keys));
        keys.forEach((k) => {
          this.expenseType[k] = this.expenseList
            .map((row) => row[k])
            .filter((item) => !!item);
        });

        //収入データの各項目(日付，項目)の種類を把握
        _keys = this.incomeList
          .map((row) => Object.keys(row))
          .reduce((value1, value2) => value1.concat(value2));
        keys = Array.from(new Set(_keys));
        keys.forEach((k) => {
          this.incomeType[k] = this.incomeList
            .map((row) => row[k])
            .filter((item) => !!item);
        });
      } catch (err) {
        console.log(err?.message);
      }
    },
    async deleteItem(id, type) {
      try {
        await axios.delete(`/api/item/${type}`, { data: id });
      } catch (err) {
        console.log(err?.message);
      }
    },
    async searchItem(date, searchType, type) {
      try {
        const url = `/api/searching/${this.$store.state.userId}/${type}?date=${date}&kind=${searchType}`;
        const { data } = await axios.get(url);
        if (type === "expense") {
          this.expenseList.splice(0, this.expenseList.length, data);
        } else {
          this.incomeList.splice(0, this.incomeList.length, data);
        }
      } catch (err) {
        console.log(err?.message);
      }
    },
  },
};
</script>
