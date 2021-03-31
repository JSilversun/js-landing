<template>
  <div>
    <v-container fluid class="pa-0">
      <home id="home" class="mb-10" />
      <about-me id="about_me" class="mt-10" />
      <education id="education" class="mt-10" />
      <experience id="experience" class="mt-10" />
      <portfolio id="portfolio" class="mt-10" />
      <post-list id="posts" class="mt-10" />
    </v-container>
  </div>
</template>

<script lang="ts">
import Portfolio from "@/components/Portfolio.vue";
import Experience from "@/components/Experience.vue";
import Education from "@/components/Education.vue";
import AboutMe from "@/components/AboutMe.vue";
import Home from "@/components/Home.vue";
import { defineComponent } from "@vue/composition-api";
import PostList from "@/components/PostList.vue";

export default defineComponent({
  name: "Landing",
  components: {
    PostList,
    Portfolio,
    Experience,
    Education,
    AboutMe,
    Home,
  },
});
</script>
