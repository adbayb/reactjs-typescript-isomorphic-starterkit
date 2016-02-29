var express = require('express');
var compress = require('compression');
var path = require('path');
var customServerRendering = require("../../public/server.bundle.js");
//console.log(customServerRendering);
var server = express();
const port = process.env.PORT || 8080;

//Un article intéressant sur les différents avantages du server side rendering par
//rapport au client side notamment en terme de temps de chargement et consommation de bande passante:
//http://openmymind.net/2012/5/30/Client-Side-vs-Server-Side-Rendering/
//ou https://www.quora.com/What-are-the-tradeoffs-of-client-side-rendering-vs-server-side-rendering

//threshold spécifie le nombre de bytes minimum pour activer la compression (par défault, 1kb), on le
//set à 0 pour activer tout le temps la compression de notre réponse serveur:
server.use(compress({threshold: 0}));
//On définit le répertoire contenant les fichiers statiques (images, css ...)
//pour que ces derniers soient résolues par /ressource.ext au lieu de /public/ressource.ext:
server.use(express.static(path.resolve(__dirname, '..', '..', 'public')));
//On appelle (montage) la fonction middleware définie dans /src/components/server.jsx
//à chaque requêtage serveur/client via la fonction server.use.
//En spécifiant un path (par exemple server.use('/admin', function...)), le middleware
//sera exécuté à chaque fois que la base de la requête matche le path spécifié. Si aucun path
//n'est spécifié (<=> '/'), le middleware s'appliquera sur toutes les requêtes!:
server.use(function(req, res) {
	customServerRendering.default(req, res);
});

//TODO: utiliser an http api pour logguer les GET, POST...:
server.listen(port, function() {
	var host = this.address().address;
	console.log('Server launched at http://%s:%s', host, port);
});
