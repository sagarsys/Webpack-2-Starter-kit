module.exports = {
  plugins: [
    // require('postcss-smart-import')({ /* ...options */ }),
    // require('precss')({ /* ...options */ }),
    require('autoprefixer')( ['> 5%', 'ie >= 10', 'Firefox < 20', 'ios 6', 'android 4'] )
  ]
};