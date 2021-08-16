<template>
  <div class="container">
    <div class="row d-flex justify-content-center p-5 pt-3">
      <div class="col-lg-4 p-5 m-5 users-div">
        <h4 class="pb-4">Total candidates</h4>
        <vc-donut
          :sections="[{ value: axiosLength, color: '#ef6052' }]"
          :size="200"
          unit="px"
          background="#fafafa"
        >
          <h4>{{ axiosLength }}</h4>
        </vc-donut>
      </div>
      <div class="col-lg-4 p-5 m-5 quiz-div">
        <h4 class="pb-4">Quiz Attempts</h4>
        <vc-donut
          :sections="[{ value: quizAttempt, color: '#ef6052' }]"
          :size="200"
          unit="px"
          background="#fafafa"
        >
          <h4>{{ quizAttempt }}</h4>
        </vc-donut>
      </div>

      <!-- <div class="row p-4 m-5 date-div">
        <h4>today {{ today }}</h4>
        <h4>{{ timestamp }}</h4>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      axiosData: [],
      axiosLength: 0,
      quizAttempt: 0,
      today: new Date().toLocaleDateString(),
      timestamp: null,
    };
  },
  mounted() {
    setInterval(this.getNow, 1000);
    this.$http
      // .get("http://35.239.165.90/api/dashboard/candidates_record")
      .get("http://192.168.1.157:3000/api/dashboard/candidates_record")
      .then((res) => {
        /* GET NUMBER OF CANDIDATES */
        this.axiosData = res.data;
        this.axiosLength = this.axiosData.length;

        /* GET NUMBER OF QUIZ ATTEMPTS */
        for (let i=0; i<this.axiosLength; i++) {
          if (this.axiosData[i].turnedinquiz == 1) {
            this.quizAttempt++;
          }
        }
        // console.log(res.data);
      })
      .catch((err) => {
        alert("Error", err);
      });
  },
  // methods: {
  //   getNow: function() {
  //       const today = new Date();
  //       var currentHours = today.getHours();
  //       currentHours = ("0" + currentHours).slice(-2);
  //       var currentMinutes = today.getMinutes();
  //       currentMinutes = ("0" + currentMinutes).slice(-2);

  //       // const time = today.getHours() + ":" + today.getMinutes();
  //       const time = currentHours + ":" + currentMinutes;
  //       this.timestamp = time;
  //   }
  // }
};
</script>

<style scoped>
.container {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 300;
}
.row {
  height: 84vh;
}
.users-div,
.quiz-div {
  /* background-image: linear-gradient(to bottom right, #ef6052, #ff766a); */
  background-color: #fafafa;
  color: #28374e;
  border-radius: 20px;
  box-shadow: 1px 1px 12px rgb(207, 207, 207);
}
</style>
