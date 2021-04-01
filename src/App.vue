<template>
  <v-app>
    <drawer />
    <settings />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Drawer from "@/components/Drawer.vue";
import Settings from "@/components/Settings.vue";

export default defineComponent({
  name: "App",
  components: {
    Settings,
    Drawer,
  },
  data: () => ({
    isDefaultSettingOpen: true,
    fab: false,
  }),
});
</script>
<style lang="scss">
@import "~@/styles/main.scss";
</style>
