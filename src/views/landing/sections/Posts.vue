<template>
  <v-container fluid class="pb-10">
    <h1 class="text-center py-5">Posts</h1>
    <card-list-transition class="row col-md-11 col-xl-10 mx-auto pa-0">
      <v-col cols="12" sm="6" md="4" v-for="post in posts" :key="post.name">
        <expandable-card
          :thumbnail-url="post.thumbnailUrl"
          :title="post.name"
          :description="post.description"
          :hidden-extra-description="post.hiddenExtraDescription"
          :tags="post.tags"
        >
          <template v-slot:actions>
            <v-btn
              text
              class="primary--text"
              :href="post.url"
              target="_blank"
              rel="noreferrer"
              aria-label="Learn more"
            >
              Learn more
            </v-btn>
          </template>
        </expandable-card>
      </v-col>
    </card-list-transition>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ExpandableCard from "@/components/core/ExpandableCard.vue";
import CardListTransition from "@/components/transitions/CardListTrasition.vue";
import { posts } from "@/data/posts";

export default defineComponent({
  name: "Posts",
  components: {
    ExpandableCard,
    CardListTransition,
  },
  data() {
    return {
      posts,
    };
  },
});
</script>
