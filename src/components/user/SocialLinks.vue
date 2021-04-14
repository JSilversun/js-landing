<template>
  <div v-bind="$attrs">
    <v-btn
      v-for="{ icon, name, url } of user.socialLinks"
      :key="name"
      icon
      link
      :href="url"
      target="_blank"
      rel="noreferrer"
      :aria-label="name"
    >
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { user } from "@/data/user";

export default defineComponent({
  name: "SocialLinks",
  data() {
    return {
      user,
    };
  },
});
</script>
