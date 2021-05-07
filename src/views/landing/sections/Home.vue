<template>
  <v-theme-provider dark>
    <v-container
      fluid
      class="px-5 white--text align-center full-height-viewport position-relative background darken-1"
      v-intersect="{
        handler: setHomeVisibility,
        options: {
          threshold: [0.2],
        },
      }"
    >
      <v-row class="full-height">
        <xyz-transition appear duration="auto" xyz="fade">
          <v-col
            class="d-flex flex-column justify-center"
            cols="10"
            sm="6"
            lg="5"
            xl="4"
            offset-lg="1"
            offset="1"
            style="z-index: 1"
          >
            <span class="text-h6 py-2"> Hey there! </span>
            <h2 class="font-weight-bold text-lg-h2 text-md-h3 text-sm-h4">
              I'm
              <span class="primary--text"> {{ user.fullName }} </span>
            </h2>
            <p class="py-4 mb-0 text-md-h6 text-sm-subtitle-1">
              I specialize in building web applications. I'm extremely
              passionate about creating maintainable and efficient software
            </p>
            <vue-typed-js
              :strings="[
                'Software Engineer',
                'Fullstack Developer',
                'Problem Solver',
              ]"
              loop
              class="d-inline-block"
              :type-speed="50"
              :back-speed="30"
            >
              <h1 class="text-lg-h4 text-h5">
                <span class="font-weight-bold typing" />
              </h1>
            </vue-typed-js>
            <div class="mt-4">
              <social-links />
            </div>
          </v-col>
        </xyz-transition>

        <v-img
          class="position-absolute hero-img"
          v-if="$vuetify.breakpoint.smAndUp"
          :src="homeImage"
          height="100vh"
          style="bottom: 0; right: 0"
        />
        <div class="hero-filter" />
      </v-row>
    </v-container>
  </v-theme-provider>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { user } from "@/data/user";
import TypingText from "@/components/core/TypingText.vue";
import { useNamespacedMutations } from "vuex-composition-helpers";
import buildUrl from "cloudinary-build-url";
import SocialLinks from "@/components/user/SocialLinks.vue";

export default defineComponent({
  name: "Home",
  components: {
    SocialLinks,
    TypingText,
  },
  setup() {
    return {
      ...useNamespacedMutations("app", ["SET_HOME_VISIBILITY"]),
    };
  },
  data: () => ({
    fab: false,
    user,
    homeImage: buildUrl("landing/profile/hero_ueddah", {
      transformations: {
        resize: {
          width: 1920,
        },
      },
    }),
  }),
  methods: {
    setHomeVisibility(entries: IntersectionObserverEntry[]) {
      const { isIntersecting } = entries[0];
      this.SET_HOME_VISIBILITY(isIntersecting);
    },
  },
});
</script>
<style lang="scss">
@import "~@/styles/variables.scss";

.hero-filter {
  background: $accent-hero !important;
  opacity: 0.8;
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
}
</style>
