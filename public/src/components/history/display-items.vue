<template>
  <v-card>
    <v-row dense>
      <v-col cols="8">
        <slot name="type"></slot>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-card outlined>
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
        </v-card>
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
// @ is an alias to /src
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
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
