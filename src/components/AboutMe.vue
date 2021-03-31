<template>
  <v-container>
    <v-row>
      <v-col cols="6" offset="3">
        <v-card class="d-flex elevation-0">
          <v-img :src="imageUrl" max-width="320" class="rounded-xl" />
          <div class="px-2">
            <v-card-title class="text-h5">About me</v-card-title>
            <v-card-text class="subtitle-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              aspernatur consequatur eos et facere nesciunt, perspiciatis.
              Accusantium adipisci animi error esse hic id in iste maiores,
              mollitia nesciunt quaerat sit!
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
            <v-card-actions class="justify-center py-5">
              <v-btn rounded class="px-5" large color="primary">Resume</v-btn>
            </v-card-actions>
          </div>
        </v-card>
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
