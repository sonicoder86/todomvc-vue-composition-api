module.exports = {
  publicPath: '',
  devServer: {
    port: 9000
  }
  // ,
  // chainWebpack: config => {
  //   // get the existing vue-loader rule and tap into its options
  //   config.module.rule('vue-loader').tap(options => {
  //     options.compilerOptions = {
  //       ...(options.compilerOptions || {}), // merge existing compilerOptions, if any
  //       isCustomElement: tag => /^x-/.test(tag)
  //     }
  //   })
  // }
};
