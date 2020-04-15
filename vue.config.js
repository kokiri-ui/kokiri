const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '/',
  configureWebpack: {
    entry: {
      app: './demo/main.ts',
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        'buds-vue': resolve('./src'),
      },
    },
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].template = resolve('demo/index.html');

      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
        fiber: require('fibers'),
        data: `@import "~buds-vue/style/helper";`,
      },
    },
  },
  devServer: {
    disableHostCheck: true,
  },
};
