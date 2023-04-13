// const path = require("path");
// module.exports = {
//   // Konfigurasi entry dan output
//   entry: "./src/index.js",
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   // Konfigurasi modul dan resolve
//   module: {
//     rules: [
//       // Aturan untuk penggunaan Babel loader
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//     ],
//   },
//   resolve: {
//     fallback: {
//       querystring: false,
//     },
//   },
// };
