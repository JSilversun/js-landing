export default {
  buildModules: [
    "@nuxtjs/vuetify",
    [
      "@nuxtjs/router",
      {
        fileName: "router/index.ts",
      },
    ],
  ],
};
