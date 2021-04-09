<template>
  <v-dialog
    v-model="isOpen"
    :fullscreen="$vuetify.breakpoint.mobile"
    height="80vh"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-img
        v-bind="{ ...$attrs, ...attrs }"
        v-on="on"
        class="cursor-pointer"
        :src="thumbnailUrl"
      />
    </template>
    <v-card class="d-flex flex-column" max-height="90vh">
      <v-card-title class="d-flex flex-nowrap align-start text-break">
        <span class="pa-0">{{ title }}</span>
        <v-spacer />
        <v-btn icon @click="isOpen = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="flex-grow-1 d-flex flex-column justify-center">
        <v-img :src="imageUrl" min-height="80vh" max-height="80vh" contain>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="primary" />
            </v-row>
          </template>
        </v-img>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "ExpandableImage",
  props: {
    title: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
});
</script>
