import * as React from "react";
import {renderToString} from "react-dom/server";
import {match, RouterContext} from "react-router";
import routes from "./routes";
import "./favicon.ico";

function renderHTML(componentHTML:any) {
	return `<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>React Starter kit (Typescript, Webpack, react-router)</title>
	<link rel="stylesheet" href="/all.bundle.css">
</head>
<body>
	${componentHTML}
</body>
</html>
	`;
}

//Définition de la fonction middleware qui sera utilisé par express à chaque requête client/serveur:
//Elle permet de gérer les redirections en réponse via react-router
//Pour plus de détails: cf. https://github.com/reactjs/react-router/blob/master/docs/guides/ServerRendering.md :
export default function(req:any, res:any) {
	console.log(req.url);
	/*
	if(req.url.indexOf('.ico') !== -1)
		console.log('ICO file');
	*/
	match({routes, location: req.url}, (error: any, redirectLocation: any, renderProps: any) => {
		if(error) {
			res.status(500).send(error.message);
		} else if(redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if(renderProps) {
			res.status(200).send(renderHTML(renderToString(<RouterContext {...renderProps} />)));
			//res.status(200).send(renderHTML(renderToString(React.createElement(RouterContext, renderProps))));
		} else {
			res.status(404).send('Not found');
		}
	});
};

