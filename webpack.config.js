const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const buildConfig = require('./build');

const packageName = 'buds-vue';

const sassLoader = {
  loader: 'sass-loader',
  options: {
    implementation: require('sass'),
    fiber: require('fibers'),
    data: `@import "~src/style/helper";`,
  },
};

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: resolve('dist'),
    publicPath: '/dist/',
    library: packageName,
    libraryTarget: 'commonjs2',
    filename: `${packageName}.common.js`,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
          },
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
      {
        test: /\.scss$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  getLocalIdent: (context, localIdentName, localName, options) => {
                    return `ss-${localName}__${buildConfig.randomLocalIdent}`;
                  },
                },
              },
              sassLoader,
            ],
          },
          {
            use: [MiniCssExtractPlugin.loader, 'css-loader', sassLoader],
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      src: resolve('src'),
    },
  },
  externals: ['vue', 'vue-property-decorator'],
  optimization: {
    minimize: false,
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: `${packageName}.css`,
    }),
  ],
};
