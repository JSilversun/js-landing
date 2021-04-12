<template>
  <vue-typed v-bind="$attrs" v-on="$listeners">
    <slot />
  </vue-typed>
</template>
<script lang="ts">
import VueTyped from "vue-typed-js";
import "vue-typed-js/dist/vue-typed-js.css";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "TypingText",
  components: {
    VueTyped,
  },
  data() {
    return {};
  },
});
</script>
