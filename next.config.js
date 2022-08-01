const withPlugins = require("next-compose-plugins"),
  withAssetsImport = require("next-assets-import");

module.exports = withPlugins([[graphql], [withAssetsImport]], {
  distDir: process.env.NODE_ENV === "development" ? "_next" : undefined,
  pageExtensions: ["jsx", "js"],
  generateBuildId: async () =>
    process.env.BUILD_ID ? process.env.BUILD_ID : `${new Date().getTime()}`,
  plugins: ["add-react-displayname"],
  compiler: {
    styledComponents: true,
  },
});
