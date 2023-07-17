const { defineConfig } = require("@vue/cli-service");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  transpileDependencies: true,
  css: {
    extract: {
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    },
  },
  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()],
  },
};
