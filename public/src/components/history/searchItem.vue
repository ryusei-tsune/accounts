<template>
  <div>
    <v-row justify="center">
      <v-col cols="3">
        <v-select
          v-model="searchDate"
          :items="search.date"
          placeholder="期間"
        ></v-select>
      </v-col>
      <v-col cols="3">
        <v-select
          v-model="searchType"
          :items="search.item"
          placeholder="項目"
        ></v-select>
      </v-col>
      <v-col cols="3">
        <v-btn color="cyan lighten-3" @click="Search()">絞り込み</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "serchItem-component",
  components: {},
  props: {
    variety: {
      type: Object,
      required: false,
      default: () => ({ Date: "", Item: "" }),
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      searchDate: "",
      searchType: "",
    };
  },
  computed: {
    search() {
      const result = {
        date: this.variety.Date,
        item: this.variety.Item,
      };
      return result;
    },
  },
  mounted() {},
  methods: {
    async Search() {
      this.$emit("search", this.searchDate, this.searchType, this.type);
    },
  },
};
</script>
