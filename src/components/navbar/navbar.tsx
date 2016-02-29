import * as React from "react";
import {Link} from "react-router";

class NavbarComponent extends React.Component<any, any> {
	render() {
		//console.log(this.props.children);
		return (
			<nav>
				<ul>
					<li><Link to="/single/example">Link to Example component</Link></li>
					<li><Link to="/single/header">Link to Header component</Link></li>
					<li><Link to="/single/welcome/Ayoub/23">Link to Welcome component with params</Link></li>
				</ul>
			</nav>
		);
	}
}

export default NavbarComponent;
