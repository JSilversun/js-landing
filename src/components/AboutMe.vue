<template>
  <v-container fluid class="about_me my-5">
    <section-title>About me</section-title>
    <xyz-transition
      appear-visible
      duration="auto"
      xyz="fade stagger-6"
    >
      <div>
        <v-row
          :class="{
            'my-5': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <v-col
            class="d-flex justify-center xyz-nested"
            cols="10"
            sm="6"
            offset="1"
            md="4"
            offset-sm="3"
            offset-lg="2"
            offset-md="1"
          >
            <v-img :src="imageUrl" min-height="500" class="rounded-xl" />
          </v-col>
          <v-col
            cols="12"
            sm="10"
            offset-sm="1"
            md="6"
            lg="4"
            offset-md="0"
            class="d-flex align-center xyz-nested"
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
                <v-btn
                  rounded
                  class="px-5"
                  color="primary"
                  link
                  target="_blank"
                  :href="cvUrl"
                >
                  Resume
                </v-btn>
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
            xyz="delay-10 fade down stagger"
          >
            <v-row class="mx-auto">
              <v-col
                cols="12"
                sm="6"
                lg="3"
                v-for="{ icon, title, description, color } in items"
                :key="title"
                class="xyz-nested"
              >
                <v-card outlined class="rounded-lg full-height">
                  <div class="hoverable-card">
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
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </xyz-transition>
  </v-container>
</template>
<script lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";
import { defineComponent } from "@vue/composition-api";
import { PartialRecord } from "@/types/types";
import { BreakpointName } from "vuetify/types/services/breakpoint";

export default defineComponent({
  name: "AboutMe",
  components: { SectionTitle },
  data() {
    return {
      items: [
        {
          icon: "mdi-function-variant",
          title: "Problem Solver",
          color: "primary",
          description:
            "I come up with innovative solutions to the problems I face",
        },
        {
          icon: "mdi-code-braces",
          color: "primary",
          title: "Tech Enthusiast",
          description:
            "I feel comfortable learning to use new languages or tools to improve my workflow",
        },
        {
          icon: "mdi-bookshelf",
          color: "primary",
          title: "Self-taught",
          description:
            "I'm curious and I love investing in my learning, I'm constantly learning new things on my own",
        },
        {
          icon: "mdi-speedometer",
          title: "Dedicated",
          color: "primary",
          description:
            "I give all my effort to surpass my own limits and be the best version of myself I can be",
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
        "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/profile%2Fabout_me3_optimized.jpeg?alt=media",
      cvUrl:
        "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/cv.pdf?alt=media",
    };
  },
});
</script>
