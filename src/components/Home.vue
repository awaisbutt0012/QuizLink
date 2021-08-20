<template>
  <v-app class="right-panel">
    <v-container>
      <!-- ======================================= ->
                        CANDIDATES
      < ========================================== -->
      <v-row no-gutters>
        <v-col
          class="progress-cols mx-3"
          v-for="(candidate, indx) in candidates"
          :key="indx"
        >
          <v-card class="pa-3">
            <v-row no-gutters>
              <v-col cols="10" md="10">
                <p class="cards-name">{{ candidate.tabs }}</p>
                <p class="number">{{ candidate.numbers }}</p>
              </v-col>
              <v-col cols="2" md="2">
              <v-progress-circular
                :rotate="360"
                :size="50"
                :width="6"
                :value="candidate.values"
                :color="candidate.colors"
                class="my-auto mt-3"
              >
                {{ candidate.values }}
              </v-progress-circular>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <!-- ======================================= ->
                        POSTS
      < ========================================== -->
      <v-row no-gutters>
        <v-col cols="12" md="8" sm="12" xs="12">
          <v-card class="ma-3">
            <v-card-title>
              Posts
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="posts"
              :search="search"
              :items-per-page="3"
            >
              <template v-slot:[`item.img`]="{ item }">
                <div class="p-2">
                  <v-img
                    :src="item.img"
                    :alt="item.name"
                    width="40"
                    @click="overlay = !overlay"
                  ></v-img>
                </div>
                <v-overlay :value="overlay" width="500">
                  <v-card color="transparent" class="elevation-0">
                    <v-img :src="item.img" :alt="item.name" width="500"></v-img>
                  </v-card>
                  <v-btn
                    color="transparent"
                    elevation="0"
                    absolute
                    top
                    right
                    @click="overlay = false"
                    class="mt-n10"
                  >
                    <v-icon>mdi-close-circle</v-icon>
                  </v-btn>
                </v-overlay>
              </template>
              <template v-slot:[`item.social`]="{ item }">
                <div class="p-2">
                  <v-icon>{{ item.social[0] }}</v-icon>
                  <v-icon>{{ item.social[1] }}</v-icon>
                  <v-icon>{{ item.social[2] }}</v-icon>
                </div>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
        <!-- ======================================= ->
                        CALENDAR
      < ========================================== -->
        <v-col cols="12" md="4" sm="12" xs="12">
          <v-card class="ma-3">
            <v-date-picker
              color="blue-grey mb-n12"
              show-adjacent-months
              full-width
            ></v-date-picker>
          </v-card>
        </v-col>
      </v-row>
      <!-- ======================================= ->
                        SOCIAL MEDIA
      < ========================================== -->
      <v-row no-gutters>
        <v-col
          class="social-cols mx-3"
          v-for="(medias, index) in media"
          :key="index"
        >
          <v-card class="pa-3 mt-6">
            <v-row no-gutters>
              <v-col cols="9" md="9">
                <p class="cards-name">{{ medias.cards }}</p>
                <p class="number">{{ medias.posts }}</p>
              </v-col>
              <v-col cols="3" md="3" class="">
              <v-card :color="medias.socialColors" class="pa-3 pl-4 mt-n9">
                <v-icon color="white" size="40" class="">
                  {{ medias.icons }}
                </v-icon>
              </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import img from "@/assets/adminAvatar.png";
export default {
  name: "Home",
  data: () => ({
    picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    avatar: img,
    overlay: false,
    candidates: [
      {
        values: "60",
        colors: "#9B90D4",
        tabs: "Candidates",
        numbers: "13045",
      },
      {
        values: "40",
        colors: "#EF6052",
        tabs: "Applicants",
        numbers: "10450",
      },
      {
        values: "80",
        colors: "#25C3E0",
        tabs: "Attempted Quiz",
        numbers: "8090",
      },
    ],
    media: [
      {
        cards: "Facebook",
        posts: "130",
        icons: "mdi-facebook",
        socialColors: "#9B90D4",
      },
      {
        cards: "Instagram",
        posts: "130",
        icons: "mdi-instagram",
        socialColors: "#EF6052",
      },
      {
        cards: "LinkedIn",
        posts: "100",
        icons: "mdi-linkedin",
        socialColors: "#25C3E0",
      },
    ],
    search: "",
    headers: [
      {
        text: "Title",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Time", value: "time" },
      { text: "Social Media", value: "social" },
      { text: "Image", value: "img" },
    ],
    posts: [
      {
        name: "Front End Developer",
        time: "01:59",
        social: ["mdi-facebook", "mdi-instagram"],
        img: img,
      },
      {
        name: "Laravel Developer",
        time: "2:37",
        social: ["mdi-instagram", "mdi-linkedin"],
        img: img,
      },
      {
        name: "Content Writer",
        time: "2:62",
        social: ["mdi-facebook", "mdi-linkedin", "mdi-instagram"],
        img: img,
      },
      {
        name: "VueJs Developer",
        time: "3:05",
        social: ["mdi-linkedin", "mdi-instagram"],
        img: img,
      },
      {
        name: "SEO",
        time: "3:56",
        social: ["mdi-instagram"],
        img: img,
      },
      {
        name: "React Developer",
        time: "3:75",
        social: ["mdi-facebook"],
        img: img,
      },
      {
        name: "ROR Developer",
        time: "3:92",
        social: ["mdi-linkedin"],
        img: img,
      },
      {
        name: "Flutter Developer",
        time: "4:00",
        social: ["mdi-linkedin"],
        img: img,
      },
      {
        name: "Blockchain Developer",
        time: "4:52",
        social: ["mdi-facebook"],
        img: img,
      },
      {
        name: "Full Stack Developer",
        time: "5:18",
        social: ["mdi-instagram"],
        img: img,
      },
    ],
  }),
};
</script>
<style scoped>
.number {
  font-weight: 300;
  font-size: 14px;
}
@media screen and (max-width: 768px) {
  .v-progress-circular {
    size: 40;
  }
  .cards-name {
    font-size: 14px;
  }
  .number {
    font-size: 12px;
  }
}
@media screen and (max-width: 425px) {
  .progress-cols {
    margin-top: 10px;
  }
  .social-cols {
    margin-top: 10px;
  }
  .cards-name {
    margin-right: 70px;
  }
}
@media screen and (max-width: 375px) {
  .social-cols {
    margin-top: 10px;
  }
}
@media screen and (max-width: 320px) {
  .cards-name {
    margin-right: 30px;
  }
}
</style>