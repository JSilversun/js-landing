<template>
  <v-app-bar
    app
    style="position: fixed"
    class="elevation-0"
    :class="`${background}`"
    :hide-on-scroll="$vuetify.breakpoint.mobile"
    short
  >
    <v-app-bar-nav-icon
      class="primary--text"
      @click="TOGGLE_DRAWER"
      aria-label="Menu"
    />
  </v-app-bar>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { mapMutations } from "vuex";
import { useNamespacedState } from "vuex-composition-helpers";

export default defineComponent({
  name: "AppBar",
  data() {
    return {
      isVisible: false,
    };
  },
  setup() {
    return {
      ...useNamespacedState("app", ["isHomeVisible"]),
    };
  },
  methods: {
    ...mapMutations("app", ["TOGGLE_DRAWER"]),
  },
  computed: {
    background(): string {
      return !this.$vuetify.breakpoint.mobile || this.isHomeVisible
        ? "transparent"
        : "";
    },
  },
});
</script>
