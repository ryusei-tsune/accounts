<template>
  <v-col cols="11" md="5" class="mx-1 px-1">
    <v-card>
      <v-row dense>
        <v-col cols="8">
          <slot name="type"></slot>
        </v-col>
        <v-col cols="3" class="mt-2 text-right">
          <v-btn color="cyan lighten-3" @click="addItem()">
            <v-icon class="mt-1" left>mdi-plus</v-icon>
            追加
          </v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-card-text>
        <v-row justify="center" class="mx-4">
          <slot name="example"></slot>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text v-for="(item, index) in itemList" :key="index" class="px-0">
        <v-row align="center" class="ma-0">
          <v-col cols="4">
            <datePicker
              :index="index"
              :displayDate="item.Date"
              @setDate="SetDate"
            ></datePicker>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="item.Item"
              prepend-icon="mdi-clipboard-text-outline"
              dense
              hide-details="auto"
              label="項目"
              :rules="[required]"
              class="pb-1"
            >
            </v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="item.Price"
              prepend-icon="mdi-cash"
              dense
              hide-details="auto"
              label="金額"
              :rules="[required]"
              class="pb-1"
            >
            </v-text-field>
          </v-col>
          <v-col cols="1" v-if="index > 0">
            <v-btn x-small class="mt-1 mx-auto" @click="deleteItem(index)">
              <v-icon small>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-col cols="12" class="text-center mt-2">
      <v-btn color="cyan" class="mb-2" @click="resisterItem()">
        <v-icon left>mdi-plus-thick</v-icon>
        登録
      </v-btn>
    </v-col>
  </v-col>
</template>
<script>
import axios from "axios";
import datePicker from "./datePicker.vue";
export default {
  name: "resisterItem",
  components: {
    datePicker,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      required: (value) => !!value || "",
      itemList: [{ Date: "", Item: "", Price: "" }],
    };
  },
  mounted() {},
  methods: {
    addItem() {
      this.itemList.push({ Date: "", Item: "", Price: "" });
    },
    deleteItem(index) {
      this.itemList.splice(index, 1);
    },
    async resisterItem() {
      try {
        const resisterData = this.itemList.map((item) => ({
          ...item,
          username: this.$store.state.userId,
        }));
        console.log(resisterData);
        console.log(JSON.stringify(resisterData));
        const { data } = await axios.post(
          `/api/resistering/${this.type}`,
          JSON.stringify(resisterData)
        );
        console.log(data);
        this.itemList = [{ Date: "", Item: "", Price: "" }];
      } catch (err) {
        console.log("test");
      }
    },
    SetDate(date, index) {
      this.itemList[index].Date = date;
    },
  },
};
</script>
