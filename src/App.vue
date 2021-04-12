<template>
  <v-app>
    <drawer />
    <app-bar />
    <v-main class="pt-0">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Drawer from "@/components/app/Drawer.vue";
import AppBar from "@/components/app/AppBar.vue";
import { user } from "@/data/user";

export default defineComponent({
  name: "App",
  metaInfo: {
    title: user.fullName,
  },
  components: {
    AppBar,
    Drawer,
  },
  data: () => ({}),
});
</script>
<style lang="scss">
@import "~@/styles/main.scss";
</style>
