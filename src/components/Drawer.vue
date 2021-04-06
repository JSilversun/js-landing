<template>
  <v-navigation-drawer
    app
    class="main-drawer"
    @input="setDrawer"
    v-scroll="onScroll"
    :value="isExpanded || !$vuetify.breakpoint.mobile"
  >
    <div class="avatar-container">
      <avatar :image-url="user.photoUrl" :subtitle="user.fullName">
        <h4 class="pt-2 text-h6 font-weight-bold">{{ user.fullName }}</h4>
        <h3 class="subtitle-1 text--secondary">{{ user.profession }}</h3>
      </avatar>
    </div>
    <v-list>
      <v-list-item
        v-for="({ icon, to, title }, index) in links"
        :class="{
          'v-list-item--active': index === activeLinkIndex,
        }"
        :key="title"
        dense
        @click.prevent.stop="onClick(to, index)"
      >
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ title }}</v-list-item-title>
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
      timeout: null as null | number,
      user: user as User,
      offsets: [] as number[],
      isScrolling: false,
      links: [
        {
          icon: "mdi-home",
          to: "#home",
          title: "Home",
        },
        {
          icon: "mdi-card-account-details",
          to: "#about_me",
          title: "About me",
        },
        {
          icon: "mdi-school",
          to: "#education",
          title: "Education",
        },
        {
          icon: "mdi-account-hard-hat",
          to: "#experience",
          title: "Experience",
        },
        {
          icon: "mdi-view-list",
          to: "#portfolio",
          title: "Portfolio",
        },
        {
          icon: "mdi-post",
          to: "#posts",
          title: "Posts",
        },
      ] as { icon: string; to: string; title: string }[],
      activeLinkIndex: 0,
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
    async onClick(hash: string, index: number) {
      this.activeLinkIndex = index;
      await this.$nextTick(async () => {
        this.isScrolling = true;
        await this.$vuetify.goTo(hash);
        this.isScrolling = false;
      });
    },
    setOffsets() {
      const offsets = [];
      const links = this.links.slice().reverse();
      for (const item of links) {
        const section = document.getElementById(item.to.slice(1));
        if (!section) continue;
        offsets.push(section.offsetTop - 20);
      }
      this.offsets = offsets;
    },
    async findActiveLinkIndex(): Promise<number> {
      const { offsetTop, offsetHeight } = document.documentElement;
      const currentOffset = window.pageYOffset || offsetTop || 0;
      if (currentOffset === 0 && !this.$route.hash) return 0;
      const activeOffsetIndex = this.offsets.findIndex(
        (offset) => offset < currentOffset
      );
      let activeLinkIndex =
        activeOffsetIndex > -1
          ? this.offsets.length - 1 - activeOffsetIndex
          : 0;

      const isLastLink = currentOffset + window.innerHeight === offsetHeight;
      return isLastLink ? this.links.length - 1 : activeLinkIndex;
    },
    async setActiveHash() {
      if (this.offsets.length !== this.links.length) this.setOffsets();
      if (this.$vuetify.breakpoint.mobile || this.isScrolling) return;
      this.activeLinkIndex = await this.findActiveLinkIndex();
    },
    onScroll() {
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(this.setActiveHash, 20);
    },
  },
  watch: {
    activeLinkIndex: {
      immediate: true,
      async handler(activeLinkIndex) {
        const { to: hash } = this.links[activeLinkIndex];
        if (hash === this.$route.hash || this.isScrolling) return;
        await this.$router.replace({
          path: this.$route.hash,
          hash,
        });
      },
    },
  },
  mounted() {
    this.setActiveHash();
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
