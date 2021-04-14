import Vue from "vue";
import colors from "vuetify/lib/util/colors";
import Vuetify from "vuetify/lib/framework";
import { ICONS } from "@/icons";

Vue.use(Vuetify);

const gray = {
  darken4: "#121212",
  darken3: "#212121",
  darken2: "#303030",
  darken1: "#424242",
  base: "#535353",
  lighten1: "#717171",
  lighten2: "#888888",
  lighten3: "#9F9F9F",
  lighten4: "#D7D7D7",
  lighten5: "#EDEDED",
  lighten6: "#E4E4E4",
  lighten7: "#F5F5F5",
  lighten8: "#E5E5E5",
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
        grey: colors.grey,
        gray,
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
