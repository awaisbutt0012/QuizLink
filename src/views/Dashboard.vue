<template>

<div id="app">
  <v-app id="inspire">
    <!-- COLLAPSABLE LEFT MENU -->
    <v-navigation-drawer id="menu"
      v-model="drawer"
      app
      clipped
      mobile-breakpoint="850"
    >
      <v-list>
        <v-list-item
          v-for="obj in panelData" 
          :key="obj.id"
          link
          id="links"
          class="mb-1"
          :to="{ name: 'leftpanel', params: { leftpanel: obj.slug } }"
           @click="onChange"
        > <!-- active-class="blue--text" -->
          <v-list-item-icon>
            <v-icon class="white--text" dense>{{ obj.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text body-2">{{ obj.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- TOP BAR -->
    <v-app-bar id="top-row"
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="text-light"></v-app-bar-nav-icon>
      <v-toolbar-title> 
        <img class="logo mx-auto" :src="logo" alt="Developers Studio Logo" />
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- DROPDOWN -->
      <div class="text-right">
        <v-menu
          transition="slide-y-transition"
          bottom
          :offset-y="offset"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-card 
              class="mr-3 elevation-0"
              color="#394448"
              text
              small
              v-bind="attrs"
              v-on="on"
            >
              <span>
                <img class="avatar m-0 p-0" :src="avatar" alt="Admin Avatar" />
              <v-icon>mdi-menu-down</v-icon>
              </span>
            </v-card>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
                <v-list-item-subtitle>John Doe</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="handleSettings">
              <v-list-item-icon class="mx-1" >
                <v-icon small>mdi-cog</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="body-2">Settings</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="handleLogout">
              <v-list-item-icon class="mx-1" >
                <v-icon small>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="body-2">Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            
          </v-list>
        </v-menu>
      </div>
      <!-- END OF DROPDOWN -->
    </v-app-bar>
    <!-- END OF TOP BAR -->

    <!-- RIGHT PANEL -->
    <v-main class="p-0 mt-5">
      <v-container fluid>
        <div v-show="changeToggle && slug === 'dashboard'">
          <Home />
        </div>
        <router-view :key="$route.path" />      
      </v-container>
    </v-main>
    <!-- END OF RIGHT PANEL -->

  </v-app>
  </div>

</template>

<script>
import image from "@/assets/devvelopers_studio_logo.png";
import avatar from "@/assets/adminAvatar.png";
import Home from "@/components/Home.vue";

export default {
  name: "dashboard",
  props: {
    source: String,
  },
  components: {
    Home,
  },
  data() {
    return {
      drawer: null,
      offset: true,
      changeToggle: true,
      slug: this.$router.currentRoute.name,
      panelData: [
        { id: 1, name: "Home", slug: "", icon: "mdi-view-dashboard" },
        { id: 2, name: "Candidates", slug: "display-candidates", icon: "mdi-account-group" },
        { id: 3, name: "Generate Link", slug: "generate-link", icon: "mdi-link-variant" },
        { id: 4, name: "Create Post", slug: "create-post", icon: "mdi-note-plus" },
        { id: 5, name: "Applicants", slug: "applicants", icon: "mdi-account-plus" },
      ],
      logo: image,
      avatar: avatar,
    };
  },
  
  methods: {
    onChange() {
      this.changeToggle = false;
    },
    handleSettings() {
      alert("settings")
    },
    handleLogout() {
			// localStorage.removeItem('loggedUser');
      // this.$router.push({ path: "/signin" });
      alert("logout")
    }
  }
}
</script>

<style scoped>
#top-row {
  background-color: #394448;
}
.avatar {
  width: 60px;
}
.logo {
  width: 220px;
}
#menu {
  background-color: #394448;
}
#links {
  text-decoration: none;
  border-left: solid 3px #24ced4;
  font-size: 14px;
  font-weight: 300;
}
#links:hover,
#links:focus {
  text-decoration: none;
  background-color: #2a3335;
}
</style>