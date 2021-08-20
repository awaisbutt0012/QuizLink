<template>
  <div class="main-div">
    <div class="row pt-5">
      <div class="text-left heading ml-4">
        <h5>Candidates</h5>
      </div>
    </div>

    <div class="row p-4 pt-2 table-div">
      <div>
        <table class="table table-sm table-borderless text-center">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Task</th>
            <th>Quiz Status</th>
            <th>Actions</th>
          </tr>
          <!-- <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Task</td>
            <td><i class="fas fa-circle" style="color:#1de9b6; font-size:8px"></i>Quiz Status</td>
            <td>
              <i class="far fa-trash-alt px-1" @click="handleDelete(item.LogID)"></i> <br/>
            </td>
          </tr> -->
          <tr v-for="item in axiosData" :key="item.id" class="p-0">
            <td class="p-0"><p>{{ item.name }}</p></td>
            <td class="p-0"><p>{{ item.email }}</p></td>
            <td class="p-0"><p>{{ item.task }}</p></td>
            <td class="p-0">
              <p v-if="item.turnedinquiz == 0">
                <i class="fas fa-circle" style="color:#e1090d; font-size:8px"></i>
                Pending 
              </p>
              <p v-else >
                <i class="fas fa-circle" style="color:#14d942; font-size:8px"></i>
                Turned in 
              </p>
            </td>
            <td class="p-0 pt-1">
              <i v-if="item.turnedinquiz == 1" class="fas fa-play px-1" @click="handlePlay(item.LogID)" data-toggle="modal" data-target="#myModal"></i>
              <i v-else class="fas fa-play px-1" style="cursor: default; color:#9b9d9f"></i>

              <i v-if="item.turnedinquiz == 1" class="fas fa-download px-1" @click="handleDownload(item.LogID)"></i>
              <i v-else class="fas fa-download px-1"  style="cursor: default; color:#9b9d9f"></i>

              <i class="far fa-trash-alt px-1" @click="handleDelete(item.LogID)"></i> <br/>
            </td>
          </tr>

        </table>

        <!-- MODAL -->
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
      .get("http://34.135.254.16/backend/api/dashboard/candidates_record")
      // .get("http://192.168.1.157:3000/api/dashboard/candidates_record")
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
      this.downloadLink = "http://34.135.254.16/backend/api/dashboard/candidates_record/play?LogID=" + id;
    },

    handleDownload(id) {
      this.downUser = id;
      this.downloadLink = "http://34.135.254.16/backend/api/dashboard/candidates_record/download?LogID=" + id;

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
          "http://34.135.254.16/backend/api/dashboard/candidates_record/delete", 
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
  height: 78vh;
  font-size: 14px;
  overflow-x: auto;
  overflow-y: auto;
}
table {
  background-color: #fcfcfc;
  box-shadow: 1px 1px 12px rgb(231, 231, 231);
  border-radius: 5px;
}
/* td {
  vertical-align: middle;
} */
.fa-play,
.fa-download,
.fa-trash-alt {
  cursor: pointer;
  color: #28374e;
  font-size:15px
}
</style>