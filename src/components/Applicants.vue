<template>
  <div class="main-div">
    <div class="row pt-5">
      <div class="text-left heading ml-4">
        <h5>Applicants</h5>
      </div>
    </div>

    <div class="row p-4 pt-2 table-div">
      <div>
        <v-data-table
          dense
          :headers="headers"
          :items="applicants"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-slot:[`item.approval`]="{ item }">
            <v-icon
              small
              :color="getColor(item.approval)"
              class="mr-1 text-capitalize"
            >
              mdi-checkbox-blank-circle
            </v-icon>
            <span>{{ item.approval }}</span>
          </template>

          <template v-slot:[`item.actions`]="{ item }">
            <v-btn
              dense
              class="mr-1 text-capitalize"
              id="btn" 
              style="background-color:#9b90d4"
            >
              {{ item.actions[0] }}
            </v-btn>
            <v-btn
              dense
              class="mr-1 text-capitalize"
              id="btn" 
              style="background-color:#24ced4"
            >
              {{ item.actions[1] }}
            </v-btn>
            <v-btn
              dense
              class="text-primary text-capitalize"
              id="btn" 
              style="border: solid 1px #04aaf6;"
            >
              {{ item.actions[2] }}
            </v-btn>
          </template>
        </v-data-table>

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
// import NProgress from "nprogress";
export default {
  data() {
    return {
      axiosData: [],
      headers: [
        {text: 'Name', value: 'name'},
        {text: 'Email', value: 'email'},
        {text: 'Position', value: 'position'},
        {text: 'Approval', value: 'approval'},
        {text: 'Actions', align: 'center', value: 'actions'},
      ],
      applicants: [
        {
          name: 'Ali',
          email: 'ali@gmail.com',
          position: 'SE',
          approval: 'Accepted',
          actions: ['Reject', 'Accept', 'View']
        },
        {
          name: 'Ahmed',
          email: 'ahmed@gmail.com',
          position: 'SE',
          approval: 'Rejected',
          actions: ['Reject', 'Accept', 'View']
        }
      ],
    };
  },
  methods: {
    getColor (approval) {
      if (approval == "Accepted") return '#1de9b6'
      else if (approval == "Rejected") return '#f34336'
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
  /* overflow-x: auto;
  overflow-y: auto; */
}
table {
  background-color: #fcfcfc;
  box-shadow: 1px 1px 12px rgb(231, 231, 231);
  border-radius: 5px;
}
td {
  vertical-align: middle;
}
#btn {
  /* background-color: #008AFF; */
  color: #fcfcfc;
  border-radius: 20px;
  width: 55px;
  height: 20px;
  line-height: 12px;
  font-size: 12px;
}
</style>