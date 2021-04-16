<template>
  <base-card
    v-bind="$attrs"
    v-on="$listeners"
    class="expandable-card full-height d-flex flex-column"
  >
    <div class="expandable-card__thumbnail-container">
      <v-img
        class="expandable-card__thumbnail full-height"
        :src="thumbnailUrl"
      />
    </div>
    <div class="expandable-card__body d-flex flex-column flex-grow-1">
      <v-card-title class="expandable-card__title pb-1">
        {{ title }}
      </v-card-title>
      <v-card-text class="pb-0">
        <p>
          {{ description }}
        </p>
      </v-card-text>
      <v-spacer />
      <div class="card-bottom">
        <v-card-text class="py-0">
          <v-chip v-for="tag in tags" :key="tag" class="mr-1 mb-1" small>
            {{ tag }}
          </v-chip>
        </v-card-text>
        <v-card-actions class="justify-end">
          <slot name="actions"></slot>
        </v-card-actions>
      </div>
    </div>
  </base-card>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import BaseCard from "@/components/core/BaseCard.vue";
import ExpandableImage from "@/components/core/ExpandableImage.vue";

export default defineComponent({
  name: "ExpandableCard",
  components: { ExpandableImage, BaseCard },
  props: {
    thumbnailUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
<style lang="scss">
@import "~vuetify/src/styles/settings/_variables";

$animation-duration: 200ms;

@media #{map-get($display-breakpoints, 'md-and-down')} {
  .expandable-card__thumbnail-container {
    height: 140px;
  }
}

@media #{map-get($display-breakpoints, 'lg-and-up')} {
  .expandable-card__thumbnail-container {
    height: 200px;
  }
}

.expandable-card__body {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.expandable-card__body::before {
  z-index: -1;
  background: var(--v-background-darken2);
  opacity: 0;
  transition: opacity 200ms;
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  margin-top: 0;
}

.expandable-card__thumbnail-container {
  overflow: hidden;
}

.expandable-card__thumbnail {
  transition: all $animation-duration;
}

.expandable-card:hover {
  .expandable-card__body::before {
    opacity: 0.7;
  }
  .expandable-card__title {
    color: var(--v-primary-base);
  }
  .expandable-card__thumbnail {
    transform: scale(1.15);
  }
}
</style>
