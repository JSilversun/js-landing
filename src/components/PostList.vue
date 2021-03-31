<template>
  <v-container>
    <h1 class="text-center py-5">Posts</h1>
    <v-row class="col-md-10 mx-auto">
      <v-col cols="4" v-for="post in posts" :key="post.name">
        <custom-card
          :thumbnail-url="post.photoUrl"
          :title="post.name"
          :description="post.description"
          :additional-description="post.additionalDescription"
          :tags="post.tags"
        >
          <template v-slot:actions>
            <v-btn text class="pink--text">See details</v-btn>
          </template>
        </custom-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import CustomCard from "@/components/CustomCard.vue";

export default defineComponent({
  name: "PostList",
  components: {
    CustomCard,
  },
  data() {
    return {
      posts: [
        {
          name: "Pytest beginners guide",
          description:
            "Practical guide on how to use and setup pytest for unit testing",
          additionalDescription:
            "Get to know how use pytest fixtures to keep your unit tests as DRY as possible",
          tags: ["Python", "Pytest", "Unit test"],
        },
        {
          name: "Hasura GraphQL Engine Practical Guide",
          description:
            "Practical guide to build a GraphQL API quickly using hasura",
          additionalDescription:
            "Clone a repository, run a couple of commands and get a GraphQL API running in no time",
          tags: ["Hasura", "GraphQL", "Backend", "Postgres"],
        },
        {
          name: "Use prisma to build a group by endpoint",
          description:
            "How you build a GraphQL endpoint to group by data in a database table",
          additionalDescription:
            "Use nexus to build you GraphQL schema to get your endpoint running",
          tags: ["NodeJS", "Prisma", "Backend"],
        },
      ],
    };
  },
});
</script>
