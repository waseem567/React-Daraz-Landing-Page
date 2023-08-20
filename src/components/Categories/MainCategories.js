import React from "react";
import SectionCategories from "./SectionCategories";
import styles from "./Cateogies.module.css";
const MainCategories = () => {
	return (
		<div className={styles.parent__category}>
			<SectionCategories />
		</div>
	);
};

export default MainCategories;
