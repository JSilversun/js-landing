import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const gray = {
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

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        gray,
      },
      dark: {
        gray,
      },
    },
    options: {
      customProperties: true,
    },
  },
});
