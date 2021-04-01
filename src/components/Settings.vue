<template>
  <div>
    <v-navigation-drawer
      v-model="isSettingsOpen"
      dark
      right
      fixed
      hide-overlay
      temporary
      width="300"
    >
      <v-container>
        <v-container class="px-2">
          <v-subheader class="headline pa-0 slim-subheader pb-2">
            Settings
          </v-subheader>
          <dark-mode-selector />
          <language-selector />
        </v-container>
      </v-container>
    </v-navigation-drawer>
    <v-speed-dial
      bottom
      right
      fixed
      v-model="isSettingsOpen"
      style="z-index: 1000"
    >
      <template v-slot:activator>
        <v-btn dark fab>
          <v-icon v-if="isSettingsOpen">mdi-close</v-icon>
          <v-icon v-else>mdi-cog</v-icon>
        </v-btn>
      </template>
    </v-speed-dial>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import DarkModeSelector from "@/components/inputs/DarkModeSelector.vue";
import LanguageSelector from "@/components/inputs/LanguageSelector.vue";

export default defineComponent({
  components: {
    DarkModeSelector,
    LanguageSelector,
  },
  name: "Settings",
  data() {
    return {
      isSettingsOpen: false,
    };
  },
});
</script>
