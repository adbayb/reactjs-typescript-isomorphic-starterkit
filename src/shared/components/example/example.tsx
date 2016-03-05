import * as React from "react";
import "./example.css";

class ExampleComponent extends React.Component<any, any> {
	constructor(props:any) {
		super(props);
	}

	render() {
		return (
			<div>
				<p className="text"> I'm the example Component and I'm lazy </p>
				<img src={require('./img/react.png')} className="logo"/>
			</div>
		);
	}
}

export default ExampleComponent;