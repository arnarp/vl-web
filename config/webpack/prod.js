var path = require('path');
var webpack = require('webpack');
var postcssAssets = require('postcss-assets');
var postcssNext = require('postcss-cssnext');
var stylelint = require('stylelint');
var ManifestPlugin = require('webpack-manifest-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var config = {
  bail: true,

  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src']
  },

  entry: {
    app: './src/client.tsx',
    vendor: [
      './src/vendor/main.ts',
      'react',
      'react-dom',
      'react-router',
      'react-helmet',
      'react-redux',
      'react-router-redux',
      'redux',
      'redux-connect',
      'redux-thunk',
      'typestyle',
      'csstips',
      'es6-promise',
    ]
  },

  output: {
    path: path.resolve('./build/public'),
    publicPath: '/public/',
    filename: 'js/[name].[chunkhash].js'
  },

  module: {
    noParse: /redux-logger/,
    preLoaders: [
      {
        test: /\.tsx?$/,
        loader: 'tslint'
      }
    ],
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel?presets[]=es2015'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        include: path.resolve('./src/app'),
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
          'postcss-loader'
        )
      },
      {
        test: /\.css$/,
        exclude: path.resolve('./src/app'),
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader'
        )
      },
      {
        test: /\.eot(\?.*)?$/,
        loader: 'file?name=fonts/[hash].[ext]'
      },
      {
        test: /\.(woff|woff2)(\?.*)?$/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url?limit=1000&name=images/[hash].[ext]'
      }
    ]
  },

  postcss: function () {
    return [
      stylelint({ files: '../../src/app/*.css' }),
      postcssNext(),
      postcssAssets({ relative: true })
    ];
  },

  tslint: {
    failOnHint: true
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].[chunkhash].js',
      minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('css/[name].[hash].css'),
    new ManifestPlugin({
      fileName: '../manifest.json'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true
    })
  ]
};

module.exports = config;
