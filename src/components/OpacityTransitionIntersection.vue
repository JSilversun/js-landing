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
        threshold: [0.1],
      }),
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    onIntersect(entries: IntersectionObserverEntry[]) {
      const { isIntersecting } = entries[0];
      this.isVisible = isIntersecting;
    },
  },
});
</script>
