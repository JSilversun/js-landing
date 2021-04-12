<template>
  <xyz-transition-group
    :appear-visible="{
      threshold: [threshold],
    }"
    xyz="fade down stagger"
    v-bind="$attrs"
  >
    <slot />
  </xyz-transition-group>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { PartialRecord } from "@/types/types";
import { BreakpointName } from "vuetify/types/services/breakpoint";

export default defineComponent({
  name: "CardListTransition",
  computed: {
    threshold() {
      const defaultThreshold = 0.5;
      const thresholds: PartialRecord<BreakpointName, number> = {
        xs: 0.1,
        sm: 0.1,
      };
      return thresholds[this.$vuetify.breakpoint.name] || defaultThreshold;
    },
  },
});
</script>
