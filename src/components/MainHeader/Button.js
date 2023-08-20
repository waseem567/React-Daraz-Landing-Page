import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Button = () => {
	return (
		<button className={styles.button}>
			<FontAwesomeIcon icon={faMagnifyingGlass} fade />
		</button>
	);
};

export default Button;
