<template>
  <div class="main-div">
    <div class="row pt-2">
      <div class="col-9 text-left heading ml-4">
        <h4>Candidates</h4>
      </div>
    </div>

    <div class="row p-4 pt-2 table-div">
      <div>
        <table class="table table-condensed">
          <tr class="p-0">
            <th>Name</th>
            <th>Email</th>
            <th>Task</th>
            <th>Quiz Status</th>
            <th>Actions</th>
          </tr>
          <tr v-for="item in axiosData" :key="item.id" class="p-0">
            <td class="p-0"><p>{{ item.name }}</p></td>
            <td class="p-0"><p>{{ item.email }}</p></td>
            <td class="p-0"><p>{{ item.task }}</p></td>
            <td class="p-0">
              <p v-if="item.turnedinquiz == 0" style="color:red"> Pending </p>
              <p v-else style="color:green"> Turned in </p>
              <!-- <p>{{ item.turnedinquiz }}</p> -->
            </td>
            <td class="p-0 pt-1">
              <!-- <a :href="item.recording_path"><p>{{ item.recording_path }}</p></a> -->
              <i class="fas fa-play px-1" @click="handlePlay(item.LogID)" data-toggle="modal" data-target="#myModal"></i>
              <i class="fas fa-download px-1" @click="handleDownload(item.LogID)"></i>
              <i class="far fa-trash-alt px-1" @click="handleDelete(item.LogID)"></i> <br/>
              <!-- <a :href="downloadLink"><i class="fas fa-download px-1"></i></a> -->
              <!-- <a v-show="downUser == item.LogID" :href="downloadLink">{{ downloadLink }}</a> -->
            </td>
          </tr>
        </table>

        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">VIDEO</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                <p>{{ downloadLink }}</p>
                <video :src="downloadLink" width="400" controls>
                </video>
              </div>
            </div>
          </div>
        </div>
        <!-- END OF MODAL -->

      </div>
    </div>
  </div>
</template>

<script>
import NProgress from "nprogress";
export default {
  data() {
    return {
      axiosData: [],
      deleteUser: 0,
      downUser: 0,
      downloadLink: null,
    };
  },
  mounted() {
    NProgress.start();
    this.$http
      // .get("http://35.239.165.90/api/dashboard/candidates_record")
      .get("http://192.168.1.157:3000/api/dashboard/candidates_record")
      .then((res) => {
        this.axiosData = res.data;
        console.log(res);
        NProgress.done();
      })
      .catch((err) => {
        alert("Error", err);
        NProgress.done();
      });
  },
  methods: {
    handlePlay(id) {
      this.downloadLink = "http://192.168.1.157:3000/api/dashboard/candidates_record/play?LogID=" + id;
    },

    handleDownload(id) {
      this.downUser = id;
      this.downloadLink = "http://192.168.1.157:3000/api/dashboard/candidates_record/download?LogID=" + id;

      var fURL = document.createElement("a");
      fURL.href = this.downloadLink;
      console.log(fURL);
      document.body.appendChild(fURL);
      fURL.click();
    },

    handleDelete(id) {
      this.deleteUser = id;
      console.log ("user", this.deleteUser);
      this.$http
        .get(
          "http://192.168.1.157:3000/api/dashboard/candidates_record/delete", 
          {
            params: { LogID: id },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          alert("Error", err);
        });
    }
  }
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
  height: 77vh;
  font-size: 15px;
  overflow-x: auto;
  overflow-y: auto;
}
table {
  background-color: #fff;
  box-shadow: 1px 1px 12px rgb(207, 207, 207);
  border-radius: 10px;
}
/* td {
  vertical-align: middle;
} */
.fa-play,
.fa-download,
.fa-trash-alt {
  cursor: pointer;
  color: #28374e;
}
</style>