import * as React from "react";

interface Props {
	children: React.ReactChild
}

const Single = (props: Props) => {
	return(
		<div className="container">
			{props.children}
		</div>
	);
};

export default Single;
