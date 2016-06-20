import * as React from "react";
const styles = require("./footer.scss");

interface FooterPropTypes {
	children: React.ReactNode
}

const Footer = (props: FooterPropTypes) => {
	return(
		<footer className={styles.footer}>
			{props.children}
		</footer>
	);
};

export default Footer;
