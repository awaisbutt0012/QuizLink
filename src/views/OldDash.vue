<template>
  <div class="container-fluid main-div m-0 py-0">
    <div class="row">
      <div class="col-lg-3 left-menu">
        <div class="row py-3 px-3 admin">
          <!-- <h3 class="admin-text text-left">Admin Panel</h3> -->
          <img :src="logo" />
        </div>
        <div
          class="row border-top-0 text-left p-0"
          v-for="obj in panelData"
          :key="obj.id"
        >
          <router-link
            :to="{ name: 'leftpanel', params: { leftpanel: obj.slug } }"
            class="col-12 links"
          >
            <div class="p-3 w-100">
              <i :class="obj.icon"></i>
              <span class="text-light"> {{ obj.name }}</span>
            </div>
          </router-link>
        </div>
      </div>

      <div class="col-10 col-lg-9 right-panel">
        <div class="row p-3 title">
          <!-- <h3 class="title-text"> Quiz Management System </h3> -->
          <div class="d-flex justify-content-end pr-5">
            <i class="fas fa-power-off"></i>
            <span class="my-auto">Logout</span>
          </div>
        </div>
        <router-view :key="$route.path" />
      </div>
    </div>
  </div>
</template>

<script>
import image from "@/assets/devvelopers_studio_logo.png";

export default {
  data() {
    return {
      panelData: [
        {
          id: 1,
          name: "Candidates",
          slug: "display-candidates",
          icon: "fas fa-users",
        },
        {
          id: 2,
          name: "Generate Link",
          slug: "generate-link",
          icon: "fas fa-link",
        },
      ],
      logo: image,
    };
  },
};
</script>

<style scoped>
.main-div {
  overflow-x: hidden;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 400;
}
.admin {
  background-color: #3c70ad;
  border-bottom: #002d61 solid 1px;
  /* font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */

  color: #fafafa;
}
.left-menu {
  position: fixed;
  z-index: 1;
  height: 100%;
  /* font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
  font-size: 20px;
  background-color: #1f2837;
}
.title {
  background-color: #3c70ad;
  /* font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
  color: #fafafa;
  padding-bottom: 50px;
}
.right-panel {
  position: relative;
  left: 25%;
}
.links {
  border-bottom: #002e63 solid 1px;
  text-decoration: none;
}
.links:hover,
.links:focus {
  background-color: #00c0df;
}
i {
  /* background-color:#F05E59; */
  color: #fff;
  font-size: 20px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-radius: 20px;
}

@media screen and (max-width: 991px) {
  .left-menu {
    width: 140px;
  }
  .right-panel {
    position: relative;
    left: 140px;
    width: 100%;
  }
  .links span {
    display: none;
  }
  .links {
    text-align: center;
  }
}
</style>
