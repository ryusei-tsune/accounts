<template>
  <v-card outlined>
    <v-row dense>
      <v-col cols="4">
        <slot name="type"></slot>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <div v-if="itemList.length == 0">
          <v-card-text> データがありません </v-card-text>
        </div>
        <div v-for="(item, index) in itemList" :key="item">
          <v-row>
            <v-col cols="4">
              {{ item.Date }}
            </v-col>
            <v-col cols="3">
              {{ item.Item }}
            </v-col>
            <v-col cols="3">
              {{ item.Price.toLocaleString() }}
            </v-col>
            <v-col cols="1" align="center">
              <v-btn x-small class="my-1" @click="deleteItem(index)">
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="4"></v-col>
      <v-col cols="3">
        <slot name="sum"></slot>
      </v-col>
      <v-col cols="5" class="pl-4">{{ sum.toLocaleString() }}</v-col>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "display-items",
  components: {},
  props: {
    itemList: {
      type: Array,
      required: false,
      default: () => [],
    },
    sum: {
      type: Number,
      required: false,
      default: 0,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    async deleteItem(index) {
      try {
        console.log(this.itemList[index]._id);
        const id = { id: this.itemList[index]._id };
        console.log(id);
        const { data } = axios.delete(`/api/item/${this.type}`, id);
        console.log(data);
      } catch (err) {
        console.log(err?.message);
      }
    },
  },
};
</script>
