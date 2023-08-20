import React from "react";
import SaleProducts from "../FlashSale/SaleProducts";
import { Container } from "react-bootstrap";
import LoadButton from "./LoadButton";
// just for you products
const PRODUCTS = [
	{
		src: "https://static-01.daraz.pk/p/a3b97f487d6f060f3f7ace8fc457bdf9.jpg_200x200q80-product.jpg_.webp",
		alt: "child toy",
		text: "lorem ipsum dummy text is widely used now a days. lorem ipsum dummy text is widely used now a days.",
		oldPrice: 100,
		newPrice: 20,
	},
	{
		src: "https://static-01.daraz.pk/p/8a4baab36e86088df6bd57d30368fde6.jpg_200x200q80-product.jpg_.webp",
		alt: "child toy",
		text: "lorem ipsum dummy text is widely used now a days. lorem ipsum dummy text is widely used now a days.",
		oldPrice: 100,
		newPrice: 20,
	},
	{
		src: "https://static-01.daraz.pk/p/e74efd99482eec94c3bedd745b26519c.jpg_200x200q80-product.jpg_.webp",
		alt: "child toy",
		text: "lorem ipsum dummy text is widely used now a days. lorem ipsum dummy text is widely used now a days.",
		oldPrice: 100,
		newPrice: 20,
	},
	{
		src: "https://static-01.daraz.pk/p/026cfe8b49b0f37737c9307bfe971dd9.jpg_200x200q80-product.jpg_.webp",
		alt: "child toy",
		text: "lorem ipsum dummy text is widely used now a days. lorem ipsum dummy text is widely used now a days.",
		oldPrice: 100,
		newPrice: 20,
	},
	{
		src: "https://static-01.daraz.pk/p/5d7b4493fec58ab8aab4ee4b4de01892.jpg_200x200q80-product.jpg_.webp",
		alt: "child toy",
		text: "lorem ipsum dummy text is widely used now a days. lorem ipsum dummy text is widely used now a days.",
		oldPrice: 100,
		newPrice: 20,
	},
	{
		src: "https://static-01.daraz.pk/p/eae22f92ed20fcf0ac7eb83866c4566b.jpg_200x200q80-product.jpg_.webp",
		alt: "child toy",
		text: "lorem ipsum dummy text is widely used now a days. lorem ipsum dummy text is widely used now a days.",
		oldPrice: 100,
		newPrice: 20,
	},
	{
		src: "https://static-01.daraz.pk/p/8be7685eefcd133c7b4873d40dcabf42.jpg_200x200q80-product.jpg_.webp",
		alt: "child toy",
		text: "lorem ipsum dummy text is widely used now a days. lorem ipsum dummy text is widely used now a days.",
		oldPrice: 100,
		newPrice: 20,
	},
	{
		src: "https://static-01.daraz.pk/p/1a9be9d7ac06eb6bbca68291a38dcb80.jpg_200x200q80-product.jpg_.webp",
		alt: "child toy",
		text: "lorem ipsum dummy text is widely used now a days. lorem ipsum dummy text is widely used now a days.",
		oldPrice: 100,
		newPrice: 20,
	},
	{
		src: "https://static-01.daraz.pk/p/c24d8b1f10e76568c66f97627baae7bc.jpg_200x200q80-product.jpg_.webp",
		alt: "child toy",
		text: "lorem ipsum dummy text is widely used now a days. lorem ipsum dummy text is widely used now a days.",
		oldPrice: 100,
		newPrice: 20,
	},
	{
		src: "https://static-01.daraz.pk/p/7b344e214cac1eb8cee88a2e8888e194.jpg",
		alt: "child toy",
		text: "lorem ipsum dummy text is widely used now a days. lorem ipsum dummy text is widely used now a days.",
		oldPrice: 100,
		newPrice: 20,
	},
	{
		src: "https://static-01.daraz.pk/p/5b9089e829e1ee38a91055fae9fb1bd3.jpg_200x200q80-product.jpg_.webp",
		alt: "child toy",
		text: "lorem ipsum dummy text is widely used now a days. lorem ipsum dummy text is widely used now a days.",
		oldPrice: 100,
		newPrice: 20,
	},
	{
		src: "https://static-01.daraz.pk/p/7286ce718cf71ff0424c0329bd073565.jpg_200x200q80-product.jpg_.webp",
		alt: "child toy",
		text: "lorem ipsum dummy text is widely used now a days. lorem ipsum dummy text is widely used now a days.",
		oldPrice: 100,
		newPrice: 20,
	},
];

const MainJFY = () => {
	return (
		<div style={{ backgroundColor: "#f5f5f5" }}>
			<Container style={{ padding: "20px 0px", maxWidth: "1150px" }}>
				<div>
					<h4>Flash Sale</h4>
				</div>
				<SaleProducts justForYou={true} products={PRODUCTS} />
				<LoadButton />
			</Container>
		</div>
	);
};

export default MainJFY;
