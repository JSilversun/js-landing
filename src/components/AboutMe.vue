<template>
  <opacity-transition-intersection>
    <v-container fluid class="about_me my-5">
      <section-title>About me</section-title>
      <v-row
        :class="{
          'my-5': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <v-col
          class="d-flex"
          :class="{
            'justify-end': $vuetify.breakpoint.mdAndUp,
            'justify-center': $vuetify.breakpoint.smAndDown,
          }"
          cols="12"
          md="4"
          offset-md="1"
        >
          <v-img :src="imageUrl" max-width="300" class="rounded-xl" />
        </v-col>
        <v-col
          cols="12"
          sm="10"
          offset-sm="1"
          md="6"
          lg="4"
          offset-md="0"
          class="d-flex align-center"
        >
          <v-card class="elevation-0 transparent" outlined>
            <v-card-subtitle class="text-h6 py-2">
              I'm one women army!
            </v-card-subtitle>
            <v-card-text class="subtitle-1">
              A self-driven software engineer. Able to effectively self-manage
              during independent projects, as well as collaborate in a team
              setting. I always give the best of myself in whatever I do.
            </v-card-text>
            <v-card-text class="pb-0">
              <v-simple-table>
                <template v-slot:default>
                  <tbody>
                    <tr v-for="item in profileRows" :key="item.name">
                      <th>{{ item.name }}</th>
                      <td>{{ item.value }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
            <v-card-text class="my-4">
              <v-btn rounded class="px-5" color="primary">Resume</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row :no-gutters="$vuetify.breakpoint.mdAndDown">
        <v-col
          cols="12"
          sm="10"
          md="8"
          lg="12"
          xl="10"
          offset-lg="0"
          offset-sm="1"
          offset-md="2"
          offset-xl="1"
          :class="{
            'my-10': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <v-row class="mx-auto">
            <v-col
              cols="12"
              sm="6"
              lg="3"
              v-for="{ icon, title, description, color } in items"
              :key="title"
            >
              <v-card outlined class="rounded-lg full-height">
                <v-card-text
                  class="d-flex flex-column justify-center align-center"
                  :class="{
                    'pa-0': $vuetify.breakpoint.xsOnly,
                  }"
                >
                  <v-icon :color="color" x-large class="py-5">
                    {{ icon }}
                  </v-icon>
                  <v-card-title class="py-0">{{ title }}</v-card-title>
                  <v-card-text class="text-center">
                    {{ description }}
                  </v-card-text>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </opacity-transition-intersection>
</template>
<script lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";
import OpacityTransitionIntersection from "@/components/OpacityTransitionIntersection.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "AboutMe",
  components: { SectionTitle, OpacityTransitionIntersection },
  data() {
    return {
      items: [
        {
          icon: "mdi-puzzle",
          title: "Problem Solver",
          color: "purple lighten-1",
          description:
            "I always come up with innovative solutions to the problems I face frameworks or languages",
        },
        {
          icon: "mdi-iframe-braces-outline",
          color: "pink",
          title: "Tech Enthusiast",
          description:
            "I always come up with innovative solutions to the problems I face frameworks or languages",
        },
        {
          icon: "mdi-school",
          color: "cyan",
          title: "Self-taught",
          description:
            "I always come up with innovative solutions to the problems I face frameworks or languages",
        },
        {
          icon: "mdi-medal",
          title: "Dedicated",
          color: "orange",
          description:
            "I always come up with innovative solutions to the problems I face frameworks or languages",
        },
      ],
      profileRows: [
        {
          name: "Email",
          value: "ju.threw@gmail.com",
        },
        {
          name: "Age",
          value: 25,
        },
        {
          name: "Citizenship",
          value: "Venezuelan/Portguese",
        },
        {
          name: "Location",
          value: "Táchira, Venezuela",
        },
        {
          name: "Languages",
          value: "Spanish, English",
        },
      ],
      imageUrl:
        "https://webtechnologybd.com/template/duck//images/about-image.jpg",
    };
  },
});
</script>
