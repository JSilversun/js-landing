<template>
  <v-container fluid class="pa-0">
    <home id="home" />
    <about-me id="about_me" class="background darken-5" />
    <education id="education" class="background darken-4" />
    <experience id="experience" class="background darken-5" />
    <portfolio id="portfolio" class="background darken-4" />
    <posts id="posts" class="background darken-5" />
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
import { user } from "@/data/user";

export default defineComponent({
  name: "Landing",
  metaInfo: {
    title: user.fullName,
  },
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
