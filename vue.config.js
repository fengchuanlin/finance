const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
	publicPath: "./",
	outputDir: "dist",
	assetsDir: "finance",
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					autoprefixer(),
					pxtorem({
						rootValue: 37.5,
						propList: ['*']
					})
				]
			}
		}
	}
}
