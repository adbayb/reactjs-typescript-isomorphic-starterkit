import * as React from "react";
import { renderToString } from "react-dom/server";
import { match, RouterContext } from "react-router";
import routes from "../shared/routes";
import "../shared/favicon.ico";

function renderHTML(componentHTML: any) {
	if(process.env.NODE_ENV === "production")
		return `<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>React Isomorphic Starter Kit</title>
		<link rel="stylesheet" href="/client.bundle.css">
	</head>

	<body>
		<div id="app">${componentHTML}</div>

		<script src="/client.bundle.js"></script>
	</body>

</html>`;
	else
		return `<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>React Isomorphic Starter Kit</title>
	</head>

	<body>
		<div id="app">${componentHTML}</div>

		<script src="http://localhost:8081/client.bundle.js"></script>
	</body>

</html>`;
}

export default function(req: any, res: any) {
	console.log(req.url);
	match({ routes, location: req.url }, (error: any, redirectLocation: any, renderProps: any) => {
		if(error) {
			res.status(500).send(error.message);
		} else if(redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if(renderProps) {
			res.status(200).send(renderHTML(renderToString(<RouterContext {...renderProps} />)));
		} else {
			res.status(404).send("Not found");
		}
	});
}
