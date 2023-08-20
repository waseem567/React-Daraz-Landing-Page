import React from "react";
import Category from "./Category";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Cateogies.module.css";

const CATEGORY_PRODUCTS = [
	{
		title: "title",
		src: "https://static-01.daraz.pk/p/a28d19271aa14425549a1692af882fc9.jpg",
	},
	{
		title: "title",
		src: "https://static-01.daraz.pk/p/105c3a3d04a17001c111479243d0fe92.jpg",
	},
	{
		title: "title",
		src: "https://static-01.daraz.pk/p/e2599628e139d2fa695628d2b702c401.jpg",
	},
	{
		title: "title",
		src: "https://static-01.daraz.pk/p/a28d19271aa14425549a1692af882fc9.jpg",
	},
	{
		title: "title",
		src: "https://static-01.daraz.pk/p/105c3a3d04a17001c111479243d0fe92.jpg",
	},
	{
		title: "title",
		src: "https://static-01.daraz.pk/p/e2599628e139d2fa695628d2b702c401.jpg",
	},
	{
		title: "title",
		src: "https://static-01.daraz.pk/p/a28d19271aa14425549a1692af882fc9.jpg",
	},
	{
		title: "title",
		src: "https://static-01.daraz.pk/p/105c3a3d04a17001c111479243d0fe92.jpg",
	},
	{
		title: "title",
		src: "https://static-01.daraz.pk/p/e2599628e139d2fa695628d2b702c401.jpg",
	},
	{
		title: "title",
		src: "https://static-01.daraz.pk/p/a28d19271aa14425549a1692af882fc9.jpg",
	},
	{
		title: "title",
		src: "https://static-01.daraz.pk/p/105c3a3d04a17001c111479243d0fe92.jpg",
	},
	{
		title: "title",
		src: "https://static-01.daraz.pk/p/e2599628e139d2fa695628d2b702c401.jpg",
	},
	{
		title: "title",
		src: "https://static-01.daraz.pk/p/a28d19271aa14425549a1692af882fc9.jpg",
	},
	{
		title: "title",
		src: "https://static-01.daraz.pk/p/105c3a3d04a17001c111479243d0fe92.jpg",
	},
	{
		title: "title",
		src: "https://static-01.daraz.pk/p/e2599628e139d2fa695628d2b702c401.jpg",
	},
	{
		title: "title",
		src: "https://static-01.daraz.pk/p/a28d19271aa14425549a1692af882fc9.jpg",
	},
];
const SectionCategories = () => {
	return (
		// here
		<Container style={{ padding: "20px 0px", maxWidth: "1150px" }}>
			<Row className={styles.category__row}>
				<h3 className={styles.cat__text}>Categories</h3>
				{CATEGORY_PRODUCTS.map((product) => (
					<Col className={styles.category__col} style={{ padding: "0" }} sm>
						<Category product={product} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default SectionCategories;
