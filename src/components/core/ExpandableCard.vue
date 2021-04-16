<template>
  <base-card
    v-bind="$attrs"
    v-on="$listeners"
    class="expandable-card rounded-lg full-height d-flex flex-column hoverable-card"
  >
    <div class="image-container overflow-hidden" style="height: 200px">
      <v-img class="card-img" :src="thumbnailUrl" />
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
        <v-card-text class="pt-0">
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
    hiddenExtraDescription: {
      type: String,
      default: "",
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

.expandable-card__body {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.card-img {
  transition: all $animation-duration;
}

.expandable-card:hover {
  .image_container::before {
    opacity: 0.7;
  }
  .expandable-card__title {
    color: var(--v-primary-base);
  }
  .card-img {
    transform: scale(1.15);
  }
  .extra_info {
    opacity: 1;
  }
}
</style>
