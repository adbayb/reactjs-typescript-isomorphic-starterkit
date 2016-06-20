import * as React from "react";

interface SinglePropTypes {
	children: React.ReactChild
}

const Single = (props: SinglePropTypes) => {
	return(
		<div className="container">
			{props.children}
		</div>
	);
};

export default Single;
