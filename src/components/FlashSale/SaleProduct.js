import React from "react";
import styles from "./FlashSale.module.css";

const SaleProduct = (props) => {
	const discount =
		((props.product.oldPrice - props.product.newPrice) /
			props.product.oldPrice) *
		100;
	return (
		<div className={styles.product__card}>
			<div className={styles.w100}>
				<img
					src={props.product.src}
					alt={props.product.alt}
					height={"188px"}
					width={"188px"}
				/>
			</div>
			<div className={styles.bgWhite}>
				<p className={styles.flashSale__text}>{props.product.text}</p>
				<div className={styles.flashSale__price}>
					<span>Rs.</span>
					<span>{props.product.oldPrice}</span>
				</div>
				<div className={styles.flashSale__originPrice}>
					<span className={styles.flashSale__oldPrice}>
						Rs.{props.product.newPrice}
					</span>
					<span className={styles.flashSale__discount}> -{discount}</span>
				</div>
			</div>
		</div>
	);
};

export default SaleProduct;
