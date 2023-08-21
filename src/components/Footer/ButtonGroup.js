import React from "react";
import styles from "./Footer.module.css";
import { Button, Row, Col } from "react-bootstrap";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonGroup = () => {
	return (
		<div className={styles.buttonGroup__wrapper}>
			<Row>
				<Col sm className={styles.col}>
					<Button className={styles.button}>
						<FontAwesomeIcon
							icon={faAppleWhole}
							style={{ color: "#ffffff", fontSize: "22px" }}
						/>
						<span className={styles.buttonText__box}>
							<p className={styles.dld} style={{ fontSize: "8px" }}>
								Download on
							</p>
							<p className={styles.appstr}>App Store</p>
						</span>
					</Button>
				</Col>
				<Col sm className={styles.col}>
					<Button className={styles.button}>
						<FontAwesomeIcon
							icon={faAppleWhole}
							style={{ color: "#ffffff", fontSize: "22px" }}
						/>
						<span className={styles.buttonText__box}>
							<p className={styles.dld} style={{ fontSize: "8px" }}>
								Download on
							</p>
							<p className={styles.appstr}>App Store</p>
						</span>
					</Button>
				</Col>
				<Col sm className={styles.col}>
					<Button className={styles.button}>
						<FontAwesomeIcon
							icon={faAppleWhole}
							style={{ color: "#ffffff", fontSize: "22px" }}
						/>
						<span className={styles.buttonText__box}>
							<p className={styles.dld} style={{ fontSize: "8px" }}>
								Download on
							</p>
							<p className={styles.appstr}>App Store</p>
						</span>
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default ButtonGroup;
