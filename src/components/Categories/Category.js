import React from "react";
import styles from "./Cateogies.module.css";

const Category = (props) => {
	return (
		<div className={styles.product__box}>
			<div className={styles.img__cover}>
				<img src={props.product.src} alt={props.product.title} />
			</div>
			<p className={styles.text}>{props.product.title}</p>
		</div>
	);
};

export default Category;
