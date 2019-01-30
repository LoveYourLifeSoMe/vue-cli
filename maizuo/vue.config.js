// const path = require("path");
// const htmlWebpackPlugin = require("html-webpack-plugin");
// const openBrowserWebpackPlugin = require("open-browser-webpack-plugin");
// const extractTextWebpackPlugin = require("extract-text-webpack-plugin");

// module.exports = {
//   entry: ["./src/main.js"],
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "js/[name].[hash:8].js"
//     // publicPath: "./",
//   },
//   devtool: "source-map",

//   resolve: {
//     alias: {
//       react: path.resolve(__dirname, "node_modules", "react")
//     }
//   },

//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: ["babel-loader"]
//       },
//       {
//         test: /\.(png|gif|svg|jpg|woff|woff2|eot|ttf)\??.*$/,
//         use: ["url-loader?limit=8192&name=font/[hash:8].[name].[ext]"]
//       },
//       {
//         test: /\.(css|scss)$/,
//         use: extractTextWebpackPlugin.extract({
//           fallback: "style-loader",
//           use: [
//             "css-loader",
//             {
//               loader: "postcss-loader",
//               options: {
//                 plugins: function() {
//                   return [
//                     require("cssgrace"), // 美化 css
//                     require("postcss-px2rem-exclude")({
//                       remUnit: 100,
//                       exclude: /mint-ui/i // 排除antd-mobile不需要进行 rem 转换
//                     }), // px 转 rem
//                     require("autoprefixer")() // 自动补全 实现兼容
//                   ];
//                 }
//               }
//             },
//             "sass-loader" //  编译 scss 为 css 代码
//           ]
//         })
//       }
//     ]
//   },

//   devServer: {
//     contentBase: path.join(__dirname, "dist"),
//     compress: true,
//     hot: true,
//     inline: true,
//     host: "0.0.0.0",
//     port: 5000,
//     // open:true,
//     publicPath: "",
//     proxy: {
//       // 代理
//     }
//   },

//   plugins: [
//     new htmlWebpackPlugin({
//       template: "./src/index.html",
//       inject: true
//     }),

//     new openBrowserWebpackPlugin({ url: "http://localhost:5000" }),

//     new extractTextWebpackPlugin({
//       filename: "css/app.[hash:8].css",
//       allChunks: true, // 抽离所有的数据
//       disable: false // true 无法样式抽离
//     })
//   ]
// };
