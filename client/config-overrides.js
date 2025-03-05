// const { override, addWebpackModuleRule } = require("customize-cra");

// module.exports = override(
//   addWebpackModuleRule({
//     test: /\.(js|jsx)$/,
//     exclude: /node_modules/,
//     use: {
//       loader: "babel-loader",
//       options: {
//         presets: ["@babel/preset-env", "@babel/preset-react"],
//       },
//     },
//   }),
//   addWebpackModuleRule({
//     test: /\.js$/,
//     enforce: "pre",
//     use: ["source-map-loader"],
//     exclude: /node_modules\/pdfjs-dist/,
//   })
// );
