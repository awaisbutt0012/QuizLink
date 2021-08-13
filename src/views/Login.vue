<template>
  <div class="vue-tempalte">
    <form>
      <div class="card">
        <div class="card-body">
          <h3>Sign In</h3>
          <div class="form-group">
            <label>Email Address</label>
            <input
              type="email"
              v-model="email"
              class="form-control form-control-lg"
              placeholder="Email"
              id="email"
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control form-control-lg"
              placeholder="Password"
              id="password"
            />
          </div>
          <button
            type="submit"
            v-on:click="login()"
            class="btn btn-danger btn-lg btn-block"
            id="sign"
          >
            Sign In
          </button>
          <p class="forgot-password text-right mt-2 mb-4">
            <router-link to="/forgot-password">Forgot password ?</router-link>
          </p>
          <div class="social-icons">
            <ul>
              <li class="google">
                <a href="#"><i class="fa fa-google"></i></a>
              </li>
              <li class="facebook">
                <a href="#"><i class="fa fa-facebook"></i></a>
              </li>
              <li class="twitter">
                <a href="#"><i class="fa fa-twitter"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<script>
export default {
  name: "Plogincomponent",
  props: {
    msg: String,
  },
  methods: {
    // ----------login page redirect to dashboard--------
    login() {},
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
label {
  font-weight: 500;
  float: left;
  margin-left: 15px;
}
.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}
.google,
.facebook,
.twitter {
  border-radius: 30px;
}
#email,
#password,
#sign {
  border-radius: 30px;
}
.forgot-password a {
  color: #2554ff;
}
.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}
.social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}
.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}
.social-icons ul li a i {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
.social-icons ul li a:focus i,
.social-icons ul li a:active i {
  transition: none;
  color: #222222;
}
</style>
