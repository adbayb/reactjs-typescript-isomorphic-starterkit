import * as React from "react";
import "./header.scss";

class HeaderComponent extends React.Component<any, any> {
	constructor(props:any) {
		super(props);
	}

	render() {
		return (
			<header>
				<p className="header"> I'm the Header and I'm cool :) </p>
			</header>
		);
	}
}

export default HeaderComponent;