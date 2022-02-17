<template>
  <v-menu
    v-model="isOpen"
    :close-on-content-click="false"
    :nudge-right="40"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="displayDate"
        prepend-icon="mdi-calendar-month"
        dense
        hide-details="auto"
        label="日付"
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" @input="datePick(date)"></v-date-picker>
  </v-menu>
</template>
<script>
export default {
  name: "datePicker-component",
  components: {},
  middleware: [],
  props: {
    index: {
      type: Number,
      required: true,
    },
    displayDate: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      isOpen: false,
      date: null,
    };
  },
  watch: {},
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    datePick(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      this.isOpen = false;
      this.displayDate = `${year}/${month}/${day}`;
      this.$emit("setDate", this.displayDate, this.index);
    },
  },
};
</script>
