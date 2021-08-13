<template>
  <div class="main-div">
    <div class="row pt-2">
      <div class="col-9 text-left heading ml-4">
        <h4>Candidates</h4>
      </div>
    </div>

    <div class="row p-4 pt-2 table-div">
      <div>
        <table class="table">
          <tr class="p-0">
            <th>Name</th>
            <th>Email</th>
            <th>Task</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
          <tr v-for="item in axiosData" :key="item.id">
            <td>
              <p>{{ item.name }}</p>
            </td>
            <td>
              <p>{{ item.email }}</p>
            </td>
            <td>
              <p>{{ item.task }}</p>
            </td>
            <td>
              <p>{{ item.turnedinquiz }}</p>
            </td>
            <td>

              <a :href="item.recording_path"><p>{{ item.recording_path }}</p></a>
              <a :href="item.recording_path"><i class="fas fa-play px-1"></i></a>
              <i class="fas fa-download px-1"></i>
              <i class="far fa-trash-alt px-1"></i>
            </td>
          </tr>
          <!-- <tr>
            <td>abc</td>
            <td>abc</td>
            <td>abc</td>
            <td>abc</td>
            <td>
              <i class="fas fa-play px-1"></i>
              <i class="fas fa-download px-1"></i>
              <i class="far fa-trash-alt px-1"></i>
            </td>
          </tr> -->
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      axiosData: [],
    };
  },
  mounted() {
    this.$http
      .get("http://192.168.1.127:3000/api/dashboard/candidates_record")
      .then((res) => {
        this.axiosData = res.data;
        // console.log('response',this.axiosData = res.data);
      })
      .catch((err) => {
        alert("Error", err);
      });
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
.table-div {
  height: 75vh;
  font-size: 15px;
  overflow-x: auto;
  overflow-y: auto;
}
table {
  background-color: #fff;
  box-shadow: 1px 1px 12px rgb(207, 207, 207);
  border-radius: 10px;
}
td {
  vertical-align: middle;
}
.fa-play,
.fa-download,
.fa-trash-alt {
  cursor: pointer;
  color: #28374e;
}
</style>
