import * as React from "react";

class WelcomeComponent extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		let params = this.props.params;
		return (
			<p> Welcome {params.name} to React world ! [You are {params.age} years old] </p>
		);
	}
}

export default WelcomeComponent;