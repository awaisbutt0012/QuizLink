<template>
  <div class="">
    <div class="quiz-panel p-4 mx-auto">
      <div class="border-box">
        <div class="heading py-3 text-white">
          <h3 class="text-center">Quiz</h3>
        </div>
      </div>
      <h6 class="font-weight-bold pt-4 pl-2">
        Attempt all of the following questions.
      </h6>
      <div id="accordion" class="accordion mt-4">
        <div class="card">
          <div class="card-header">
            <a class="card-link" data-toggle="collapse" href="#collapseOne">
              Question 1
            </a>
          </div>
          <div id="collapseOne" class="collapse show" data-parent="#accordion">
            <div class="card-body">Lorem ipsum..</div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <a
              class="collapsed card-link"
              data-toggle="collapse"
              href="#collapseTwo"
            >
              Question 2
            </a>
          </div>
          <div id="collapseTwo" class="collapse" data-parent="#accordion">
            <div class="card-body">Lorem ipsum..</div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <a
              class="collapsed card-link"
              data-toggle="collapse"
              href="#collapseThree"
            >
              Question 3
            </a>
          </div>
          <div id="collapseThree" class="collapse" data-parent="#accordion">
            <div class="card-body">Lorem ipsum..</div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <a
              class="collapsed card-link"
              data-toggle="collapse"
              href="#collapseFour"
            >
              Question 4
            </a>
          </div>
          <div id="collapseFour" class="collapse" data-parent="#accordion">
            <div class="card-body">Lorem ipsum..</div>
          </div>
        </div>
      </div>
      <div class="pb-4">
        <button
          type="submit"
          class="start mt-2 btn float-right"
          @click="stopStream"
        >
          <span class="text-white">Submit</span>
          <b-icon-chevron-right class="arrow text-white"></b-icon-chevron-right>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Image from "@/assets/dsGroup.png";

export default {
  name: "Questions",
  // props: {
  //   questions: {
  //     type: String,
  //     required: true,
  //   }
  // },
  data() {
    return {
      logo: Image,
    };
  },
  methods: {
    stopStream() {
      this.$parent.stopStream();
    },
  },
};
</script>

<style scoped>
.main-div {
  background: #f5f5f5;
  position: fixed;
  height: 100%;
}
.logo {
  filter: drop-shadow(0 4px 8px rgba(9, 13, 71, 0.9));
  margin-left: 30px;
}
.quiz-panel {
  border-radius: 10px;
  height: 100%;
}
.heading {
  background: #28374e;
  font-weight: 300;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.card-link {
  text-decoration: none;
  color: #17114f;
}
.time-limit {
  font-size: 18px;
}
.border-box {
  border: 2px solid #f05e59;
  border-left: 0;
  border-right: 0;
  padding: 5px 0;
}
.horizontal-border {
  border: 1px solid #f05e59;
}
button {
  background: #f05e59;
  border-radius: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 130px;
  transition: all 500ms ease 0ms;
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.4),
    -4px -4px 8px 0 rgb(235, 235, 235);
}
button:hover {
  width: 150px;
}
.arrow {
  display: none !important;
  padding-left: 5px;
  font-size: 12px;
}
button:hover .arrow {
  display: inline !important;
}
.accordion {
  height: 40vh;
  overflow-x: auto;
  overflow-y: auto;
}
h3 {
  font-weight: 300;
}
@media screen and (max-width: 1024px) {
  .logo {
    width: 80px;
  }
}
@media screen and (max-width: 768px) {
  .logo {
    margin-left: 0;
  }
}
</style>
