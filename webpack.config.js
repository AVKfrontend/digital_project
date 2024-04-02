const path = require("path")

module.exports = {
  entry: {
    main: "./src/js/slick_init.js",
  },
  output: {
    filename: "slick_init.js",
    path: path.resolve(__dirname, "js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
}