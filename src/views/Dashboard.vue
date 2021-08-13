<template>
  <div class="container-fluid main-div m-0 py-0">
    <div class="row p-2">
      <!---------- LEFT PANEL --------->
      <div class="col-lg-2 left-panel p-2">
        <div class="row pt-2 pb-3">
          <img class="logo mx-auto" :src="logo" alt="Developers Studio Logo" />
        </div>
        <div class="row text-left pb-2" v-for="obj in panelData" :key="obj.id">
          <router-link
            :to="{ name: 'leftpanel', params: { leftpanel: obj.slug } }"
            class="col-12 links"
          >
            <!-- <div class="py-3 w-100"> -->
            <div class="py-3 w-100" @click="onChange">
              <i :class="obj.icon"></i>
              <span class="text-light"> {{ obj.name }}</span>
            </div>
          </router-link>
        </div>
      </div>

      <!---------- RIGHT PANEL --------->
      <div class="col-lg-10 right-panel">
        <div class="row p-3 top-row">
          <div class="col-9 text-left">
            <h3>
              <img
                class="avatar m-0 p-0"
                :src="avatar"
                alt="Admin Avatar"
              />Admin
            </h3>
          </div>
          <div class="col-3 text-right">
            <button class="btn btn-logout">
              <i class="fas fa-power-off"></i>&nbsp;
              <span class="my-auto">Logout</span>
            </button>
          </div>
        </div>

        <div>
          <div v-show="changeToggle && slug === 'dashboard'">
            <Home />
          </div>
          <router-view :key="$route.path" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image from "@/assets/dsGroup.png";
import avatar from "@/assets/adminAvatar.png";
import Home from "@/components/Home.vue";

export default {
  name: "dashboard",
  components: {
    Home,
  },
  data() {
    return {
      changeToggle: true,
      slug: this.$router.currentRoute.name,
      panelData: [
        { id: 1, name: "Home", slug: "", icon: "fas fa-home" },
        { id: 2, name: "Candidates", slug: "display-candidates", icon: "fas fa-users" },
        { id: 3, name: "Generate Link", slug: "generate-link", icon: "fas fa-link" },
      ],
      logo: image,
      avatar: avatar,
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    onChange() {
      this.changeToggle = false;
    },
  },
};
</script>

<style scoped>
.main-div {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 300;
  background-color: #28374e;
  /* position: fixed; */
  height: 100%;
}
.left-panel .logo {
  width: 140px;
}
.left-panel i {
  color: #fff;
  font-size: 20px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  /* border-radius: 20px; */
}
.left-panel .links {
  text-decoration: none;
  border-left: solid 5px #eab24d;
  font-size: 15px;
}
.links:hover,
.links:focus {
  background-color: #eab24d;
}
.right-panel {
  background-color: #f5f5f5;
  border-radius: 5px;
  height: 97vh;
}
.right-panel .avatar {
  width: 70px;
}
.right-panel .top-row {
  border-bottom: solid 1px #ececec;
}
.btn-logout {
  background-color: #ef6052;
  color: #fcfcfc;
  font-size: 14px;
  border-radius: 20px;
}

@media screen and (max-width: 991px) {
  .left-panel {
    width: 15%;
  }
  .right-panel {
    /* position: relative;
	  left: 140px; */
    max-width: 85%;
  }
  .links span {
    display: none;
  }
  .links i {
    font-size: 25px;
  }
  .links {
    text-align: center;
  }
}
</style>
