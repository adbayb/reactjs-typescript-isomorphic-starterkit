import * as React from "react";
const styles: any = require("./header.scss");

interface Props {
	//Typescript ne gère pour le moment pas les children (v1.8.10). On doit mettre any pour éviter les erreurs du type:
	//Property 'children' is missing in type 'IntrinsicAttributes & IntrinsicClassAttributes
	//cf. https://github.com/Microsoft/TypeScript/issues/8588 && https://github.com/Microsoft/TypeScript/issues/6471
	children?: String
}

const Header: React.StatelessComponent<Props> = (props: Props) => {
	return(
		<header className={styles.header}>
			<p className={styles.text}>
				{props.children}
			</p>
		</header>
	);
};

export default Header;
