<template>
  <div
    class="transition-container"
    :style="{
      transition: 'opacity 500ms',
      opacity: isVisible ? 1 : 0,
    }"
    v-intersect="{
      handler: onIntersect,
      options,
    }"
  >
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "OpacityTransitionIntersection",
  props: {
    options: {
      type: Object,
      default: () => ({
        threshold: [0.4],
      }),
    },
    duration: {
      type: String,
      default: "800 ms",
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    onIntersect(entries) {
      const { isIntersecting } = entries[0];
      this.isVisible = !!isIntersecting;
    },
  },
});
</script>
<style scoped>
.transition-container {
}
</style>
