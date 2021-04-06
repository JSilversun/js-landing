<template>
  <v-app-bar app v-if="$vuetify.breakpoint.mobile" hide-on-scroll>
    <v-app-bar-nav-icon @click="TOGGLE_DRAWER" />
  </v-app-bar>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "AppBar",
  methods: {
    ...mapMutations("app", ["TOGGLE_DRAWER"]),
  },
});
</script>
