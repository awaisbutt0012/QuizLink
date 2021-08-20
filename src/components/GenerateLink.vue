<template>
  <div class="main-div">
    <div class="row pt-2">
      <div class="col-9 text-left heading ml-4">
        <h4>Generate Quiz Link</h4>
      </div>
    </div>

    <div class="row p-4 pt-2 form-div">
      <div class="mx-auto w-50">
        <form
          class="form-group p-4 my-2 mx-auto text-left"
          @submit.prevent="handleSubmit"
        >
          <label name="name" class="pb-0 mb-0">Name</label>
          <input
            v-model="form.name"
            type="name"
            class="form-control mb-3"
            required
          />

          <label name="email" class="pb-0 mb-0">Email address</label>
          <input
            v-model="form.email"
            type="email"
            class="form-control mb-3"
            required
          />

          <label name="password" class="pb-0 mb-0">Password</label>
          <input
            v-model="form.password"
            type="password"
            class="form-control mb-3"
            required
          />

          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-submit mx-auto">
              Generate Link
            </button>
          </div>
        </form>
      </div>

      <div class="link-div py-3">
        <router-link to="/quiz" target="_blank">
          <p>{{ generatedLink }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
      },
      generatedLink: null,
    };
  },
  methods: {
    handleSubmit() {
      this.$http
        .post(this.VUE_APP_SERVICE_URL + "/dashboard/generateurl", this.form)
        .then((res) => {
          this.generatedLink = res.data.url;
          localStorage.setItem("generatedLink", this.generatedLink);
          console.log(res);
        })
        .catch((err) => {
          Vue.$toast.open({
            message: "Something went wrong!",
            type: "error",
            // all of other options may go here
          });
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.main-div {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.heading {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.form-div {
  height: 77vh;
  font-size: 15px;
  overflow-x: auto;
  overflow-y: auto;
}
form {
  background-color: #fff;
  box-shadow: 1px 1px 12px rgb(207, 207, 207);
  border-radius: 10px;
}
.btn-submit {
  background-color: #ef6052;
  color: #fcfcfc;
  border-radius: 20px;
}
.link-div {
  word-wrap: break-word;
}
</style>
