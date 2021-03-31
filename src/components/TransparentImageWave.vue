<template>
  <image-wave :main-color="mainColor"></image-wave>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ImageWave from "./ImageWave.vue";

export default defineComponent({
  name: "TransparentImageWave",
  components: { ImageWave },
  computed: {
    mainColor() {
      return this.$vuetify.theme.isDark ? "#121212": "#fff";
    },
  },
});
</script>
