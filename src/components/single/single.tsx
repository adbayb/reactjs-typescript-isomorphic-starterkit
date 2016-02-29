import * as React from "react";

class SingleComponent extends React.Component<any, any> {
	constructor(props:any) {
		super(props);
	}

	render() {
		return (
			<div className="container single">
				{this.props.children}
			</div>
		);
	}
}

export default SingleComponent;