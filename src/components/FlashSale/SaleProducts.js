import React from "react";
import SaleProduct from "./SaleProduct";
import styles from "./FlashSale.module.css";
import { Col, Row } from "react-bootstrap";

const SaleProducts = (props) => {
	console.log(props.products);
	return (
		<Row className={styles.products__row}>
			{props.products.map((product) => (
				<Col
					key={Math.random()}
					className={
						!props.justForYou ? styles.product_card : styles.productCard__forYou
					}
					sm
				>
					<SaleProduct product={product} />
				</Col>
			))}
		</Row>
	);
};

export default SaleProducts;
