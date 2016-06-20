import * as React from "react";
import { browserHistory, Router, Route, IndexRoute } from "react-router";
import App from "./components/app";
import Example from "./components/example/example";
import Welcome from "./components/welcome/welcome";
import Navbar from "./components/navbar/navbar";
import Single from "./components/single/single";
import NotFound from "./components/404/404";

export default(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Navbar}/>

			<Route path="/single" component={Single}>
				<Route path="example" component={Example}/>
				<Route path="welcome" component={Welcome}>
					<Route path=":name">
						<Route path=":age"/>
					</Route>
				</Route>
			</Route>
		</Route>

		<Route path="*" component={NotFound}/>
	</Router>
);
