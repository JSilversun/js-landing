<template>
  <v-dialog
    v-model="isOpen"
    :fullscreen="$vuetify.breakpoint.mobile"
    v-bind="$attrs"
  >
    <template v-slot:activator="{ on, attrs }">
      <expandable-card
        :thumbnail-url="thumbnailUrl"
        :title="name"
        :description="description"
        :hidden-extra-description="hiddenExtraDescription"
        :tags="mainTechnologies"
      >
        <template v-slot:actions>
          <v-btn
            text
            class="primary--text"
            v-on="on"
            v-bind="attrs"
            aria-label="Learn more"
          >
            Learn more
          </v-btn>
        </template>
      </expandable-card>
    </template>
    <base-card>
      <v-card-title class="headline d-flex flex-nowrap align-start text-break">
        <a v-if="url" :href="url" target="_blank">
          {{ name }}
        </a>
        <p v-else class="ma-0">
          {{ name }}
        </p>
        <v-spacer />
        <v-btn icon @click="isOpen = false">
          <v-icon>$mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle class="py-1" v-if="durationMilliseconds">
        {{ $filters.humanizeDuration(durationMilliseconds) }}
      </v-card-subtitle>
      <v-container fluid class="pt-0">
        <v-row>
          <v-col cols="12" md="4">
            <v-card-text>
              <p>
                {{ description }}.
                {{ hiddenExtraDescription }}
              </p>
              <div
                v-for="areaItem in areaItems"
                :key="`${name}-${areaItem.area.name}`"
              >
                <v-subheader
                  :class="`px-0 ${areaItem.area.color}--text subtitle-2`"
                >
                  {{ areaItem.area.name }}
                </v-subheader>
                <p>
                  {{ areaItem.description }}
                </p>
                <v-chip
                  small
                  class="mr-2 mb-2"
                  v-for="technology in areaItem.technologies"
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
                  :continuous="false"
                  delimiter-icon="$mdi-minus"
                  :height="carouselHeight"
                  hide-delimiters
                  class="position-relative"
                >
                  <v-carousel-item
                    class="background darken-5"
                    v-for="({ imageUrl }, index) in photos"
                    :key="`${name}-carousel-photo-${index}`"
                  >
                    <base-image :src="imageUrl" class="full-height" contain />
                  </v-carousel-item>
                </v-carousel>
                <p
                  class="subtitle-1 pa-3 background darken-3 ma-0 d-flex justify-space-between"
                >
                  <span>
                    {{ photos[activeSlideIndex].title }}
                  </span>
                  <span>{{ activeSlideIndex + 1 }} / {{ photos.length }}</span>
                </p>
              </div>
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </base-card>
  </v-dialog>
</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import ExpandableCard from "@/components/core/ExpandableCard.vue";
import { BreakpointName } from "vuetify/types/services/breakpoint";
import { PartialRecord } from "@/types/generics";
import { ProfessionAreaItem } from "@/types/experience";
import { DateRangeData } from "@/types/portfolio";
import { PhotoDetail } from "@/types/user";
import BaseImage from "@/components/core/BaseImage.vue";
import BaseCard from "@/components/core/BaseCard.vue";

export default defineComponent({
  name: "ProjectDetail",
  components: {
    BaseCard,
    BaseImage,
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
    hiddenExtraDescription: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
    timeRange: {
      type: Object as PropType<DateRangeData>,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
    photos: {
      type: Array as PropType<PhotoDetail[]>,
      required: true,
    },
    areaItems: {
      type: Array as PropType<ProfessionAreaItem[]>,
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
    durationMilliseconds(): number | null {
      if (!this.timeRange) return null;
      const endDate = this.timeRange.endDate
        ? new Date(this.timeRange.endDate)
        : new Date();
      const startDate = new Date(this.timeRange.startDate);
      return endDate.getTime() - startDate.getTime();
    },
  },
});
</script>
