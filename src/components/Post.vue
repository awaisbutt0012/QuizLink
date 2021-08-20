<template>
  <v-container>
    <div class="container">
    <div class="pl-3 section">
      <div class="text-left heading">
        <h5>Create Post</h5>
      </div>
      <v-form v-model="valid" autocomplete="off" class="login">
        <v-text-field
          label="Job Title"
          type="text"
          :rules="nameRules"
          required
        ></v-text-field>
        <v-text-field
          type="textarea"
          label="Description"
          :rules="nameRules"
          required
        ></v-text-field>
        <div class="mainUpload">
          <div
            class="uploader"
            @dragenter="OnDragEnter"
            @dragleave="OnDragLeave"
            @dragover.prevent
            @drop="onDrop"
            :class="{ dragging: isDragging }"
          >
            <div class="dragSection" v-show="!images.length">
              <i class="fa fa-cloud-upload"></i>
              <p>Drop and drop images here</p>
              <div class="file-input">
                <!-- <label for="file">Select a file</label> -->
                <input
                  type="file"
                  id="file"
                  class="hide"
                  @change="onInputChange"
                  multiple
                />
              </div>
            </div>
            <div class="images-preview" v-show="images.length">
              <div
                class="img-wrapper"
                v-for="(image, index) in images"
                :key="index"
              >
                <img :src="image" :alt="`Image Uplaoder ${index}`" />
                <div class="details">
                  <span class="name" v-text="files[index].name"></span>
                  <span
                    class="size"
                    v-text="getFileSize(files[index].size)"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-4 mb-2">
         <label class="p-0 m-0">
            <input type="checkbox" />
            <div class="icon-box" >
              <v-icon class="facebook" x-large>facebook</v-icon>
            </div>
          </label>
          <label class="p-0 m-0">
            <input type="checkbox" />
            <div class="icon-box">
              <v-icon class="linkedin" x-large>mdi-linkedin</v-icon>
            </div>
          </label>
          <label class="p-0 m-0">
            <input type="checkbox" />
            <div class="icon-box">
              <v-icon class="instagram" x-large>mdi-instagram</v-icon>
            </div>
          </label>
        </div>
        <div class="inputFields d-flex justify-content-center">
          <v-btn class="ma-2" href="#" outlined color="indigo">
            Generate Post
          </v-btn>
        </div>
      </v-form>
    </div>
    </div>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    isDragging: false,
    dragCount: 0,
    files: [],
    images: []
  }),
  methods: {
    OnDragEnter (e) {
      e.preventDefault()
      this.dragCount++
      this.isDragging = true
      return false
    },
    OnDragLeave (e) {
      e.preventDefault()
      this.dragCount--
      if (this.dragCount <= 0) this.isDragging = false
    },
    onInputChange (e) {
      const files = e.target.files
      Array.from(files).forEach(file => this.addImage(file))
    },
    onDrop (e) {
      e.preventDefault()
      e.stopPropagation()
      this.isDragging = false
      const files = e.dataTransfer.files
      Array.from(files).forEach(file => this.addImage(file))
    },
    addImage (file) {
      if (!file.type.match('image.*')) {
        console.log(`${file.name} is not an image`)
        return
      }
      this.files.push(file)
      let reader = new FileReader()
      reader.onload = e => this.images.push(e.target.result)
      reader.readAsDataURL(file)
      console.log(file)
    },
    getFileSize (size) {
      const fSExt = ['Bytes', 'KB', 'MB', 'GB']
      let i = 0
      while (size > 900) {
        size /= 1024
        i++
      }
      return `${Math.round(size * 100) / 100} ${fSExt[i]}`
    }
    // upload () {
    //   const formData = new FormData()
    //   this.files.forEach(file => {
    //     formData.append('images[]', file, file.name)
    //   })
    //   // axios.post('/images-upload', formData).then(response => {
    //   //   this.$toastr.s('All images uplaoded successfully')
    //   //   this.images = []
    //   //   this.files = []
    //   // })
    // }
  }
}
</script>
<style scoped>
.heading {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.v-application {
  overflow: hidden !important;
}
div.row.p-2 {
  overflow-y: hidden;
}
.section {
  overflow: hidden;
}
.main {
  height: 77vh;
  font-size: 15px;
  overflow-x: auto;
  overflow-y: auto;
}
 label input[type='checkbox'] {
  position: absolute;
  cursor: pointer;
  opacity: 0;
}
label input .icon-box {
  width: 40px;
  height: 40px;
  display: flex;
  background: #000;
  justify-content: center;
  align-items: center;
  border: 3px solid red;
  border-radius: 10px;
  transition: 0.5s;
}
label input[type='checkbox']:checked ~ .icon-box {
  background: rgb(199, 176, 176);
  border: 3px solid #fff;
  box-shadow: 0 0 10px rgba(33, 156, 243, 0.5), 0 0 20px rgba(33, 156, 243, 0.5),
    0 0 30px rgba(33, 156, 243, 0.5), 0 0 30px rgba(33, 156, 243, 0.5);
}
.hide {
  color: cadetblue;
}
.facebook {
  font-size: 44px !important;
  color: blue !important;
}
.linkedin {
  font-size: 44px !important;
  color: darkblue !important;
}
.instagram {
  font-size: 44px !important;
  color: #F85242 !important;
}
.facebook,
.linkedin,
.instagram {
  font-size: 34px;
}
.dragSection {
  margin-top: -20px;
}
.links,
.posts {
  height: 45px;
  background-color: #F85242;
  color: #FCFCFC;
  font-size: 14px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid #EF6052;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}
.inputFields {
  width: 80%;
  margin-left: 10%;
}
.uploader {
  width: auto;
  background: #28374E;
  color: #fff;
  padding: 40px 15px;
  text-align: center;
  border-radius: 10px;
  border: 2px dashed rgb(219, 219, 219);
  font-size: 20px;
  position: relative;
  height: 220px;
  overflow: hidden;
  overflow: scroll;
}
.inputField,
.textArea {
  border-radius: 10px;
}
.inputField {
  height: 45px;
}
.file-input {
  width: 200px;
  margin: auto;
  height: 68px;
  position: relative;
}
.images-preview {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.img-wrapper {
  width: 150px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 130px;
  justify-content: space-between;
  background: #fff;
  box-shadow: 5px 5px 20px #3E3737;
}
.details {
  font-size: 12px;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  padding: 3px 6px;
}
.upload-control {
  position: absolute;
  width: 100%;
  background: #fff;
  top: 0;
  left: 0;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding: 10px;
  padding-bottom: 4px;
  text-align: right;
}
</style>