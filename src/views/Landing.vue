<template>
  <v-container fluid class="pa-0">
    <home id="home" />
    <about-me id="about_me" />
    <education id="education" />
    <experience id="experience" />
    <portfolio id="portfolio" />
    <post-list id="posts" />
    <main-footer />
  </v-container>
</template>

<script lang="ts">
import Portfolio from "@/components/Portfolio.vue";
import Experience from "@/components/Experience.vue";
import Education from "@/components/Education.vue";
import AboutMe from "@/components/AboutMe.vue";
import Home from "@/components/Home.vue";
import { defineComponent } from "@vue/composition-api";
import PostList from "@/components/PostList.vue";
import MainFooter from "@/components/Footer.vue";

export default defineComponent({
  name: "Landing",
  components: {
    MainFooter,
    PostList,
    Portfolio,
    Experience,
    Education,
    AboutMe,
    Home,
  },
});
</script>
