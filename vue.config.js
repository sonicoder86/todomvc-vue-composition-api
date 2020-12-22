module.exports = {
  publicPath: '',
  devServer: {
    port: 9000
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: tag => /^x-/.test(tag)
        };
        options.isServerBuild = false;
        return options;
      });
  }
};
