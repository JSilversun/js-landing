<template>
  <v-theme-provider dark>
    <v-container
      class="white--text d-flex justify-center align-center text-center full-height-viewport"
    >
      <v-img
        id="home-img"
        src="https://newtemplate.net/demo/resume/template/side-menu-wave/images/banner-01.jpg"
      />
      <v-row>
        <v-col
          cols="12"
          sm="10"
          lg="8"
          xl="6"
          offset-xl="3"
          offset-lg="2"
          offset-sm="1"
          style="z-index: 1"
        >
          <v-slide-x-transition appear>
            <h2
              :class="{
                'text-h4': $vuetify.breakpoint.mdAndUp,
                'text-h6': $vuetify.breakpoint.smAndDown,
              }"
            >
              Hey there! My name is
              <v-chip class="grey darken-2" label>{{ user.fullName }}</v-chip>
            </h2>
          </v-slide-x-transition>
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
            <h1
              :class="{
                'text-h2': $vuetify.breakpoint.mdAndUp,
                'text-h4': $vuetify.breakpoint.smAndDown,
              }"
            >
              <span
                :class="{
                  'd-block': $vuetify.breakpoint.xsOnly,
                }"
              >
                I'm a
              </span>
              <span class="font-weight-bold typing"></span>
            </h1>
          </vue-typed-js>
          <v-scroll-x-transition appear>
            <p
              class="py-4"
              :class="{
                'text-h6': $vuetify.breakpoint.mdAndUp,
                'subtitle-1': $vuetify.breakpoint.smAndDown,
              }"
            >
              I specialize in building web applications. I'm extremely
              passionate about creating maintainable and efficient software
            </p>
          </v-scroll-x-transition>

          <v-slide-x-reverse-transition appear>
            <v-btn
              rounded
              class="primary mr-2"
              @click="$vuetify.goTo(`#about_me`)"
            >
              About me
            </v-btn>
          </v-slide-x-reverse-transition>
          <v-slide-x-reverse-transition appear>
            <v-btn
              rounded
              text
              class="white black--text"
              @click="$vuetify.goTo(`#portfolio`)"
            >
              Portfolio
            </v-btn>
          </v-slide-x-reverse-transition>
        </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import user from "@/data/user.json";
import TransparentImageWave from "@/components/TransparentImageWave.vue";
import TypingText from "@/components/TypingText.vue";

export default defineComponent({
  name: "Home",
  components: {
    TypingText,
    TransparentImageWave,
    ImageWave: TransparentImageWave,
  },
  data: () => ({
    fab: false,
    user,
    homeImage:
      "https://newtemplate.net/demo/resume/template/side-menu-wave/images/banner-01.jpg",
  }),
});
</script>
<style>
#home-img,
#home-img::before {
  height: 100vh;
  width: 100%;
}

#home-img {
  position: absolute;
}

#home-img::before {
  content: "";
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to right,
    var(--v-primary-darken4) 0%,
    var(--v-primary-darken3) 100%
  );
  opacity: 0.5;
}
</style>
