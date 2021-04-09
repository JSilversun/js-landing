<template>
  <v-container fluid class="grey darken-4">
    <h1 class="text-center py-5">Portfolio</h1>
    <v-col cols="12" md="10" class="mx-auto">
      <card-list-transition class="row">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="project in projects"
          :key="project.name"
        >
          <project-detail v-bind="project" />
        </v-col>
      </card-list-transition>
    </v-col>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ExpandableCard from "@/components/ExpandableCard.vue";
import ProjectDetail from "@/components/ProjectDetail.vue";
import CardListTransition from "@/CardListTrasition.vue";

export default defineComponent({
  name: "Portfolio",
  components: { CardListTransition, ProjectDetail, ExpandableCard },
  data() {
    return {
      projects: [
        {
          duration: "1y",
          photoUrl:
            "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
          name: "MarketPlace Photologo",
          mainTechnologies: ["Django", "Pytest", "Postgres", "React", "Saleor"],
          photos: [
            {
              title: "Some title 1",
              photo:
                "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
            },
            {
              title: "Some title 2",
              photo:
                "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
            },
          ],
          areas: [
            {
              name: "DevOps",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
              color: "orange",
              technologies: ["Jenkins"],
            },
            {
              name: "Backend",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
              color: "cyan",
              technologies: [
                "Django",
                "Pytest",
                "Python",
                "Braintree",
                "Chargebee",
                "AWS S3",
                "REST",
              ],
            },
            {
              name: "Frontend",
              color: "pink",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
              technologies: ["React", "MobX"],
            },
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
          hiddenExtraDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        },
        {
          name: "RankCountry",
          duration: "4m",
          photoUrl:
            "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/projects%2Frank-country%2Frank-country.png?alt=media",
          photos: [
            {
              title: "Some title 1",
              photo:
                "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
            },
            {
              title: "Some title 2",
              photo:
                "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
            },
          ],
          mainTechnologies: ["NodeJS", "Loopback 3", "ForestAdmin"],
          areas: [
            {
              name: "Backend",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
              color: "cyan",
              technologies: ["NodeJS", "Loopback 3", "ForestAdmin", "REST"],
            },
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
          hiddenExtraDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        },
        {
          name: "Endeavour Mining - Access Manager",
          duration: "4m",
          photoUrl:
            "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
          photos: [
            {
              title: "Some title 1",
              photo:
                "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
            },
            {
              title: "Some title 2",
              photo:
                "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
            },
          ],
          mainTechnologies: ["NodeJS", "Loopback 3", "Passport"],
          areas: [
            {
              name: "Backend",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
              color: "cyan",
              technologies: ["NodeJS", "TypeORM", "Inversify", "REST"],
            },
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
          hiddenExtraDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        },
        {
          name: "Endeavour Mining - Reconciliation",
          duration: "8m",
          photos: [
            {
              title: "Some title 1",
              photo:
                "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
            },
            {
              title: "Some title 2",
              photo:
                "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
            },
          ],
          photoUrl:
            "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
          mainTechnologies: ["NodeJS", "Express", "TypeORM", "Bull", "Redis"],
          areas: [
            {
              name: "Backend",
              color: "cyan",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
              technologies: [
                "NodeJS",
                "TypeORM",
                "Inversify",
                "Bull",
                "Redis",
                "REST",
              ],
            },
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
          hiddenExtraDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        },
        {
          name: "+Tracker",
          photos: [
            {
              title: "Some title 1",
              photo:
                "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
            },
            {
              title: "Some title 2",
              photo:
                "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
            },
          ],
          duration: "1y",
          photoUrl:
            "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
          mainTechnologies: ["VueJS", "Vuetify", "Hasura", "Firebase"],
          areas: [
            {
              name: "Frontend",
              color: "pink",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
              technologies: [
                "VueJS",
                "Vuex",
                "Vuetify",
                "Firebase Authentication",
                "ECharts",
              ],
            },
            {
              name: "Backend",
              color: "cyan",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
              technologies: [
                "NodeJS",
                "TypeScript",
                "Hasura",
                "GraphQL",
                "Prisma",
              ],
            },
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
          hiddenExtraDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        },
        {
          name: "Personal Landing",
          photos: [
            {
              title: "Some title 1",
              photo:
                "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
            },
            {
              title: "Some title 2",
              photo:
                "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
            },
          ],
          duration: "1w",
          photoUrl:
            "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
          mainTechnologies: ["VueJS", "Firebase"],
          areas: [
            {
              name: "Frontend",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
              color: "pink",
              technologies: ["VueJS", "Firebase", "CSS"],
            },
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
          hiddenExtraDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        },
      ],
    };
  },
});
</script>
