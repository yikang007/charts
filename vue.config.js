const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

module.exports = {
	lintOnSave: false,
	productionSourceMap: false,
	devServer: {
		port: 8089, // 端口号
		host: 'localhost',
		https: false, // https:{type:Boolean}
		open: false, //配置自动启动浏览器
		proxy: {
			'/api': {
				target: 'http://122.113.5.204:9007',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/api'
				}
			},
			'upload': {
				target: 'https://w.wallhaven.cc',
				changeOrigin: true,
				pathRewrite: {
					'^/upload': '/'
				}
			}
		},
	},
	configureWebpack: config => {
		if(process.env.NODE_ENV === 'production') {
			// 生产环境
			config.plugins.push(
				new CompressionWebpackPlugin({
					asset: '[path].gz[query]',
					algorithm: 'gzip',
					test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
					threshold: 10240,
					minRatio: 0.8
				})
			);
		} else {
			// 开发环境
		}
	}
}