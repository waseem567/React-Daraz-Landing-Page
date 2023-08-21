import React from "react";
import styles from "./Header.module.css";

const Search = () => {
	return (
		<>
			<input
				className={styles.inputStyles}
				type="text"
				placeholder="Search in daraz..."
			/>
		</>
	);
};

export default Search;
