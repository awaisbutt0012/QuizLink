<template>
  <div>
    <div v-if="leftpanel === 'display-candidates'">
      <DisplayCandidates />
    </div>
    <div v-else-if="leftpanel === 'generate-link'">
      <GenerateLink />
    </div>
    <div v-else-if="leftpanel === 'create-post'">
      <Post />
    </div>
    <div v-else-if="leftpanel === 'applicants'">
      <Applicants />
    </div>
    <div v-else>
      <Home />
    </div>
  </div>
</template>

<script>
import DisplayCandidates from "@/components/DisplayCandidates.vue";
import GenerateLink from "@/components/GenerateLink.vue";
import Post from "@/components/Post.vue";
import Applicants from "@/components/Applicants.vue";
import Home from "@/components/Home.vue";

export default {
  components: {
    DisplayCandidates,
    GenerateLink,
    Post,
    Applicants,
    Home,
  },
  props: {
    leftpanel: {
      type: String,
      required: true,
    },
  },
};
</script>
