<template>
  <v-container fluid class="pa-0">
    <home id="home" />
    <about-me id="about_me" />
    <education id="education" />
    <experience id="experience" />
    <portfolio id="portfolio" />
    <posts id="posts" />
    <main-footer />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import AboutMe from "@/views/landing/sections/AboutMe.vue";
import Home from "@/views/landing/sections/Home.vue";
import Education from "@/views/landing/sections/Education.vue";
import Experience from "@/views/landing/sections/Experience.vue";
import Portfolio from "@/views/landing/sections/Portfolio.vue";
import Posts from "@/views/landing/sections/Posts.vue";
import MainFooter from "@/components/app/Footer.vue";

export default defineComponent({
  name: "Landing",
  components: {
    Home,
    AboutMe,
    Education,
    Experience,
    Portfolio,
    Posts,
    MainFooter,
  },
});
</script>
