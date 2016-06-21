import * as React from "react";
const styles: any = require("./footer.scss");

interface Props {
	children?: React.ReactNode
}

const Footer: React.StatelessComponent<Props> = (props: Props) => {
	return(
		<footer className={styles.footer}>
			{props.children}
		</footer>
	);
};

export default Footer;
