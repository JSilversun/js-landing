<template>
  <v-container fluid>
    <v-container class="col-xl-6 mx-auto pb-10">
      <section-title>Bloopers</section-title>
      <p class="text-h6">
        Who said only movies and TV shows are allowed to have them? Here we have
        some pictures of my beautiful journey building this landing page
      </p>
      <v-sheet class="pa-4 rounded-lg background darken-5">
        <v-slide-group mandatory v-model="activePhotoIndex" show-arrows>
          <v-slide-item
            v-for="photo in photos"
            :key="`${photo.title}`"
            v-slot="{ active, toggle }"
          >
            <v-img
              :src="photo.thumbnailUrl"
              class="ma-2 slider-image rounded-lg cursor-pointer"
              :class="{
                'active-image': active,
              }"
              :aria-label="`${photo.title} thumbnail`"
              height="100"
              width="150"
              @click="toggle"
            />
          </v-slide-item>
        </v-slide-group>

        <v-expand-transition>
          <v-sheet
            v-if="activePhotoIndex != null"
            class="mx-2 mt-2 transparent"
          >
            <v-carousel
              v-model="activePhotoIndex"
              :continuous="false"
              delimiter-icon="$mdi-minus"
              :height="carouselHeight"
              hide-delimiters
              class="position-relative"
            >
              <v-carousel-item
                v-for="({ imageUrl, title }, index) in photos"
                :key="`${title}-carousel-photo-${index}`"
              >
                <base-image
                  :src="imageUrl"
                  :aria-label="title"
                  class="full-height rounded-lg"
                />
              </v-carousel-item>
            </v-carousel>
            <p class="subtitle-1 ma-0 pt-2">
              {{ photos[activePhotoIndex].title }}
            </p>
          </v-sheet>
        </v-expand-transition>
      </v-sheet>
    </v-container>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import SectionTitle from "@/components/core/SectionTitle.vue";
import BaseImage from "@/components/core/BaseImage.vue";
import { photos } from "@/data/profile";
import { PartialRecord } from "@/types/generics";
import { BreakpointName } from "vuetify/types/services/breakpoint";

export default defineComponent({
  components: {
    BaseImage,
    SectionTitle,
  },
  name: "Bloopers",
  data() {
    return {
      activePhotoIndex: 0,
      photos,
    };
  },
  computed: {
    carouselHeight(): number {
      const defaultHeight = 500;
      const heights: PartialRecord<BreakpointName, number> = {
        md: 350,
        xs: 250,
        sm: 300,
      };
      return heights[this.$vuetify.breakpoint.name] || defaultHeight;
    },
  },
});
</script>
<style lang="scss">
.slider-image {
  border: 2px solid transparent;
  transition: border 300ms;
}
.active-image {
  border-color: var(--v-primary-base);
}
</style>
