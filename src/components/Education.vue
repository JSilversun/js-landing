<template>
  <xyz-transition appear-visible xyz="fade">
    <v-container fluid class="grey darken-4">
      <section-title>Education</section-title>
      <v-row>
        <v-col cols="12" md="10" offset-md="1">
          <v-timeline :dense="$vuetify.breakpoint.mdAndDown">
            <xyz-transition-group
              xyz="fade down stagger"
              duration="3"
              appear-visible
            >
              <v-timeline-item
                v-for="{
                  institution,
                  description,
                  period,
                  logoUrl,
                  photos,
                  color = 'primary',
                } in educationItems"
                :key="institution"
              >
                <template v-slot:icon>
                  <v-avatar size="32" :color="color">
                    <img :src="logoUrl" />
                  </v-avatar>
                </template>
                <v-card outlined class="transition-opacity">
                  <div class="hoverable-card">
                    <v-card-title> {{ institution }} </v-card-title>
                    <v-card-subtitle>{{ period }}</v-card-subtitle>
                    <v-card-text>
                      {{ description }}
                    </v-card-text>
                    <v-card-text>
                      <v-row class="mr-1">
                        <v-col
                          v-for="(
                            { thumbnailUrl, imageUrl, title }, index
                          ) in photos"
                          :key="title"
                          :cols="12 / Math.min(maxVisiblePhotos, photos.length)"
                          class="pr-0"
                          v-show="index < maxVisiblePhotos"
                        >
                          <expandable-image
                            :title="title"
                            :image-url="imageUrl"
                            :thumbnail-url="thumbnailUrl"
                            class="grey darken-4 rounded"
                            height="120"
                          />
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </div>
                </v-card>
              </v-timeline-item>
            </xyz-transition-group>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </xyz-transition>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import SectionTitle from "@/components/SectionTitle.vue";
import ExpandableImage from "@/components/ExpandableImage.vue";

export default defineComponent({
  name: "Education",
  components: { ExpandableImage, SectionTitle },
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
          photos: [
            {
              title: "Getting my degree in the middle of a pandemic",
              imageUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Funet%2Fphoto1_optimized.jpeg?alt=media",
              thumbnailUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Funet%2Fphoto1_thumb.jpeg?alt=media",
            },
            {
              title: "Getting Cum Laude award",
              imageUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Funet%2Fphoto2_optimized.jpeg?alt=media",
              thumbnailUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Funet%2Fphoto2_thumb.jpeg?alt=media",
            },
            {
              title: "Celebrating graduation without a mask, finally",
              imageUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Funet%2Fphoto3_optimized.jpeg?alt=media",
              thumbnailUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Funet%2Fphoto3_thumb.jpeg?alt=media",
            },
          ],
        },
        {
          color: "#EC008C",
          institution: "PluralSight",
          logoUrl:
            "https://e7.pngegg.com/pngimages/560/589/png-clipart-farmington-amazon-com-pluralsight-technology-learning-technology-electronics-text-thumbnail.png",
          description:
            "I had a hard time getting used to PluralSight courses however I believe their platform is impressive and I love their tests",
          period: "Aug 2020 - Nov 2020",
          photos: [
            {
              title: "PluralSight Javascript score",
              imageUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Fpluralsight%2Fpluralsight_javascript_optimized.jpeg?alt=media",
              thumbnailUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Fpluralsight%2Fpluralsight_javascript_thumb.jpeg?alt=media",
            },
            {
              title: "PluralSight Vue score",
              imageUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Fpluralsight%2Fpluralsight_vue_optimized.jpeg?alt=media",
              thumbnailUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Fpluralsight%2Fpluralsight_vue_thumb.jpeg?alt=media",
            },
          ],
        },
        {
          logoUrl:
            "https://media.licdn.com/dms/image/C4D0BAQEdL87TMUgWag/company-logo_200_200/0?e=2159024400&v=beta&t=NkHmSn5reOmggy_cCNLcoHh0andWfiNpw6xCySqA9mw",
          institution: "Platzi",
          description:
            "I decided to invest in myself so I purchased one year subscription in platzi, until now I have completed 35 courses from Javascript and Vue with ease, I'm looking forward to explore different fields and areas of knowledge with platforms that help students to learn new things on demand",
          period: "2020 - 2021",
          photos: [
            {
              title: "Platzi diploma for Javascript Career (over 30 courses)",
              imageUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Fplatzi%2Fplatzi_javascript_career_optimized.jpeg?alt=media",
              thumbnailUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Fplatzi%2Fplatzi_javascript_career_thumb.jpeg?alt=media",
            },
            {
              title: "Platzi diploma for software architecture",
              imageUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Fplatzi%2Fplatzi_software_architecture_optimized.jpeg?alt=media",
              thumbnailUrl:
                "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Fplatzi%2Fplatzi_software_architecture_thumb.jpeg?alt=media",
            },
          ],
        },
      ],
    };
  },
  computed: {
    maxVisiblePhotos() {
      return this.$vuetify.breakpoint.smAndDown ? 2 : 3;
    },
  },
});
</script>
<style>
.transition-opacity {
  transition: opacity 400ms;
}
</style>
