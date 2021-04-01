<template>
  <v-app>
    <drawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Drawer from "@/components/Drawer.vue";

export default defineComponent({
  name: "App",
  components: {
    Drawer,
  },
  data: () => ({}),
});
</script>
<style lang="scss">
@import "~@/styles/main.scss";
</style>
