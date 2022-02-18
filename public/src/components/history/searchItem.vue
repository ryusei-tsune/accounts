<template>
  <v-row justify="center">
    <v-col cols="3">
      <v-select
        v-model="searchDate"
        :items="variety.Date"
        placeholder="期間"
      ></v-select>
    </v-col>
    <v-col cols="3">
      <v-select
        v-model="searchType"
        :items="variety.Item"
        placeholder="項目"
      ></v-select>
    </v-col>
    <v-col cols="3">
      <v-btn color="cyan lighten-3" @click="Search()">絞り込み</v-btn>
    </v-col>
  </v-row>
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
  computed: {},
  mounted() {},
  methods: {
    async Search() {
      console.log(this.variety);
      // console.log(this.variety[Date]);
      // console.log(this.variety[Item]);
      console.log(this.variety.Date);
      console.log(this.variety.Item);
      this.$emit("search", this.searchDate, this.searchType, this.type);
    },
  },
};
</script>
