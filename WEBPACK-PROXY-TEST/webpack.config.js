const path    = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = DEVELOPMENT ?
{
  app: [
    './src/js/app.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080'
  ]
}
  
  :
  [
    './src/js/app.js'
  ];

const plugins = DEVELOPMENT ?
  [
    new webpack.HotModuleReplacementPlugin()
  ]
  :
  [
    // new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename: "[name].bundle.css",
      disable : false,
      allChunks: true
    }),
    new HTMLWebpackPlugin()
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'commons.js',
    //   minChunks: Infinity
    // })
  ];


plugins.push(
  new webpack.EnvironmentPlugin([
    "NODE_ENV"
  ])
);


const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[name]';

const cssLoader = PRODUCTION ?
  ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ],
    publicPath: __dirname + '/dist/'
  })
  :
  ['style-loader?sourceMap',
    'css-loader?sourceMap&localIdentName=' + cssIdentifier +
    'postcss-loader?sourceMap',
    'sass-loader?sourceMap'
  ];


// const imageLoader = PRODUCTION ?
//   [
//     {
//       loader: 'url-loader?name=images/[name].[ext]&limit=10000',
//       options:
//       {
//         publicPath: 'dist',
//         loader: 'image-webpack-loader',
//         options: {
//           mozjpeg: {
//             progressive: true,
//           },
//           gifsicle: {
//             interlaced: false,
//           },
//           optipng: {
//             optimizationLevel: 5,
//           },
//           pngquant: {
//             quality: '70-90',
//             speed: 3,
//           }
//         }
//       }
//     }
//   ]
//   :
//   [
//     {
//       use: 'url-loader?name=images/[name].[ext]&limit=10000',
//       options:
//       {
//         loader: 'image-webpack-loader',
//         options: {
//           mozjpeg: {
//             progressive: true,
//           },
//           gifsicle: {
//             interlaced: false,
//           },
//           optipng: {
//             optimizationLevel: 5,
//           },
//           pngquant: {
//             quality: '70-90',
//             speed: 3,
//           }
//         }
//       }
//     }
//   ];

module.exports = {
  
  devtool: DEVELOPMENT ? 'cheap-eval-source-maps' : 'source-map',
  
  entry: entry,
  
  plugins: plugins,
  
  externals: {
    jquery: 'jQuery' //jquery is external and available at the global variable jQuery
  },
  
  module: {
    rules: [
      {
        test   : '/\.js$/',
        use: [
          {
            loader: 'babel-loader',
            options: {
                presets: [
                  ['es2015', { 'modules': false}],
                  'stage-0'
                ],
            },
          },
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: [
          {
            loader: 'url-loader',
            options:
            {
              limit: 10000,
              publicPath: 'dist/',
              name: 'images/[name].[ext]',
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: false,
                },
                optipng: {
                  optimizationLevel: 5,
                },
                pngquant: {
                  quality: '70-90',
                  speed: 3,
                }
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|eot|svg|woff?2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          publicPath: 'dist',
          name: 'fonts/[name].[ext]',
        },
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        options: {
          publicPath: 'dist',
          name: 'data/[name].[ext]',
        },
        exclude: /node-modules/
      },
      {
        test      : /\.scss$/,
        use: cssLoader,
        exclude: /node-modules/
      }
    ]
  },
  
  output: {
    path      : path.join(__dirname, 'dist'),
    publicPath: DEVELOPMENT ? '/dist/' : '/',
    filename  : 'bundle.js'
  }
  
};