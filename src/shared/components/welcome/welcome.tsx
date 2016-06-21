import * as React from "react";

interface Props {
	params: {
		name: String,
		age: Number
	}
}

class Welcome extends React.Component<Props, any> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		let params = this.props.params;

		return(
			<p> Welcome {params.name} to React world ! [You are {params.age} years old] </p>
		);
	}
}

export default Welcome;
