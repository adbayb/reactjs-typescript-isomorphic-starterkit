var express = require('express');
var compress = require('compression');
var path = require('path');

var server = express();
//on check les variables d'environnement système si un port
//est définit par défaut via process.env, auquel cas on définit par défault
//le port à 8080:
const port = process.env.PORT || 8080;

//On utilise compression() qui est un middleware permettant de compresser les réponses serveurs
//en gzip ou deflate, ou aucune compression suivant ce que le client web peut accepter (le client le spécifie
//dans sa raquête via Accept-Encoding) cf. https://en.wikipedia.org/wiki/HTTP_compression (Compression scheme negotiation)
//pour plus de détails. On compresse toutes les requêtes en spécifiant compression() dans server.use:
server.use(compress({threshold: 0}));
//On définit le répertoire contenant les fichiers statiques (images, css ...)
//pour que ces derniers soient résolues par /ressource.ext au lieu de /public/ressource.ext:
server.use(express.static(path.resolve(__dirname, '..', '..', 'public')));
//Tous les requêtes passées au client web seront traitées par index.html
//donc par le javascript bundlé dans index.html et donc par react-router
//afin d'éviter les 404 en dehors de /:
server.get('*', function(req, res) {
	res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'))
});

//TODO: utiliser an http api pour logguer les GET, POST...:
server.listen(port, function() {
	var host = this.address().address;
	console.log('Server launched at http://%s:%s', host, port);
});
