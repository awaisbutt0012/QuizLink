<template>
  <v-container fill-height fluid id="container-bg">
    <v-row align="center" justify="center">
      <v-col cols="2" md="2" sm="2" xl="3"> </v-col>

      <v-col cols="8" md="8" xl="6" sm="8" ma="5">
        <v-card flat height="450px" color="white" class="d-flex justify-center">
          <v-row>
            <v-col
              cols="10"
              md="6"
              xl="6"
              sm="10"
              offset-sm="1"
              offset-md="0"
              class="d-flex justify-center align-center"
            >
              <v-form @submit.prevent="postData" method="post">
                <h2 class="d-flex justify-center heading-2" color="login--text">
                  Sign In
                </h2>
                <br /><br />
                <v-text-field
                  v-model="form.email"
                  dense
                  label="Email"
                  type="email"
                  outlined
                  append-icon="mdi-email login--text"
                  class="mx-5"
                  color="login"
                ></v-text-field>

                <v-text-field
                  v-model="form.password"
                  dense
                  label="Password"
                  type="password"
                  outlined
                  append-icon="mdi-lock login--text"
                  class="mx-5"
                  color="login"
                ></v-text-field>

                <p class="float-right mx-5" color="login--text">
                  <a class="login--text">Forget Password?</a>
                </p>
                <br />

                <v-card-actions class="justify-center" style="width:100%">
                  <v-btn type="submit" class="login white--text mx-auto" color="#394448">Sign In</v-btn>
                </v-card-actions>

                <br />

                <h6
                  id="h5-text"
                  class="d-flex justify-center"
                  color="login--text"
                >
                  Haven't Account?
                  <b
                    ><a class="login--text subtitle-2">
                      &nbsp;Register Now</a
                    ></b
                  >
                </h6>
              </v-form>
            </v-col>

            <v-col
              md="6"
              xl="6"
              class="hidden-sm-and-down d-flex justify-center align-center"
              id="card-bg"
            >
              <v-row>
                <v-col cols="2" md="2" lg="2"></v-col>
                <v-col cols="8" md="8" lg="8" class="hidden-sm-and-down">
                  <v-card height="330px" color="white" id="card-right">
                    <br />
                    <v-img
                      id="img-logo"
                      src="../assets/webLogo.png"
                      height="70px"
                      width="70px"
                    ></v-img>

                    <p class="align-center login--text" id="text-p">
                      Job <b>POST</b> <br />
                      Online
                    </p>

                    <p id="text-p">
                      Job Post <br />Management System <br />for post job on
                      Social <br />Media Platfrom
                    </p>

                    <v-card-actions class="justify-center">
                      <v-icon>mdi-google</v-icon>
                      <v-icon>mdi-facebook</v-icon>
                      <v-icon>mdi-linkedin</v-icon>
                      <v-icon>mdi-twitter</v-icon>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-col cols="2" md="2" lg="2"></v-col>
              </v-row>
            </v-col>

          </v-row>
        </v-card>
      </v-col>
      <v-col cols="2" md="2" sm="2" xl="3"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "home",
  props: {
    msg: {
      type: String,
      // default: "Enter correct email and password!"
    },
  },
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    postData() {
      this.$http
        .post("http://34.135.254.16/backend/api/admin/login", this.form)
        .then((result) => {
          localStorage.setItem("loggedUser", JSON.stringify(this.form));
          alert("Hello" + result);
          this.$router.push({ name: "dashboard" });
          console.log("result", result);
        })
        .catch((err) => {
          alert("Error: " + err);
          this.msg = "Incorrect email or password!";
          console.log("err", err);
        });
    },
  },
};
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #394448;
  color: #394448;
}

.v-btn {
  width: 90px;
}

#container-bg {
  background-color: #f4f8fb;
}

#card-bg {
  background: url("../assets/slideBar4.png") no-repeat right;
}

#text-p {
  font-size: 12px;
  text-align: center;
}

#img-logo {
  display: block;
  margin: 0 auto;
}

#h5-text {
  font-weight: normal;
}

#card-right {
  margin-left: 20px;
}

.v-icon {
  margin-left: 5px;
}
</style>
