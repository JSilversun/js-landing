<template>
  <v-container>
    <h1 class="text-center py-5">Experience</h1>
    <v-row class="col-md-10 mx-auto">
      <v-col cols="6" class="d-flex flex-column justify-center">
        <div>
          <h1 class="pt-5 text-h5 primary--text">HAVING 4 YEARS EXPERIENCE</h1>
          <h2 class="py-3 text-h4">
            I'm specialized in
            <span class="primary--text">web technologies</span>
          </h2>
          <p class="py-2 subtitle-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            cupiditate dignissimos dolorum eaque earum exercitationem laborum
            magnam, nostrum perferendis quas repellendus sed sit ullam vel
            voluptatum. Ipsam minima saepe totam?
          </p>
          <div v-for="area in areas" :key="area.name" class="py-3">
            <span :class="`subtitle-1 font-weight-bold ${area.color}--text`">
              {{ area.name }}
            </span>
            <div class="d-flex">
              <div
                class="pr-5 d-flex flex-column justify-center align-center"
                v-for="technology in area.technologies"
                :key="`${area.name}-${technology.name}`"
              >
                <div class="text--secondary">
                  {{ technology.name }}
                </div>
                <v-progress-circular
                  width="5"
                  :color="area.color"
                  :rotate="-90"
                  :size="48"
                  :value="technology.progress"
                >
                  {{ technology.progress }}
                </v-progress-circular>
              </div>
            </div>
            <v-divider class="mt-4" />
          </div>
        </div>
      </v-col>
      <v-col cols="6">
        <v-card
          outlined
          class="mb-2"
          :key="organization"
          v-for="{ organization, period, description } of experienceItems"
        >
          <v-card-title> {{ organization }} </v-card-title>
          <v-card-subtitle>{{ period }}</v-card-subtitle>
          <v-card-text>
            {{ description }}
          </v-card-text>
          <div class="pa-2 d-flex flex-wrap">
            <v-img
              v-for="i in 3"
              :key="i"
              width="200"
              src="https://picsum.photos/350/165?random"
              class="grey darken-4 mr-2 rounded"
            ></v-img>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Experience",
  data() {
    return {
      areas: [
        {
          name: "Database",
          color: "indigo",
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
        {
          name: "Backend",
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
          color: "pink",
          technologies: [
            {
              name: "Vue",
              progress: 90,
            },
            {
              name: "React",
              progress: 60,
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
        },
        {
          logoUrl:
            "https://media.licdn.com/dms/image/C4D0BAQEdL87TMUgWag/company-logo_200_200/0?e=2159024400&v=beta&t=NkHmSn5reOmggy_cCNLcoHh0andWfiNpw6xCySqA9mw",
          organization: "PLUSTEAM C. A.",
          description:
            "I decided to invest in myself so I purchased one year subscription in platzi, until now I have completed 35 courses from Javascript and Vue with ease, I'm looking forward to explore different fields and areas of knowledge with platforms that help students to learn new things on demand",
          period: "2020 - 2021",
        },
      ],
    };
  },
});
</script>
