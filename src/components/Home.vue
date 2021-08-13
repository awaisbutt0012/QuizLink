<template>
  <div class="container">
    <div class="row d-flex justify-content-center p-4">
      <!-- <div class="col-lg-4 p-4 m-5 users-div">
        <h4 class="pb-4">Total candidates</h4>
        <vc-donut
          :sections="[{ value: 75, color: '#ef6052' }]"
          :size="200"
          unit="px"
          background="#fafafa"
        >
          <h4>75</h4>
        </vc-donut>
      </div>
      <div class="col-lg-4 p-4 m-5 quiz-div">
        <h4 class="pb-4">Quiz Attempts</h4>
        <vc-donut
          :sections="[{ value: 60, color: '#eab24d' }]"
          :size="200"
          unit="px"
          background="#fafafa"
        >
          <h4>60%</h4>
        </vc-donut>
      </div> -->

      <!-- <div class="row p-4 m-5 date-div">
        <h4>today {{ today }}</h4>
        <h4>{{ timestamp }}</h4>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  date() {
    return {
      today: new Date().toLocaleDateString(),
      timestamp: null,
    };
  },
  created() {
    setInterval(this.getNow, 1000);
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
  overflow-x: auto;
  overflow-y: auto;
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
