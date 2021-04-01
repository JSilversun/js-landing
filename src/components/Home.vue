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
          <h2 class="text-h4">
            Hey there! My name is
            <v-chip class="primary" label>{{ user.fullName }}</v-chip>
          </h2>
          <h1 class="text-h2 font-weight-medium py-4">
            I'm a Software Engineer
          </h1>
          <p class="text-h6 py-4">
            I'm a full stack software engineer with deep knowledge in web
            technologies. I'm extremely passionate about creating maintainable
            and efficient software
          </p>
          <v-btn
            rounded
            class="primary mr-2"
            @click="$vuetify.goTo(`#about_me`)"
          >
            About me
          </v-btn>
          <v-btn rounded class="accent" @click="$vuetify.goTo(`#portfolio`)">
            Portfolio
          </v-btn>
        </v-col>
      </v-row>
    </v-theme-provider>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import user from "@/data/user.json";
import TransparentImageWave from "@/components/TransparentImageWave.vue";

export default defineComponent({
  name: "Home",
  components: { TransparentImageWave, ImageWave: TransparentImageWave },
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
  background-image: linear-gradient(to right, #360b7b 0%, #003a9c 100%);
  opacity: 0.6;
}
</style>
