var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var devConfig = require('../../config/webpack.clientside.dev');

new WebpackDevServer(webpack(devConfig), {
	publicPath: devConfig.output.publicPath,
	hot: true,
	historyApiFallback: true
}).listen(8080, 'localhost', function(err, result) {
	if(err) {
		console.log(err);
	}
	console.log('Webpack Server launched at localhost:8080 (hot reload enabled)');
});