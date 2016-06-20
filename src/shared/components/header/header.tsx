import * as React from "react";
const styles = require("./header.scss");

interface HeaderPropTypes {
	children: String
}

const Header = (props: HeaderPropTypes) => {
	return(
		<header className={styles.header}>
			<p className={styles.text}>
				{props.children}
			</p>
		</header>
	);
};

export default Header;
