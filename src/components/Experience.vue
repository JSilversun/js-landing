<template>
  <opacity-transition-intersection>
    <v-container>
      <section-title>Experience</section-title>
      <v-row class="col-md-10 mx-auto">
        <v-col cols="12" md="6" class="d-flex flex-column justify-center">
          <div>
            <h1 class="pt-5 text-h5 primary--text text-uppercase">
              having 4 years of experience
            </h1>
            <h2 class="py-3 text-h4">
              I'm specialized in
              <span class="primary--text">web technologies</span>
            </h2>
            <p class="py-2 subtitle-1">
              As a fullstack developer I have worked in almost every department
              related to web software development, from database modeling,
              coding triggers, procedures to structure and maintain frontend
              architectures and building REST and GraphQL API's.
            </p>
            <div
              v-intersect="{
                handler: setIntersected,
                options: { threshold: [0.05] },
              }"
            >
              <div v-for="area in areas" :key="area.name" class="py-3">
                <div :class="`subtitle-1 font-weight-bold ${area.color}--text`">
                  {{ area.name }}
                </div>
                <div class="py-2">
                  {{ area.description }}
                </div>
                <div class="d-flex">
                  <div
                    class="pr-5 d-flex flex-column justify-center align-center"
                    v-for="technology in area.technologies"
                    :key="`${area.name}-${technology.name}`"
                  >
                    <div class="text--secondary py-1">
                      {{ technology.name }}
                    </div>
                    <v-progress-circular
                      width="5"
                      :color="area.color"
                      :rotate="-90"
                      :size="42"
                      :value="isIntersecting ? technology.progress : 0"
                    >
                      {{ technology.progress }}
                    </v-progress-circular>
                  </div>
                </div>
                <v-divider class="mt-4" />
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column justify-center">
          <v-card
            outlined
            class="mb-2 hoverable-card"
            :key="organization"
            v-for="{
              organization,
              period,
              description,
              photos,
            } of experienceItems"
          >
            <v-card-title> {{ organization }} </v-card-title>
            <v-card-subtitle>{{ period }}</v-card-subtitle>
            <v-card-text>
              {{ description }}
            </v-card-text>
            <v-card-text>
              <v-row class="mr-1">
                <v-col
                  v-for="{ imageUrl, thumbnailUrl, title } in photos"
                  :key="title"
                  :cols="12 / photos.length"
                  class="pr-0"
                >
                  <expandable-image
                    :title="title"
                    :image-url="imageUrl"
                    :thumbnail-url="thumbnailUrl"
                    class="grey darken-4 rounded"
                    height="150"
                  ></expandable-image>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </opacity-transition-intersection>
</template>
<script lang="ts">
import OpacityTransitionIntersection from "@/components/OpacityTransitionIntersection.vue";
import { defineComponent } from "@vue/composition-api";
import SectionTitle from "@/components/SectionTitle.vue";
import ExpandableImage from "@/components/ExpandableImage.vue";

export default defineComponent({
  name: "Experience",
  components: {
    ExpandableImage,
    SectionTitle,
    OpacityTransitionIntersection,
  },
  data() {
    return {
      isIntersecting: false,
      areas: [
        {
          name: "Backend",
          description:
            "I have built several REST API's, for Python I have used Django and for NodeJS, express and loopback. However I have also built and maintain GraphQL API's using hasura and prisma. Besides I'm full stack I have more experience in the backend than any other area.",
          color: "cyan",
          technologies: [
            {
              name: "REST",
              progress: 80,
            },
            {
              name: "GraphQL",
              progress: 90,
            },
            {
              name: "NodeJS",
              progress: 80,
            },
            {
              name: "Django",
              progress: 70,
            },
          ],
        },
        {
          name: "Frontend",
          description:
            "I'm pretty skilled in the frontend as well using libraries/frameworks like Vue and React, I have built and structure entire frontends using Vue + Vuetify, but for react I have developed specific components using either MobX or Redux.",
          color: "pink",
          technologies: [
            {
              name: "Vue",
              progress: 90,
            },
            {
              name: "Vuetify",
              progress: 90,
            },
            {
              name: "React",
              progress: 60,
            },
            {
              name: "CSS",
              progress: 70,
            },
          ],
        },
        {
          name: "Database",
          description:
            "As mentioned, I also have modeled relational databases, mostly postgres but some based on MySQL as well, I occasionally code triggers, procedures and views when needed.",
          color: "purple",
          technologies: [
            {
              name: "Postgres",
              progress: 90,
            },
            {
              name: "MySQL",
              progress: 70,
            },
          ],
        },
      ],
      experienceItems: [
        {
          color: "white",
          logoUrl:
            "http://4.bp.blogspot.com/-zjOQNrvFY3U/WB4IiTdq6EI/AAAAAAAAAUE/HE_bkYqhAj8vULilPoKXjnH3HreYnIU-ACK4B/s400/logo_unet.gif",
          organization: "Tiendas Ciro S. A.",
          description:
            "I graduated as Cum Laude in December 2020, it was a great honor and experience, I'm sincerely grateful and happy with my university and my professors specifically for teaching me so much!",
          period: "2012 - 2020",
          photos: [
            {
              title: "Coffee meeting with coworkers",
              thumbnailUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/experience%2Fciro%2Fciro1_thumb.jpg?alt=media",
              imageUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/experience%2Fciro%2Fciro1_thumb.jpg?alt=media",
            },
            {
              title: "End of the year party in Tiendas Ciro S. A.",
              thumbnailUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/experience%2Fciro%2Fciro2_thumb.jpg?alt=media",
              imageUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/experience%2Fciro%2Fciro2_thumb.jpg?alt=media",
            },
          ],
        },
        {
          logoUrl:
            "https://media.licdn.com/dms/image/C4D0BAQEdL87TMUgWag/company-logo_200_200/0?e=2159024400&v=beta&t=NkHmSn5reOmggy_cCNLcoHh0andWfiNpw6xCySqA9mw",
          organization: "PLUSTEAM C. A.",
          description:
            "I decided to invest in myself so I purchased one year subscription in platzi, until now I have completed 35 courses from Javascript and Vue with ease, I'm looking forward to explore different fields and areas of knowledge with platforms that help students to learn new things on demand",
          photos: [
            {
              title: "Celebrating a coworker's birthday",
              thumbnailUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/experience%2Fplusteam%2Fplusteam_thumb1.jpg?alt=media",
              imageUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/experience%2Fplusteam%2Fplusteam_thumb1.jpg?alt=media",
            },
            {
              title: "Celebrating 2 years in the company",
              thumbnailUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/experience%2Fplusteam%2Fplusteam_thumb5.jpg?alt=media",
              imageUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/experience%2Fplusteam%2Fplusteam_thumb5.jpg?alt=media",
            },
          ],
          period: "2020 - 2021",
        },
      ],
    };
  },
  methods: {
    setIntersected(entries: IntersectionObserverEntry[]) {
      const { isIntersecting } = entries[0];
      setTimeout(() => (this.isIntersecting = isIntersecting), 400);
    },
  },
});
</script>
