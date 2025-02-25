const webpack = require('webpack')

module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      // args[0]['process.env'].VUE_APP_TEST = '"test"'
      return args
    })
  },
}
