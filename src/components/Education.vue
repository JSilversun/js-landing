<template>
  <v-container fluid class="grey darken-4 position-relative">
    <section-title>Education</section-title>
    <v-row>
      <v-col cols="12" md="10" offset-md="1">
        <v-timeline
          :dense="$vuetify.breakpoint.mdAndDown"
          v-intersect="{
            handler: handleContainerIntersection,
            threshold: [0.1],
          }"
        >
          <v-timeline-item
            v-for="(
              {
                institution,
                description,
                period,
                logoUrl,
                photos,
                isVisible,
                color = 'primary',
              },
              index
            ) in educationItems"
            :key="institution"
          >
            <template v-slot:icon>
              <v-avatar size="32" :color="color">
                <img :src="logoUrl" />
              </v-avatar>
            </template>
            <v-card
              outlined
              class="transition-opacity"
              v-intersect="{
                handler: handleItemIntersection.bind(null, index),
                options: {
                  threshold: [0.5],
                },
              }"
              :style="{ opacity: isVisible ? 1 : 0 }"
            >
              <div class="hoverable-card">
                <v-card-title> {{ institution }} </v-card-title>
                <v-card-subtitle>{{ period }}</v-card-subtitle>
                <v-card-text>
                  {{ description }}
                </v-card-text>
                <v-card-text>
                  <v-row class="mr-1">
                    <v-col
                      v-for="(photo, index) in photos"
                      :key="photo"
                      :cols="12 / Math.min(maxVisiblePhotos, photos.length)"
                      class="pr-0"
                      v-show="index < maxVisiblePhotos"
                    >
                      <v-img
                        :src="photo"
                        class="grey darken-4 rounded"
                        height="120"
                      />
                    </v-col>
                  </v-row>
                </v-card-text>
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
import OpacityTransitionIntersection from "@/components/OpacityTransitionIntersection.vue";
import SectionTitle from "@/components/SectionTitle.vue";

export default defineComponent({
  name: "Education",
  components: { OpacityTransitionIntersection, SectionTitle },
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      educationItems: [
        {
          isVisible: false,
          color: "white",
          logoUrl:
            "http://4.bp.blogspot.com/-zjOQNrvFY3U/WB4IiTdq6EI/AAAAAAAAAUE/HE_bkYqhAj8vULilPoKXjnH3HreYnIU-ACK4B/s400/logo_unet.gif",
          institution: "Universidad Nacional Experimental del Táchira",
          description:
            "I graduated as Cum Laude in December 2020, it was a great honor and experience, I'm sincerely grateful and happy with my university and my professors specifically for teaching me so much!",
          degree: "Bachelor's degree, Computer Software Engineering",
          period: "2012 - 2020",
          photos: [
            "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Funet%2Fphoto1_thumb.jpg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Funet%2Fphoto2_thumb.jpg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Funet%2Fphoto3_thumb.jpg?alt=media",
          ],
        },
        {
          isVisible: false,
          color: "#EC008C",
          institution: "PluralSight",
          logoUrl:
            "https://e7.pngegg.com/pngimages/560/589/png-clipart-farmington-amazon-com-pluralsight-technology-learning-technology-electronics-text-thumbnail.png",
          description:
            "I had a hard time getting used to PluralSight courses however I believe their platform is impressive and I love their tests",
          period: "Aug 2020 - Nov 2020",
          photos: [
            "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Fpluralsight%2Fjavascript.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Fpluralsight%2Fvue.jpeg?alt=media",
          ],
        },
        {
          isVisible: false,
          logoUrl:
            "https://media.licdn.com/dms/image/C4D0BAQEdL87TMUgWag/company-logo_200_200/0?e=2159024400&v=beta&t=NkHmSn5reOmggy_cCNLcoHh0andWfiNpw6xCySqA9mw",
          institution: "Platzi",
          description:
            "I decided to invest in myself so I purchased one year subscription in platzi, until now I have completed 35 courses from Javascript and Vue with ease, I'm looking forward to explore different fields and areas of knowledge with platforms that help students to learn new things on demand",
          period: "2020 - 2021",
          photos: [
            "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Fplatzi%2Fjavascript-thumb.png?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/education%2Fplatzi%2Fsoftware-architecture_thumb.png?alt=media",
          ],
        },
      ],
      isVisible: false,
      isAnimating: false,
      itemsQueue: [] as number[],
    };
  },
  methods: {
    showItem() {
      const index = this.itemsQueue.shift();
      if (index === undefined) throw "Items queue is empty";
      setTimeout(() => {
        this.educationItems[index].isVisible = true;
        if (this.itemsQueue.length > 0) {
          this.showItem();
        } else {
          this.isAnimating = false;
          this.isVisible = true;
        }
      }, 400);
    },
    handleContainerIntersection(entries: IntersectionObserverEntry[]) {
      const { isIntersecting } = entries[0];
      if (!isIntersecting && this.isVisible) this.hideItems();
    },
    handleItemIntersection(
      index: number,
      entries: IntersectionObserverEntry[]
    ) {
      const { isIntersecting } = entries[0];
      if (!isIntersecting) return;
      this.itemsQueue.push(index);
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.showItem();
    },
    hideItems() {
      this.isVisible = false;
      this.isAnimating = false;
      this.itemsQueue = [];
      for (const item of this.educationItems) {
        item.isVisible = false;
      }
    },
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
  transition: opacity 300ms;
}
</style>
