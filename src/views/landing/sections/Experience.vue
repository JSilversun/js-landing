<template>
  <xyz-transition appear-visible xyz="fade">
    <v-container fluid>
      <section-title>Experience</section-title>
      <v-col cols="12" md="10" class="mx-auto">
        <v-row>
          <v-col cols="12" md="6" class="d-flex flex-column justify-center">
            <div>
              <h1 class="pt-5 text-h5 primary--text text-uppercase">
                {{ experienceSummary.subtitle }}
              </h1>
              <h2 class="py-3 text-h4">I'm specialized in web technologies</h2>
              <p class="py-2 subtitle-1 mb-0">
                {{ experienceSummary.description }}
              </p>
              <div
                v-intersect="{
                  handler: setIntersected,
                  options: { threshold: [0.05] },
                }"
              >
                <div
                  v-for="areaItem in areasItems"
                  :key="areaItem.area.name"
                  class="py-3"
                >
                  <div
                    :class="`subtitle-1 font-weight-bold ${areaItem.area.color}--text`"
                  >
                    {{ areaItem.area.name }}
                  </div>
                  <div class="py-2">
                    {{ areaItem.description }}
                  </div>
                  <div class="d-flex">
                    <div
                      class="pr-5 d-flex flex-column justify-center align-center"
                      v-for="technology in areaItem.technologies"
                      :key="`${areaItem.name}-${technology.name}`"
                    >
                      <div class="text--secondary py-1 font-weight-bold">
                        {{ technology.name }}
                      </div>
                      <v-progress-circular
                        :aria-label="`${areaItem.area.name} experience level`"
                        width="5"
                        :color="areaItem.area.color"
                        :rotate="-90"
                        :size="42"
                        :value="isIntersecting ? technology.progress : 0"
                      >
                        {{ technology.progress }}
                      </v-progress-circular>
                    </div>
                  </div>
                  <v-divider class="mt-7" />
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="d-flex flex-column justify-center">
            <card-list-transition>
              <base-card
                class="mb-2 hoverable-card"
                :key="organization"
                v-for="{
                  organization,
                  period,
                  description,
                  photos,
                } of experienceItems"
              >
                <v-card-title> {{ organization }} </v-card-title>
                <v-card-subtitle>{{ period }}</v-card-subtitle>
                <v-card-text>
                  {{ description }}
                </v-card-text>
                <v-card-text>
                  <v-row class="mr-1">
                    <v-col
                      v-for="{ imageId, title } in photos"
                      :key="title"
                      :cols="12 / photos.length"
                      class="pr-0"
                    >
                      <expandable-image
                        :title="title"
                        :image-id="imageId"
                        class="grey darken-4 rounded"
                        height="150"
                      />
                    </v-col>
                  </v-row>
                </v-card-text>
              </base-card>
            </card-list-transition>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </xyz-transition>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import SectionTitle from "@/components/core/SectionTitle.vue";
import ExpandableImage from "@/components/core/ExpandableImage.vue";
import CardListTransition from "@/components/transitions/CardListTrasition.vue";
import {
  areasItems,
  experienceItems,
  experienceSummary,
} from "@/data/experience";
import BaseCard from "@/components/core/BaseCard.vue";

export default defineComponent({
  name: "Experience",
  components: {
    BaseCard,
    CardListTransition,
    ExpandableImage,
    SectionTitle,
  },
  data() {
    return {
      isIntersecting: false,
      areasItems,
      experienceSummary,
      experienceItems,
    };
  },
  methods: {
    setIntersected(entries: IntersectionObserverEntry[]) {
      const { isIntersecting } = entries[0];
      setTimeout(() => (this.isIntersecting = isIntersecting), 400);
    },
  },
});
</script>
