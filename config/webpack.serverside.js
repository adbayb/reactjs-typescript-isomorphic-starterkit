var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '..', 'public');
var APP_DIR = path.resolve(__dirname, '..', 'src');
//Configuration Webpack pour générer un bundle qui sera utilisé par le serveur définit
//dans /bin/server/serverSideRendering.js:
var webpackServerSideConfig = {
	entry: [
		APP_DIR + '/server.jsx'
	],
	//target permet de spécifier le type de compilation réalisé suivant l'environnement de destination.
	//ici nous le settons à node car compilation pour un usage serveur (et donc node.js like environnement).
	//Cela permet d'alléger notre js de sortie en n'incluant pas les modules node.js natifs dans le
	//bundle (puisqu'on le lancera dans un environnement node.js).
	//Pour plus de détails: https://webpack.github.io/docs/configuration.html#target
	target: 'node',
	//externals permet de spécifier les dépendances (modules) qui ne seront pas résolues par webpack (i.e. code source
	//non bundlé) mais qui doivent être résolues par le bundle de sortie
	//(i.e. on spécifie seulement des require dessus dans le bundle).
	//Dans notre cas, il est inutile de bundler les modules de node_modules (comme react, react-dom...) puisqu'on peut les
	//charger depuis notre environnement node.js. Des requires seuls dans le bundle sur ces derniers sont donc suffisants.
	//Pour ne pas les bundler (et obtenir par conséquent un bundle de sortie plus allégé), il suffit de les spécifier
	//en libraries externes via externals: tous les modules n'ayant pas
	//de chemin relatif (i.e. non commençant par ./) sont des modules node_modules et on les ajoute dans externals.
	//Une regexp permet de faire le tri:
	externals: /^[a-z\-0-9]+$/,
	output: {
		filename: 'server.bundle.js',
		path: BUILD_DIR,
		publicPath: '/',
		//output.libraryTarget permet de spécifier le type du bundle (commonjs ou AMD pour
		//un usage de notre librarie via tag script ou via require.js)
		//Pour plus de détails, cf. https://webpack.github.io/docs/library-and-externals.html
		//Nous utilisons ici commonjs puisque nous allons faire un require sur notre bundle libraires depuis
		///bin/server/serverSideRendering.js:
		libraryTarget: "commonjs"
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				include: APP_DIR,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.(jp[e]?g|png|gif|svg)$/i,
				loader: 'file-loader?name=img/[name].[ext]'
			},
			{
				test: /\.html$/,
				loader: 'file-loader?name=[name].[ext]'
			},
			{
				test: /\.ico$/,
				loader: 'file-loader?name=[name].[ext]'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new ExtractTextPlugin('all.bundle.css')
	]
};

module.exports = webpackServerSideConfig;