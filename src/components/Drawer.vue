<template>
  <v-navigation-drawer
    app
    class="main-drawer"
    temporary
    @input="setDrawer"
    :value="isExpanded"
  >
    <div class="avatar-container">
      <avatar :image-url="user.photoUrl" :subtitle="user.fullName">
        <h4 class="pt-2 text-h6 font-weight-bold">{{ user.fullName }}</h4>
        <h3 class="subtitle-1 text--secondary">{{ user.profession }}</h3>
      </avatar>
    </div>
    <scrollactive
      ref="scrollActive"
      active-class="v-list-item--active"
      scroll-offset="0"
      :modify-url="false"
      highlight-first-item
      @itemchanged="onItemActive"
    >
      <v-list class="px-4">
        <v-list-item
          v-for="{ icon, to, title } in links"
          class="scrollactive-item"
          :class="{
            'v-list-item--active': $route.hash === to,
          }"
          :data-destination-hash="to"
          :href="to"
          :key="title"
          dense
        >
          <v-list-item-icon class="mr-5">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </scrollactive>
    <template v-slot:append>
      <div class="d-flex justify-center my-4">
        <v-btn
          v-for="{ icon, name, url } of user.socialLinks"
          :key="name"
          icon
          link
          :href="url"
          target="_blank"
        >
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { mapMutations, mapState } from "vuex";
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
        {
          icon: "$mdi-home",
          to: "#home",
          title: "Home",
        },
        {
          icon: "$mdi-language-javascript",
          to: "#about_me",
          title: "About me",
        },
        {
          icon: "$mdi-school",
          to: "#education",
          title: "Education",
        },
        {
          icon: "$mdi-briefcase-variant",
          to: "#experience",
          title: "Experience",
        },
        {
          icon: "$mdi-view-carousel",
          to: "#portfolio",
          title: "Portfolio",
        },
        {
          icon: "$mdi-view-split-vertical",
          to: "#posts",
          title: "Posts",
        },
      ] as { icon: string; to: string; title: string }[],
    };
  },
  computed: {
    ...mapState("app", ["isExpanded"]),
    drawer() {
      return this.isExpanded || this.$vuetify.breakpoint.mobile;
    },
  },
  methods: {
    ...mapMutations("app", ["TOGGLE_DRAWER"]),
    setDrawer(isExpanded: boolean) {
      if (this.isExpanded === isExpanded) return;
      this.TOGGLE_DRAWER();
    },
    async goToHash(hash: string) {
      if (this.$route.hash === hash) return;
      await this.$router.replace({
        path: hash,
        hash,
      });
    },
    async onItemActive(event: any, currentItem: HTMLElement): Promise<void> {
      if (!currentItem.dataset.destinationHash) return;
      await this.goToHash(currentItem.dataset.destinationHash);
    },
  },
  async mounted() {
    await this.goToHash(this.links[0].to);
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

.v-application .v-list-item--active .v-list-item__icon {
  color: var(--v-primary-base);
}
</style>
