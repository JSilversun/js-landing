<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="rounded-lg"
      :elevation="hover ? 10 : 0"
      outlined
      :class="{ 'on-hover': hover }"
    >
      <v-img class="card-img" :src="thumbnailUrl"></v-img>
      <div class="card-body">
        <v-card-title class="pb-1">{{ title }}</v-card-title>

        <v-card-text class="pb-0">
          <p>
            {{ description }}
          </p>
          <p class="extra_info">
            {{ additionalDescription }}
          </p>
        </v-card-text>
        <div class="card-bottom">
          <v-card-text class="py-0">
            <v-chip v-for="tag in tags" :key="tag" class="mr-1" small>
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
  name: "CustomCard",
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
    additionalDescription: {
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
.extra_info {
  opacity: 0;
  transition: opacity 200ms;
}

.card-img {
  height: 200px;
  transition: height 200ms;
}

.card-body {
  height: 200px;
  transition: height 200ms;
}

.card-bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
}

.on-hover {
  .extra_info {
    opacity: 1;
  }
  .v-image {
    height: 150px;
  }
  .card-body {
    height: 250px;
  }
}
</style>
