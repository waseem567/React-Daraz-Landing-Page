import React from "react";
import styles from "./Header.module.css";

const logo = require("../assets/static-images/daraz-main.png");

const Image = (props) => {
	return (
		<img
			className={styles.image}
			src={logo}
			alt="banner"
			height={props.height}
			width={props.width}
		/>
	);
};

export default Image;
