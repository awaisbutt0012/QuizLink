<template>
  <div>
    <div v-if="leftpanel === 'display-candidates'">
      <DisplayCandidates />
    </div>
    <div v-else-if="leftpanel === 'generate-link'">
      <GenerateLink />
    </div>
    <div v-else>
      <Home />
    </div>
  </div>
</template>

<script>
import DisplayCandidates from "@/components/DisplayCandidates.vue";
import GenerateLink from "@/components/GenerateLink.vue";
import Home from "@/components/Home.vue";

export default {
  components: {
    DisplayCandidates,
    GenerateLink,
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
