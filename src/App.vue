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

export default defineComponent({
  name: "App",
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
