<template>
  <v-app-bar
    app
    style="position: fixed"
    class="elevation-0"
    :class="`${background}`"
    :hide-on-scroll="$vuetify.breakpoint.mobile"
    short
  >
    <v-app-bar-nav-icon class="primary--text" @click="TOGGLE_DRAWER" />
  </v-app-bar>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { mapMutations, mapState } from "vuex";

export default defineComponent({
  name: "AppBar",
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    ...mapMutations("app", ["TOGGLE_DRAWER"]),
  },
  computed: {
    ...mapState("app", ["isHomeVisible"]),
    background() {
      return !this.$vuetify.breakpoint.mobile || this.isHomeVisible
        ? "transparent"
        : "";
    },
  },
});
</script>
