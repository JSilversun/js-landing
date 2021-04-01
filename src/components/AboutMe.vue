<template>
  <v-container class="my-10 py-10">
    <v-row class="py-10">
      <v-col class="d-flex justify-end" cols="3" offset="2">
        <v-img :src="imageUrl" max-width="300" class="rounded-xl" />
      </v-col>
      <v-col cols="4" class="d-flex align-center">
        <v-card class="elevation-0 transparent" outlined>
          <v-card-title>
            <h1>About me</h1>
          </v-card-title>
          <v-card-subtitle class="text-h6 py-2">
            I'm one women army!
          </v-card-subtitle>
          <v-card-text class="subtitle-1">
            A self-driven software engineer. Able to effectively self-manage
            during independent projects, as well as collaborate in a team
            setting. I always give the best of myself in whatever I do.
          </v-card-text>
          <v-simple-table class="px-2">
            <template v-slot:default>
              <tbody>
                <tr v-for="item in profileRows" :key="item.name">
                  <th>{{ item.name }}</th>
                  <td>{{ item.value }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-card-actions class="py-5">
            <v-btn rounded class="px-5" color="primary">Resume</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" offset="1" class="my-10">
        <v-row class="mx-auto">
          <v-col
            cols="3"
            v-for="{ icon, title, description, color } in items"
            :key="title"
          >
            <v-card outlined class="rounded-lg full-height">
              <v-card-text
                class="d-flex flex-column justify-center align-center"
              >
                <v-icon :color="color" x-large class="py-5">{{ icon }}</v-icon>
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
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "AboutMe",
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
