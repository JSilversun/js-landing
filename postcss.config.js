const IN_PRODUCTION = process.env.NODE_ENV === "production";
const margins = ["ml", "mr", "mb", "mt", "mx", "my", "ma"];
const paddings = ["pl", "pr", "pb", "pt", "px", "py", "pa"];
const sizes = ["xs", "sm", "md", "lg", "xl"];
const CSS_SELECTORS_TO_REMOVE = [
  "rtl",
  "picker",
  "theme--light",
  "order",
  "hidden",
  "overflow",
  ...[paddings, ...margins]
    .map((item) => sizes.map((size) => `${item}-${size}`))
    .flat(),
];

module.exports = {
  plugins: [
    IN_PRODUCTION &&
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require("@fullhuman/postcss-purgecss")({
        content: [
          `./public/**/*.html`,
          `./src/**/*.vue`,
          `./node_modules/vuetify/dist/vuetify.css`,
        ],
        blocklist: CSS_SELECTORS_TO_REMOVE.map(
          (selector) => new RegExp(`.*${selector}.*`)
        ),
        safelist: [/^router-link(|-exact)-active$/, /data-v-.*/, /.*xyz.*/],
      }),
  ],
};
