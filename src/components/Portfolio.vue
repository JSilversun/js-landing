<template>
  <v-container fluid>
    <h1 class="text-center py-5">Portfolio</h1>
    <v-col cols="12" md="8" lg="10" class="mx-auto">
      <v-row>
        <v-col cols="4" v-for="project in projects" :key="project.name">
          <custom-card
            :thumbnail-url="project.photoUrl"
            :title="project.name"
            :description="project.description"
            :additional-description="project.additionalDescription"
            :tags="project.mainTechnologies"
          >
            <template v-slot:actions>
              <v-btn text class="primary--text">See details</v-btn>
            </template>
          </custom-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import CustomCard from "@/components/CustomCard.vue";

export default defineComponent({
  name: "Portfolio",
  components: { CustomCard },
  data() {
    return {
      projects: [
        {
          duration: "1y",
          photoUrl:
            "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
          name: "MarketPlace Photologo",
          mainTechnologies: ["Django", "Pytest", "Postgres", "React", "Saleor"],
          areas: [
            {
              name: "DevOps",
              technologies: ["Jenkins"],
            },
            {
              name: "Backend",
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
              technologies: ["React", "MobX"],
            },
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
          additionalDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        },
        {
          duration: "4m",
          photoUrl:
            "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/projects%2Frank-country%2Frank-country.png?alt=media",
          name: "RankCountry",
          mainTechnologies: ["NodeJS", "Loopback 3", "ForestAdmin"],
          areas: [
            {
              name: "Backend",
              technologies: ["NodeJS", "Loopback 3", "ForestAdmin", "REST"],
            },
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
          additionalDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        },
        {
          duration: "4m",
          photoUrl:
            "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
          name: "Endeavour Mining - Access Manager",
          mainTechnologies: ["NodeJS", "Loopback 3", "Passport"],
          areas: [
            {
              name: "Backend",
              technologies: ["NodeJS", "TypeORM", "Inversify", "REST"],
            },
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
          additionalDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        },
        {
          duration: "8m",
          photoUrl:
            "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
          name: "Endeavour Mining - Reconciliation",
          mainTechnologies: ["NodeJS", "Express", "TypeORM", "Bull", "Redis"],
          areas: [
            {
              name: "Backend",
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
          additionalDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        },
        {
          duration: "1y",
          photoUrl:
            "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
          name: "+Tracker",
          mainTechnologies: ["VueJS", "Vuetify", "Hasura", "Firebase"],
          areas: [
            {
              name: "Frontend",
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
          additionalDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        },
        {
          duration: "1w",
          photoUrl:
            "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
          name: "Personal Landing",
          mainTechnologies: ["VueJS", "Firebase"],
          areas: [
            {
              name: "Frontend",
              technologies: ["VueJS", "Firebase", "CSS"],
            },
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
          additionalDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        },
      ],
    };
  },
});
</script>
