import * as React from "react";
import { Link } from "react-router";

class Navbar extends React.Component<any, any> {
	render() {
		return(
			<nav>
				<ul>
					<li><Link to="/single/example">Link to Example component</Link></li>
					<li><Link to="/single/welcome/User/23">Link to Welcome component with params</Link></li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
