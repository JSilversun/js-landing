<template>
  <xyz-transition appear-visible xyz="fade">
    <v-container fluid class="grey darken-4">
      <section-title>Education</section-title>
      <v-row>
        <v-col cols="12" md="10" offset-md="1">
          <v-timeline :dense="$vuetify.breakpoint.mdAndDown">
            <xyz-transition-group
              xyz="fade down stagger"
              duration="3"
              appear-visible
            >
              <v-timeline-item
                v-for="{
                  institution,
                  description,
                  period,
                  logoUrl,
                  photos,
                } in educationItems"
                :key="institution"
              >
                <template v-slot:icon>
                  <v-avatar size="32" color="gray">
                    <v-img :src="logoUrl" />
                  </v-avatar>
                </template>
                <v-card outlined>
                  <div class="hoverable-card">
                    <v-card-title> {{ institution }} </v-card-title>
                    <v-card-subtitle>{{ period }}</v-card-subtitle>
                    <v-card-text>
                      {{ description }}
                    </v-card-text>
                    <v-card-text>
                      <v-row class="mr-1">
                        <v-col
                          v-for="({ imageId, title }, index) in photos"
                          :key="title"
                          :cols="12 / Math.min(maxVisiblePhotos, photos.length)"
                          class="pr-0"
                          v-show="index < maxVisiblePhotos"
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
                  </div>
                </v-card>
              </v-timeline-item>
            </xyz-transition-group>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </xyz-transition>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import SectionTitle from "@/components/core/SectionTitle.vue";
import ExpandableImage from "@/components/core/ExpandableImage.vue";
import { educationItems } from "@/data/education";

export default defineComponent({
  name: "Education",
  components: { ExpandableImage, SectionTitle },
  data() {
    return {
      educationItems,
    };
  },
  computed: {
    maxVisiblePhotos() {
      return this.$vuetify.breakpoint.smAndDown ? 2 : 3;
    },
  },
});
</script>
