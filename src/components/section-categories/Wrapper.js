import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Category from "./Category";
import styles from "./Category.module.css";

const CATEGORIES = [
	{
		src: "https://icms-image.slatic.net/images/ims-web/dd27eb9b-9dae-4bf9-ba1e-dd6eef36b678.png",
		text: "MART",
	},
	{
		src: "https://icms-image.slatic.net/images/ims-web/dd27eb9b-9dae-4bf9-ba1e-dd6eef36b678.png",
		text: "FASHION",
	},
	{
		src: "https://icms-image.slatic.net/images/ims-web/dd27eb9b-9dae-4bf9-ba1e-dd6eef36b678.png",
		text: "BEAUTY",
	},
	{
		src: "https://icms-image.slatic.net/images/ims-web/dd27eb9b-9dae-4bf9-ba1e-dd6eef36b678.png",
		text: "DECORE",
	},
];

const Wrapper = () => {
	return (
		<div className={styles.background}>
			<Container style={{ padding: "20px 0px", maxWidth: "1150px" }}>
				<Row>
					{CATEGORIES.map((category) => (
						<Col key={Math.random()}>
							<Category src={category.src} text={category.text} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Wrapper;
