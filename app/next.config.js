const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

const projConfig = require("../config/constants");

const { ANALYZE } = process.env;

const { NEXT, SW_FILE_NAME } = projConfig.default;

module.exports = {
  distDir: NEXT.distDir,
  webpack(config) {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: 8888,
          openAnalyzer: true
        })
      );
    }

    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        filename: `${SW_FILE_NAME}.js`,
        runtimeCaching: [
          {
            handler: "networkFirst",
            urlPattern: /^https?.*/
          }
        ]
      })
    );

    return config;
  }
};
