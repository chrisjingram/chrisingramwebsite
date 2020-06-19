// https://dev.to/pixelgoo/how-to-configure-webpack-from-scratch-for-a-basic-website-46a5
// Webpack uses this to work with directories
const path = require('path');

// Plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const production = argv.mode === "production";
  const config = {
    entry: './src/js/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: production ? '[name].[contenthash].js' : '[name].js',
      publicPath: '/dist/'
    },
    mode: argv.mode || "development",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          // Apply rule for .sass, .scss or .css files
          test: /\.(sa|sc|c)ss$/,
          // Set loaders to transform files.
          // Loaders are applying from right to left(!)
          // The first loader will be applied after others
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              // This loader resolves url() and @imports inside CSS
              loader: "css-loader",
            },
            {
              // Then we apply postCSS fixes like autoprefixer and minifying
              loader: "postcss-loader"
            },
            {
              // First we transform SASS to standard CSS
              loader: "sass-loader",
              options: {
                implementation: require("sass")
              }
            }
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: production ? "bundle.[contenthash].css" : "bundle.css"
      }),
      new HtmlWebpackPlugin({
        template: "./src/template/default.html",
        filename: "../_layouts/default.html",
        minify: false
      })
    ]
  };
  // Only clean the dist folder for a production build,
  // as webpack --watch doesn't regenerate all files such as fonts
  if(production){
    config.plugins.unshift(new CleanWebpackPlugin())
  }
  return config;
};