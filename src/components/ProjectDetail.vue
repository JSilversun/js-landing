<template>
  <v-dialog
    v-model="isOpen"
    :fullscreen="$vuetify.breakpoint.mobile"
    v-bind="$attrs"
  >
    <template v-slot:activator="{ on, attrs }">
      <expandable-card
        :thumbnail-url="photoUrl"
        :title="name"
        :description="description"
        :hidden-extra-description="hiddenExtraDescription"
        :tags="mainTechnologies"
      >
        <template v-slot:actions>
          <v-btn text class="primary--text" v-on="on" v-bind="attrs">
            See details
          </v-btn>
        </template>
      </expandable-card>
    </template>
    <v-card>
      <v-card-title class="headline d-flex">
        <p class="ma-0">
          {{ name }}
        </p>
        <v-spacer />
        <v-btn icon @click="isOpen = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle class="py-1"> 1y </v-card-subtitle>
      <v-container fluid class="pt-0">
        <v-row>
          <v-col cols="12" md="4">
            <v-card-text>
              <p>
                {{ description }}
                {{ hiddenExtraDescription }}
              </p>
              <div v-for="area in areas" :key="`${name}-${area.name}`">
                <v-subheader :class="`px-0 ${area.color}--text subtitle-2`">
                  {{ area.name }}
                </v-subheader>
                <p>
                  {{ area.description }}
                </p>
                <v-chip
                  small
                  class="mr-2 mb-2"
                  v-for="technology in area.technologies"
                  :key="technology"
                >
                  {{ technology }}
                </v-chip>
              </div>
            </v-card-text>
          </v-col>
          <v-col cols="12" md="8">
            <v-card-text>
              <div class="rounded overflow-hidden">
                <v-carousel
                  v-model="activeSlideIndex"
                  cycle
                  delimiter-icon="mdi-minus"
                  :height="carouselHeight"
                  hide-delimiters
                  class="position-relative"
                >
                  <v-carousel-item
                    v-for="({ photo }, index) in photos"
                    :key="`${name}-carousel-photo-${index}`"
                  >
                    <v-img :src="photo" class="full-height" />
                  </v-carousel-item>
                </v-carousel>
                <p class="subtitle-1 pa-3 gray darken-2 ma-0">
                  {{ photos[activeSlideIndex].title }}
                </p>
              </div>
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { PhotoDetail, ProjectArea } from "@/types/project";
import ExpandableCard from "@/components/ExpandableCard.vue";
import { BreakpointName } from "vuetify/types/services/breakpoint";
import { PartialRecord } from "@/types/types";

export default defineComponent({
  name: "ProjectDetail",
  components: {
    ExpandableCard,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
      required: true,
    },
    hiddenExtraDescription: {
      type: String,
      required: true,
    },
    photos: {
      type: Array as PropType<PhotoDetail[]>,
      required: true,
    },
    areas: {
      type: Array as PropType<ProjectArea[]>,
      required: true,
    },
    mainTechnologies: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  data() {
    return {
      activeSlideIndex: 0,
      isOpen: false,
    };
  },
  computed: {
    carouselHeight(): number {
      const defaultHeight = 500;
      const heights: PartialRecord<BreakpointName, number> = {
        md: 400,
        xs: 200,
        sm: 300,
      };
      return heights[this.$vuetify.breakpoint.name] || defaultHeight;
    },
  },
});
</script>
