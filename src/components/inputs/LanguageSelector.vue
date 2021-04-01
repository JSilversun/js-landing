<template>
  <v-select
    :value="lang"
    label="language"
    :items="items"
    item-value="locale"
    outlined
    hide-details
    v-bind="$attrs"
    @input="SET_LANGUAGE"
  />
</template>
<script>
import { getLanguage } from "@/utils/i18n";
import { mapMutations } from "vuex";
const name = "LanguageSelector";
export default {
  name,
  data() {
    return {
      lang: getLanguage(),
    };
  },
  computed: {
    items() {
      return [
        { locale: "en", text: "english" },
        { locale: "es", text: "spanish" },
      ];
    },
  },
  methods: {
    ...mapMutations("app", ["SET_LANGUAGE"]),
  },
};
</script>
