<template>
  <div>
    <v-row justify="center" class="ma-0">
      <v-col cols="11" md="5" lg="4">
        <v-card class="mt-10 mx-auto outlined" color="cyan lighten-5">
          <div class="pb-4">
            <h1>新規アカウント作成</h1>
          </div>
          <div id="error"></div>
          <v-form ref="form" class="mx-2">
            <v-text-field
              v-model="username"
              prepend-icon="mdi-account-circle"
              label="ユーザ名"
              outlined
              class="mt-3"
              :rules="[required]"
            ></v-text-field>
            <v-text-field
              v-model="password"
              prepend-icon="mdi-lock"
              type="password"
              label="パスワード"
              outlined
              :rules="[required]"
            ></v-text-field>
          </v-form>
          <v-row>
            <v-col cols="12" sm="12" md="7">
              <v-card-text>
                アカウントをお持ちの方は<router-link to="/"
                  >こちらへ</router-link
                >
              </v-card-text>
            </v-col>
            <v-col cols="12" sm="12" md="5" class="px-0">
              <v-card-text>
                <v-btn color="cyan lighten-2" @click="createAccount()">
                  <v-icon left small>mdi-account-multiple-plus</v-icon>
                  アカウント作成
                </v-btn>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Sign-up",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      required: (value) => !!value || "必ず入力してください",
    };
  },
  mounted() {
    this.$refs.form.resetValidation();
  },
  methods: {
    async createAccount() {
      if (this.$refs.form.validate()) {
        try {
          const userData = { username: this.username, password: this.password };
          const { data } = await axios.post(`/api/users/user`, userData);

          if (data.existing) {
            let wrong = document.getElementById("wrong");
            if (!wrong.hasChildNodes()) {
              const addtext = document.createElement("h5");
              addtext.innerText = "すでにユーザ名が使用されています";
              wrong.appendChild(addtext);
              wrong.setAttribute("style", "color:red;");
            }
          } else {
            this.$router.push("/");
          }
        } catch (err) {
          console.log(err?.message);
        }
      }
    },
  },
};
</script>
