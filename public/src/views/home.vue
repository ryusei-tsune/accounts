<template>
  <div>
    <v-row justify="center" class="ma-0">
      <v-col cols="11" md="5" lg="4">
        <v-card class="mt-10 mx-auto outlined" color="cyan lighten-5">
          <div class="pb-4">
            <h1>ログイン</h1>
          </div>
          <div id="wrong"></div>
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
                アカウントをお持ちでない方は<router-link to="/sign-up"
                  >こちらへ</router-link
                >
                <router-view />
              </v-card-text>
            </v-col>
            <v-col cols="12" sm="12" md="5">
              <v-card-text>
                <v-btn color="cyan lighten-2" @click="login()">
                  <v-icon left small>mdi-login</v-icon>
                  ログイン
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
  name: "Home",
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
    async login() {
      if (this.$refs.form.validate()) {
        try {
          const pass = { password: this.password };
          const { data } = await axios.post(
            `/api/users/${this.username}`,
            pass
          );
          console.log(data);

          if (data.existing) {
            this.$router.push("/resister");
            console.log("成功");
          } else {
            let wrong = document.getElementById("wrong");
            if (!wrong.hasChildNodes()) {
              const addtext = document.createElement("h5");
              addtext.innerText = "ユーザ名またはパスワードが違います";
              wrong.appendChild(addtext);
              wrong.setAttribute("style", "color:red;");
            }
          }
        } catch (err) {
          console.log("test");
        }
      }
    },
  },
};
</script>
