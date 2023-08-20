import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./FlashSale.module.css";

const SaleHeader = () => {
	return (
		// here
		<Row className={styles.flashSale__row} style={{ background: "white" }}>
			<Col
				style={{ color: "orange", fontFamily: "sans-serif", paddingTop: "6px" }}
			>
				Sale on now
			</Col>
			<Col style={{ justifyContent: "end" }}>
				<Button
					style={{
						color: "#f57224",
						borderColor: "#f57224",
						background: "none",
						borderRadius: "0px",
						fontWeight: "500",
						fontSize: "14px",
						float: "right",
						display: "block",
					}}
				>
					SHOP MORE
				</Button>
			</Col>
		</Row>
	);
};

export default SaleHeader;
