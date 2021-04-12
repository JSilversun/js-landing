<template>
  <v-container fluid class="pb-10">
    <h1 class="text-center py-5">Posts</h1>
    <card-list-transition class="row col-md-10 mx-auto pa-0">
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="post in postsWithUrl"
        :key="post.name"
      >
        <expandable-card
          :thumbnail-url="post.photoUrl"
          :title="post.name"
          :description="post.description"
          :hidden-extra-description="post.hiddenExtraDescription"
          :tags="post.tags"
        >
          <template v-slot:actions>
            <v-btn text class="pink--text" :href="post.url" target="_blank">
              See details
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
import { Post } from "@/types/portfolio";
import buildUrl from "cloudinary-build-url";

interface PostWithUrl extends Post {
  photoUrl: string;
}

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
  computed: {
    postsWithUrl(): PostWithUrl[] {
      return this.posts.map((post) => ({
        ...post,
        photoUrl: buildUrl(post.imageId, {
          transformations: {
            resize: {
              width: 600,
            },
          },
        }),
      }));
    },
  },
});
</script>
