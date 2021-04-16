import Vue from "vue";
import colors from "vuetify/lib/util/colors";
import Vuetify from "vuetify/lib/framework";
import { ICONS } from "@/icons";

Vue.use(Vuetify);

const background = {
  darken5: "#121212",
  darken4: "#212121",
  darken3: "#303030",
  darken2: "#515151",
  darken1: "#626262",
  base: "#7e7e7e",
  lighten1: "#9e9e9e",
  lighten2: "#b1b1b1",
  lighten3: "#cfcfcf",
  lighten4: "#e1e1e1",
  lighten5: "#f7f7f7",
};

const lightPurple = {
  base: "#8F50CE",
};

const primary = colors.pink;
const accent = colors.orange;

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary,
        accent,
        background: background,
        grey: colors.grey,
        orange: {
          base: colors.orange.base,
        },
        cyan: {
          base: colors.cyan.base,
        },
        "light-green": colors.lightGreen.base,
        "light-purple": lightPurple,
      },
    },
    options: {
      customProperties: true,
    },
  },
  icons: {
    iconfont: "mdiSvg",
    values: ICONS,
  },
});
