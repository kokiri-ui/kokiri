const { join: joinPath } = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires

function resolve(dir) {
  return joinPath(__dirname, dir);
}

module.exports = {
  publicPath: '/',
  configureWebpack: {
    entry: {
      app: `./demos/entry/main.ts`,
    },
    resolve: {
      alias: {
        '@kokiri/core/dist': resolve('./packages/core/src'),
        '@kokiri/core': resolve('./packages/core/src/index.ts'),
        'kokiri/dist': resolve('./packages/kokiri/src'),
        kokiri: resolve('./packages/kokiri/src/index.ts'),
        '@': resolve('./demos'),
      },
    },
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].template = resolve('./demos/public/index.html');

      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
        sassOptions: {
          fiber: require('fibers'),
        },
        additionalData: `@import "~kokiri/dist/themes/antd/helper";`,
      },
    },
  },
};
