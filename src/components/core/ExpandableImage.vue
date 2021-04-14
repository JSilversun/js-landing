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
          <v-icon>$mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="flex-grow-1 d-flex flex-column justify-center">
        <base-image
          :src="imageUrl"
          min-height="80vh"
          max-height="80vh"
          contain
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import buildUrl from "cloudinary-build-url";
import BaseImage from "@/components/core/BaseImage.vue";

export default defineComponent({
  name: "ExpandableImage",
  components: { BaseImage },
  props: {
    title: {
      type: String,
      required: true,
    },
    imageId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    thumbnailUrl(): string {
      return buildUrl(this.imageId, {
        transformations: {
          resize: {
            height: 320,
            type: "thumb",
          },
        },
      });
    },
    imageUrl(): string {
      return buildUrl(this.imageId, {
        transformations: {
          resize: {
            height: 1280,
          },
        },
      });
    },
  },
});
</script>
