import React from "react";
import Container from "react-bootstrap/Container";
import SaleHeader from "./SaleHeader";
import styles from "./FlashSale.module.css";
import SaleProducts from "./SaleProducts";

// sale products
const SALE_PRODUCTS = [
	{
		src: "https://static-01.daraz.pk/p/58533df25ff5dd23c7f678dc7b4b009d.jpg_200x200q80-product.jpg_.webp",
		alt: "child toy",
		text: "a fine toy. you must buy this to your child !!",
		oldPrice: 100,
		newPrice: 20,
	},
	{
		src: "https://static-01.daraz.pk/p/9039f89ad8d99947c4671f9059ebdd0a.jpg_200x200q80-product.jpg_.webp",
		alt: "child toy",
		text: "a fine toy. you must buy this to your child !!",
		oldPrice: 100,
		newPrice: 20,
	},
	{
		src: "https://static-01.daraz.pk/p/edbaf694c9e2d91a99f131d70c95b4e0.jpg_200x200q80-product.jpg_.webp",
		alt: "child toy",
		text: "a fine toy. you must buy this to your child !!",
		oldPrice: 100,
		newPrice: 20,
	},
	{
		src: "https://static-01.daraz.pk/p/7403fe508c156c1a6731c389a413d380.jpg_200x200q80-product.jpg_.webp",
		alt: "child toy",
		text: "a fine toy. you must buy this to your child !!",
		oldPrice: 100,
		newPrice: 20,
	},
	{
		src: "https://static-01.daraz.pk/p/f0f6ac770d41b75f1ad433ecb3bc0b79.jpg_200x200q80-product.jpg_.webp",
		alt: "child toy",
		text: "a fine toy. you must buy this to your child !!",
		oldPrice: 100,
		newPrice: 20,
	},
	{
		src: "https://static-01.daraz.pk/p/7b344e214cac1eb8cee88a2e8888e194.jpg",
		alt: "child toy",
		text: "a fine toy. you must buy this to your child !!",
		oldPrice: 100,
		newPrice: 20,
	},
];
const MainFlashSale = () => {
	return (
		<div className={styles.background}>
			<Container style={{ padding: "20px 0px", maxWidth: "1150px" }}>
				<div>
					<h4 className={styles.grayText}>Flash Sale</h4>
				</div>

				<SaleHeader />
				<SaleProducts products={SALE_PRODUCTS} />
			</Container>
		</div>
	);
};

export default MainFlashSale;
