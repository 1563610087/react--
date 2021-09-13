const sassResourcesLoader = require("craco-sass-resources-loader");

const path = require("path");

const resolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "@components": resolve("src/components"),
      "@assets": resolve("src/assets"),
    },
  },

  plugins: [
    {
      plugin: sassResourcesLoader,

      options: {
        resources: ["./src/assets/css/variable.scss"],
      },
    },
  ],
  devServer: {
    proxy: {
      "/api": {
        target: "http://39.102.36.212:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
