<template>
  <v-navigation-drawer app class="main-drawer">
    <avatar :image-url="user.photoUrl" :subtitle="user.fullName">
      <h4 class="pt-2 text-h6 font-weight-bold">{{ user.fullName }}</h4>
      <h3 class="subtitle-1 text--secondary">{{ user.profession }}</h3>
    </avatar>

    <v-divider />

    <v-list>
      <v-list-item
        v-for="[icon, text] in links"
        :key="text"
        dense
        @click="$vuetify.goTo(`#${text}`)"
      >
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="d-flex justify-center my-4">
        <v-btn
          v-for="{ icon, name, url } of user.socialLinks"
          :key="name"
          icon
          link
          :to="url"
          target="_blank"
        >
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Avatar from "@/components/core/Avatar.vue";
import user from "@/data/user.json";
import { User } from "@/types/types";

export default defineComponent({
  name: "Drawer",
  components: { Avatar },
  data() {
    return {
      user: user as User,
      links: [
        ["mdi-home", "home"],
        ["mdi-card-account-details", "about_me"],
        ["mdi-timeline-text", "education"],
        ["mdi-timeline-text", "experience"],
        ["mdi-view-list", "portfolio"],
        ["mdi-post", "posts"],
      ],
    };
  },
});
</script>
<style lang="scss">
.v-application .main-drawer .v-list-item:hover,
.v-application .main-drawer .v-list-item--active {
  background: rgba(#ccc, 0.2);
  border-radius: 4px;
  transition: 200ms;
}
.main-drawer .v-list-item::before {
  margin-top: 7.5px;
  opacity: 0 !important;
  width: 1px !important;
  color: var(--v-primary-base);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 25px;
  border: 2.5px solid var(--v-primary-base);
}
.main-drawer .v-list-item--active::before {
  opacity: 1 !important;
}
</style>
