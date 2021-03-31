<template>
  <v-container fluid>
    <h1 class="text-center py-5">Education</h1>
    <v-row>
      <v-col cols="10" offset="1">
        <v-timeline>
          <v-timeline-item
            v-for="{
              institution,
              description,
              period,
              logoUrl,
              color = 'primary',
            } in educationItems"
            :key="institution"
          >
            <template v-slot:icon>
              <v-avatar size="32" :color="color">
                <img :src="logoUrl" />
              </v-avatar>
            </template>
            <v-card outlined>
              <v-card-title> {{ institution }} </v-card-title>
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
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Education",
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      educationItems: [
        {
          color: "white",
          logoUrl:
            "http://4.bp.blogspot.com/-zjOQNrvFY3U/WB4IiTdq6EI/AAAAAAAAAUE/HE_bkYqhAj8vULilPoKXjnH3HreYnIU-ACK4B/s400/logo_unet.gif",
          institution: "Universidad Nacional Experimental del Táchira",
          description:
            "I graduated as Cum Laude in December 2020, it was a great honor and experience, I'm sincerely grateful and happy with my university and my professors specifically for teaching me so much!",
          degree: "Bachelor's degree, Computer Software Engineering",
          period: "2012 - 2020",
        },
        {
          logoUrl:
            "https://media.licdn.com/dms/image/C4D0BAQEdL87TMUgWag/company-logo_200_200/0?e=2159024400&v=beta&t=NkHmSn5reOmggy_cCNLcoHh0andWfiNpw6xCySqA9mw",
          institution: "Platzi",
          description:
            "I decided to invest in myself so I purchased one year subscription in platzi, until now I have completed 35 courses from Javascript and Vue with ease, I'm looking forward to explore different fields and areas of knowledge with platforms that help students to learn new things on demand",
          period: "2020 - 2021",
        },
        {
          color: "#EC008C",
          institution: "PluralSight",
          logoUrl:
            "https://e7.pngegg.com/pngimages/560/589/png-clipart-farmington-amazon-com-pluralsight-technology-learning-technology-electronics-text-thumbnail.png",
          description:
            "I had a hard time getting used to PluralSight courses however I believe their platform is impressive and I love their tests",
          period: "Aug 2020 - Nov 2020",
        },
      ],
    };
  },
});
</script>
