const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const config = {
  entry: "./public/index.js",
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "bundle.js",
  },
  mode: "production",
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: "Budget Tracker",
      // eslint-disable-next-line camelcase
      short_name: "Budget Tracker",
      description: "An application for budget tracking",
      // eslint-disable-next-line camelcase
      background_color: "#01579b",
      // eslint-disable-next-line camelcase
      theme_color: "#ffffff",
      // eslint-disable-next-line camelcase
      start_url: "/",
      icons: [
        {
          src: path.resolve("public/icons/icon-512x512.png"),
          sizes: [72, 96, 128, 144, 152, 192, 256, 384, 512],
          destination: path.join("assets", "icons"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
module.exports = config;
