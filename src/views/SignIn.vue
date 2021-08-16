<template>
  <div class="vue-tempalte p-4">
    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 ">
        <div class="card card0 border-0">
            <div class="row d-flex">
                <div class="col-lg-6">
                  <div class="card1 pb-4">
                    <div class="row"> 
                      <!-- <img src="https://lh4.googleusercontent.com/-NBHTPcSODCo/AAAAAAAAAAI/AAAAAAAAAAA/gpcgk3f8kGc/s44-p-k-no-ns-nd/photo.jpg" class="logo">  -->
                      <img class="logo" :src="logo" alt="Developers Studio Logo" />
                    </div>
                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> 
                      <!-- <img src="https://i.imgur.com/uNGdWHi.png" class="image">  -->
                      <img class="image" :src="leftimg" alt="Image" />
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                    <div class="card2 card border-0 px-4 py-5">
                        <div class="row mb-4 px-3">
                            <h6 class="mr-3 mt-1 p-0 text-left signin">Sign in with</h6>
                            <div class="facebook text-center mr-3">
                                <div class="fa fa-facebook"></div>
                            </div>
                            <div class="twitter text-center mr-3">
                                <div class="fa fa-twitter"></div>
                            </div>
                            <div class="linkedin text-center mr-3">
                                <div class="fa fa-linkedin"></div>
                            </div>
                        </div>
                        <div class="row px-3 mb-4">
                            <div class="line"></div> 
                            <small class="or text-center">Or</small>
                            <div class="line"></div>
                        </div>
                        <form @submit.prevent="postData" method="post">
                          <div class="row px-3"> 
                            <label class="mb-0 pl-0 text-left">Email</label> 
                            <input class="mb-4" type="text" v-model="form.email" name="email" placeholder="Enter a valid email address"> 
                          </div>
                          <div class="row px-3"> 
                            <label class="m-0 pl-0 text-left">Password</label> 
                            <input type="password" v-model="form.password" name="password" placeholder="Enter password"> 
                          </div>
                          <!-- <div class="row px-3 pb-3">
                            <div class="col-lg-6 custom-control custom-checkbox">
                              <input id="chk1" type="checkbox" name="chk" class="custom-control-input"> 
                              <label for="chk1" class="custom-control-label text-sm" id="chk1">Remember me</label>
                            </div>
                            <div class="col-lg-6  text-right">
                              <a href="#" class="text-sm">Forgot Password?</a>
                            </div>
                          </div> -->
                          <div class="row p-2 m-0" style="color:red">
                            <p> {{ msg }} &nbsp; </p>
                          </div>
                          <div class="row mb-3 px-3"> 
                            <button type="submit" class="btn btn-logout text-center">Login</button> 
                          </div>
                        </form>
                        <div class="row mb-2 px-3"> 
                          <small class="font-weight-bold">Don't have an account? 
                            <a class="text-danger ">Register</a>
                          </small> 
                        </div>
                
                    </div>
                </div>
            </div>
            
            <div class="bg-blue py-4">
                <div class="row px-3">
                  <div class="col-lg-6 text-left">
                    <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2021. All rights reserved.</small>
                  </div>
                  <div class="col-lg-6 text-right">
                    <div class="social-contact ml-4 ml-sm-auto"> 
                      <span class="fa fa-facebook mr-4 text-sm"></span> 
                      <span class="fa fa-google-plus mr-4 text-sm"></span> 
                      <span class="fa fa-linkedin mr-4 text-sm"></span> 
                      <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> 
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>   
  </div>
   
</template>

<script>
import image1 from "@/assets/dsCircleLogo.png";
import image2 from "@/assets/signin.png";

export default {
  name: "signin",
   props: {
    msg: {
      type: String,
      // default: "Enter correct email and password!"
    }
  },
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      // msg: null,
      logo: image1,
      leftimg: image2,
    }
  },
  methods:{
    postData(){
      this.$http
      .post('http://35.239.165.90/api/admin/login', this.form)
      .then((result)=>{
        localStorage.setItem('loggedUser', JSON.stringify(this.form));
        this.$router.push({ name: "dashboard" });
        console.log("result", result);

      }).catch(err => {
        this.msg = "Incorrect email or password!";
        console.log("err", err)
      })
    }
  }
};
</script>

<style scoped>
body {
  background-color:#F5F5F5;
  color: #000;
  background-repeat: no-repeat
}
.vue-tempalte {
  background-color:#F5F5F5;
}
.card0 {
  /* box-shadow: 0px 4px 8px 0px #757575; */
  border-radius: 10px
}
.card2 {
  margin: 0px 40px
}
.logo {
  width: 80px;
  margin-top: 20px;
  margin-left: 35px
}
.image {
  width: 480px;
  /* height: 280px */
}
.border-line {
  border-right: 1px solid #EEEEEE
}
.signin {
  width: auto;
}
.facebook {
  background-color: #3b5998;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer
}
.twitter {
  background-color: #1DA1F2;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer
}
.linkedin {
  background-color: #2867B2;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer
}
.line {
  height: 1px;
  width: 45%;
  background-color: #E0E0E0;
  margin-top: 10px
}
.or {
  width: 10%;
  font-weight: bold
}
.text-sm {
  font-size: 14px; 
}
::placeholder {
  color: #BDBDBD;
  opacity: 1;
  font-weight: 300
}
:-ms-input-placeholder {
  color: #BDBDBD;
  font-weight: 300
}
::-ms-input-placeholder {
  color: #BDBDBD;
  font-weight: 300
}
input,
textarea {
  padding: 10px 12px 10px 12px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 5px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  letter-spacing: 1px
}
input:focus,
textarea:focus {
  border: 1px solid #EF6052;
  outline-width: 0
}
button:focus {
  outline-width: 0
}
a {
  color: inherit;
  cursor: pointer
}
.btn-logout {
  background-color: #ef6052;
  color: #fcfcfc;
  width: 130px;
  border-radius: 20px;
}
.bg-blue {
  color: #fff;
  background-color: #EF6052
}

@media screen and (max-width: 991px) {
  .logo {
    margin-left: 0px
  }
  .image {
    width: 300px;
    height: 220px
  }
  .border-line {
    border-right: none
  }
  #chk1{
    color:#EF6052;
  }
  .card2 {
    border-top: 1px solid #EEEEEE !important;
    margin: 0px 15px
  }
}
</style>