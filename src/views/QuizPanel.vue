<template>
  <div class="quiz">
    <div class="container-fluid text-left main-div p-3 pb-5">
      <img :src="logo" alt="logo" width="60px" class="logo ml-2" />

      <div class="col-9 right-panel mt-n4 mx-auto" v-if="!isRecording">
        <Instructions></Instructions>
      </div>

      <div class="col-9 right-panel mx-auto" v-else>
        <Quiz></Quiz>

        <!-- MODAL -->
        <div id="myModal" class="modalss">
          <!-- Modal content -->
          <div class="modal-content">
            <div class="modal-header">
              <h5
                v-if="uploadPercentage == 100"
                class="modal-title"
                id="exampleModalLongTitle"
              >
                Video Uploaded
              </h5>
              <h5 v-else class="modal-title" id="exampleModalLongTitle">
                Progress Uploading
              </h5>
            </div>
            <div class="modal-body">
              <!-- form for in div where user enter data for update -->
              <progress
                class="
                  progress-bar progress-bar-striped progress-bar-animated
                  rounded
                "
                max="100"
                style="width: 100%"
                :value.prop="uploadPercentage"
              ></progress>
            </div>
          </div>
        </div>
        <!-- END OF MODAL -->
      </div>
    </div>
  </div>
</template>

<script>
import Instructions from "@/components/Instructions.vue";
import Quiz from "@/components/Quiz.vue";
// import Image from "@/assets/dsGroup.png";
import image1 from "@/assets/dsCircleLogo.png";

export default {
  components: {
    Instructions,
    Quiz,
    // VUE_APP_SERVICE_URL : process.env.VUE_APP_SERVICE_URL
  },
  data() {
    return {
      logo: image1,
      uploadPercentage: 0,
      instruction: true,
      quiz: false,
      submit: false,
      isClicked: false,
      isRecording: false,
      options: { mimeType: "video/webm; codecs=vp9" },
      displayOptions: {
        video: {
          cursor: "always",
        },
      },
      mediaRecorder: {},
      stream: {},
      recordedChunks: [],
    };
  },
  methods: {
    download: function () {
      this.$gtag.event("download-stream", {});
      var blob = new Blob(this.recordedChunks, {
        type: "video/webm",
      });
      let formData = new FormData();
      formData.append("video", blob);
      var logId = localStorage.getItem("logId");

      formData.append("LogID", logId);
      this.$http

        .post(this.VUE_APP_SERVICE_URL + "/quiz/submit", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: function (progressEvent) {
            this.uploadPercentage = parseInt(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            );
          }.bind(this),
        })
        .then((res) => {
          // console.log(this.uploadPercentage);

          console.log("SUCCESS!! ", res);
        })
        .catch((err) => {
          alert("here isError", err);
        });

      var modal = document.getElementById("myModal");
      modal.style.display = "block";
      // this.isRecording = false;
    },
    handleDataAvailable: function (event) {
      if (event.data.size > 0) {
        this.recordedChunks.push(event.data);
        this.download();
      }
    },
    stopStream: function () {
      this.$gtag.event("stream-stop", {});
      this.mediaRecorder.stop();
      this.mediaRecorder = null;
      this.stream.getTracks().forEach((track) => track.stop());
    },
    getStream: async function () {
      try {
        this.stream = await navigator.mediaDevices.getDisplayMedia(
          this.displayOptions
        );
        this.mediaRecorder = new MediaRecorder(this.stream, this.options);
        this.mediaRecorder.ondataavailable = this.handleDataAvailable;
        this.mediaRecorder.start();
        this.isRecording = true;
        this.$router.push({ path: "/questions" });
        this.$gtag.event("stream-start", {});
      } catch (err) {
        this.isRecording = false;
        this.$gtag.event("stream-stop", {});
        alert(err);
      }
    },
  },
  mounted() {
    var link = localStorage.getItem("generatedLink");

    this.$http
      .get(link)
      .then((res) => {
        localStorage.setItem("logId", res.data.id);
        console.log(res);
      })
      .catch((err) => {
        alert("Error", err);
      });
  },
};
</script>

<style scoped>
.main-div {
  background: #fff;
  height: 100%;
}
.logo {
  /* filter: drop-shadow(0 4px 8px rgba(9, 13, 71, 0.9)); */
  margin-left: 30px;
}
.right-panel {
  height: 100%;
  padding: 40px;
  border-radius: 10px;
  background: #fcfcfc;
  box-shadow: 1px 1px 12px rgb(231, 231, 231);
  border-radius: 5px;
}
.modalss {
  display: none; /* Hidden by default */
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 300px;
  z-index: 1;
  /* padding-top: 100px;  */
  /* width: 50%; 
  height: 100%; */
  overflow: auto; /* Enable scroll if needed */
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  /* background-color: rgba(102,87,235,0.4);  */
  /* Black w/ opacity */
  /* left: 0;
  top: 0; */
}
.close {
  color: #aaaaaa;
  font-size: 28px;
  font-weight: bold;
  /* float: right; */
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

/* @media screen and (max-width: 1024px) {
  .logo {
    width: 60px;
  }
} */
@media screen and (max-width: 769px) {
  .logo {
    margin-left: 0;
  }
}
</style>
