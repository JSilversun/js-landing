<template>
  <v-container fluid class="about_me my-5">
    <section-title>About me</section-title>
    <xyz-transition appear-visible duration="auto" xyz="fade stagger-4">
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
            lg="3"
            xl="2"
            offset-sm="3"
            offset-lg="3"
            offset-md="1"
            offset-xl="3"
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
                {{ profileSummary.tagline }}
              </v-card-subtitle>
              <v-card-text class="subtitle-1">
                {{ profileSummary.description }}
              </v-card-text>
              <v-card-text class="pb-0">
                <v-simple-table>
                  <template v-slot:default>
                    <tbody>
                      <tr v-for="item in profileItems" :key="item.name">
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
            xyz="delay-7 fade down stagger"
          >
            <v-row class="mx-auto">
              <v-col
                cols="12"
                sm="6"
                lg="3"
                v-for="{ icon, title, description, color } in userStrengths"
                :key="title"
                class="xyz-nested"
              >
                <v-card outlined class="rounded-lg full-height hoverable-card">
                  <v-card-text
                    class="d-flex flex-column justify-center align-center"
                    :class="{
                      'pa-0': $vuetify.breakpoint.xsOnly,
                    }"
                  >
                    <v-icon :color="color" x-large class="my-5">
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
      </div>
    </xyz-transition>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import SectionTitle from "@/components/core/SectionTitle.vue";
import { user } from "@/data/user";
import { profileItems, profileSummary, userStrengths } from "@/data/profile";
import { buildResizedImageUrl } from "@/utils/image";

export default defineComponent({
  name: "AboutMe",
  components: { SectionTitle },
  data() {
    return {
      profileSummary,
      userStrengths,
      profileItems,
      imageUrl: buildResizedImageUrl("landing/profile/about_me", {
        height: 600,
      }),
      cvUrl: user.cvUrl,
    };
  },
});
</script>
