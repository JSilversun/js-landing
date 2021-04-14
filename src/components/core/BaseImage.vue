<template>
  <v-img v-bind="$attrs" v-on="$listeners">
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular indeterminate color="primary" />
      </v-row>
    </template>
  </v-img>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "BaseImage",
});
</script>
