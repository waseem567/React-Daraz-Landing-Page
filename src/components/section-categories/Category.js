import React from "react";
import styles from "./Category.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Category = (props) => {
	return (
		<div className={styles.categoryRoundCard}>
			<div className={styles.text}>
				<div>
					<img src={props.src} alt={props.text} />
				</div>
				<div>
					<span>{props.text}</span>
				</div>
			</div>
			<div className="text">
				<FontAwesomeIcon
					icon={faChevronRight}
					shake
					style={{ color: "green", margin: "0px 10px" }}
				/>
			</div>
		</div>
	);
};

export default Category;
