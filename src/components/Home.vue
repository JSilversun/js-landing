<template>
  <v-container id="home" class="position-relative pa-0" fluid>
    <v-img
      :src="homeImage"
      class="home-image d-flex justify-center"
      style="height: 100vh"
    />

    <v-theme-provider dark>
      <v-row
        class="position-absolute center-xy-relative white--text text-center"
      >
        <v-col cols="10" offset="1">
          <v-slide-x-transition appear>
            <h2 class="text-h4">
              Hey there! My name is
              <v-chip class="grey darken-2" label>{{ user.fullName }}</v-chip>
            </h2>
          </v-slide-x-transition>
          <vue-typed-js
            :strings="['Software Engineer', 'Fullstack Developer']"
            loop
            class="py-4 ml-2"
            :type-speed="50"
            :back-speed="30"
          >
            <h1 class="text-h2 font-weight-medium">
              I'm a <span class="typing"></span>
            </h1>
          </vue-typed-js>
          <v-scroll-x-transition appear>
            <p class="text-h6 py-4">
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
    </v-theme-provider>
  </v-container>
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
.home-image::before {
  content: "";
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  bottom: 0;
  right: 0;
  top: 0;
  background-image: linear-gradient(
    to right,
    var(--v-primary-darken4) 0%,
    var(--v-primary-darken3) 100%
  );
  opacity: 0.6;
}
</style>
