import React from "react";
import styles from "./Footer.module.css";

const LinkTab = (props) => {
	return (
		<div className={styles.links__wrapper}>
			<h4 className={styles.links__headline}>{props.linkData.headline}</h4>
			<ul className={styles.links__list}>
				{props.linkData.links.map((link) => (
					<li key={Math.random()} className={styles.links__listItems}>
						{link.linkTitle}
					</li>
				))}
			</ul>
		</div>
	);
};

export default LinkTab;
