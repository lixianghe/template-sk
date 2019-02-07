const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin'); // Gzip
// const zopfli = require("@gfx/zopfli");//zopfli压缩
// const BrotliPlugin = require("brotli-webpack-plugin");//brotli压缩
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // Webpack包文件分析器

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  // 输出文件目录
  outputDir: 'dist',
  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: 'assets',

  // 打包后生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  indexPath: 'index.html',

  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  filenameHashing: false,

  // eslint-loader是否在保存的时候检查（是否使用eslint）
  lintOnSave: true,

  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,

  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  transpileDependencies: [],

  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
  configureWebpack: config => {
    // 配置loader
    // 生产、测试环境配置gzip
    let pluginsPro = [
      // new CompressionPlugin({ //文件开启Gzip，也可以通过服务端(如：nginx)(https://github.com/webpack-contrib/compression-webpack-plugin)
      // 	filename: '[path].gz[query]',
      // 	algorithm: 'gzip',
      // 	test: productionGzipExtensions,
      // 	threshold: 8192,
      // 	minRatio: 0.8,
      // }),
      new CompressionPlugin({
        // algorithm(input, compressionOptions, callback) {
        //   return zopfli.gzip(input, compressionOptions, callback);
        // },
        compressionOptions: {
          numiterations: 15
        },
        minRatio: 0.8,
        test: productionGzipExtensions
      }),
      // new BrotliPlugin({
      //   test: productionGzipExtensions,
      //   minRatio: 0.8
      // }),
      // Webpack包文件分析器(https://github.com/webpack-contrib/webpack-bundle-analyzer)
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'bundle-report.html',
        openAnalyzer: true
      })
    ];
    // 开发环境配置
		let pluginsDev = [
			// 移动端模拟开发者工具(https://github.com/diamont1001/vconsole-webpack-plugin  https://github.com/Tencent/vConsole)
			// new vConsolePlugin({
			// 	filter: [], // 需要过滤的入口文件
			// 	enable: true // 发布代码前记得改回 false
			// }),
		];
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.plugins = [...config.plugins, ...pluginsPro];
    } else {
      // 为开发环境修改配置...
      config.plugins = [...config.plugins, ...pluginsDev];
    }
  },
  // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components/'));
    /* config.module
      .rule('images')
      .use('url-loader')
        .loader('url-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        }) */
  },
  css: {
		// 启用 CSS modules
		modules: false,
		// 是否使用css分离插件
		extract: true,
		// 开启 CSS source maps，一般不建议开启
		sourceMap: false,
		// css预设器配置项
		loaderOptions: {
			sass: {
				// 设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin）
				data: `
				$baseUrl: "/";
				@import '@/assets/scss/_common.scss';
				`
			}
		}
	},
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  devServer: {
    // 配置代理
    proxy: {
      '/api': {
        target: 'http://182.61.48.201:8080', // 域名
        ws: true, // 是否启用websockets
        changOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
    open: true,
    host: '0.0.0.0',
    port: 1234,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    // proxy: null, // string | Object
    before: app => {}
  }
};
