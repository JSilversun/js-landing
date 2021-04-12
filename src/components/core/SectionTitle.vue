<template>
  <h1 class="text-center my-5"><slot /></h1>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "SectionTitle",
});
</script>
