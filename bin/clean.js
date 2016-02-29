const del = require('del');

//Pour exclure un fichier spécifique:
//del([folder+'/**', '!'+folder, '!'+folder+'/index.html']).then(paths => {
var items = ['public/**', 'src/**/*.js', 'src/**/*.js.map', 'src/**/*.jsx', 'src/**/*.jsx.map'];
//del(['public/**', 'src/**/*.js', 'src/**/*.js.map', 'src/**/*.jsx', 'src/**/*.jsx.map']).then(
items.forEach(function(toDelete, index, array) {
	del([toDelete]).then(
		function(paths) {
			if(paths.length > 0)
				console.log(toDelete + ' successfully removed');
			else
				console.log('Error while deleting ' + toDelete + ' (empty?)');
		}
	)
});
