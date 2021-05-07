<template>
  <div class="py-5 d-flex align-center flex-column">
    <v-avatar :size="size" :alt="subtitle">
      <v-img :src="imageUrl" />
    </v-avatar>
    <slot>
      <h4 class="pt-2">{{ subtitle }}</h4>
    </slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    imageUrl: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    size: {
      type: Number,
      default: 96,
    },
  },
});
</script>
