const webpack = require("webpack");

module.exports = {
  // ... other webpack configuration ...
  entry: "./src/main.jsx", // Your entry file
  output: {
    filename: "bundle.js", // The name of the output bundle
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    // Expose jQuery as a global variable
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
};
