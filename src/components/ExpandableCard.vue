<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="expandable-card rounded-lg full-height d-flex flex-column"
      outlined
      :class="{ 'on-hover': hover }"
    >
      <v-img max-height="200" class="card-img" :src="thumbnailUrl" />
      <div class="expandable-card__body d-flex flex-column flex-grow-1">
        <v-card-title class="pb-1" :class="{ 'primary--text': hover }">
          {{ title }}
        </v-card-title>
        <v-card-text class="pb-0">
          <p>
            {{ description }}
          </p>
          <p class="extra_info">
            {{ hiddenExtraDescription }}
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
    </v-card>
  </v-hover>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "ExpandableCard",
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
  data() {
    return {};
  },
});
</script>
<style lang="scss">
@import "~vuetify/src/styles/settings/_variables";
.expandable-card__body {
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.expandable-card__body::before {
  z-index: -1;
  background: var(--v-gray-darken1);
  opacity: 0;
  transition: opacity 200ms;
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  margin-top: 0;
}
.expandable-card:hover .expandable-card__body::before {
  opacity: 0.7;
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .on-hover {
    .extra_info {
      height: 100px;
    }
    .card-img {
      height: 100px;
    }
  }
}

@media #{map-get($display-breakpoints, 'md-only')} {
  .on-hover {
    .extra_info {
      height: 60px;
    }
    .card-img {
      height: 140px;
    }
  }
}

@media #{map-get($display-breakpoints, 'lg-and-up')} {
  .on-hover {
    .extra_info {
      height: 50px;
    }
    .card-img {
      height: 150px;
    }
  }
}

.card-img {
  height: 200px;
  transition: height 300ms;
}
.extra_info {
  height: 0;
  opacity: 0;
  transition: height 300ms, opacity 200ms;
}
.on-hover {
  .extra_info {
    opacity: 1;
  }
}
</style>
