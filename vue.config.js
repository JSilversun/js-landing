module.exports = {
  pages: {
    index: {
      entry: "src/main.ts",
      template: "public/index.html",
      filename: "index.html",
      title: process.env.VUE_APP_PAGE_TITLE,
    },
  },
  transpileDependencies: ["vuetify"],
};
