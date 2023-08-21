import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import Categories from "./Categories";

import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";

const CAROUSEL = [
	{
		src: image3,
		bg: "purple",
		link: "www.google.com",
	},
	{
		src: image1,
		bg: "pink",
		link: "www.google.com",
	},
	{
		src: image2,
		bg: "rgb(212, 178, 195)",
		link: "www.google.com",
	},
];
const Carousel = (props) => {
	const [carousel, setCarousel] = useState({
		src: image2,
		bg: "pink",
		link: "link",
	});

	var index = 0;

	function carouselhandler() {
		const obj = {
			bg: CAROUSEL[index].bg,
			src: CAROUSEL[index].src,
			link: CAROUSEL[index].link,
		};
		setCarousel(obj);

		index++;

		if (index > CAROUSEL.length - 1) {
			index = 0;
		}
	}

	useEffect(() => {
		var interval = setInterval(carouselhandler, 5000);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<div
			className={styles.mainCarousel__wrapper}
			style={{ background: `${carousel.bg}` }}
		>
			<div
				className={styles.innerCarousel__wrapper}
				style={{ width: window.innerWidth < 1300 && "100%" }}
			>
				{window.innerWidth > 600 && (
					<div className={styles.categoriesOption__wrapper}>
						<Categories />
					</div>
				)}

				<div
					className={styles.carousel__images}
					style={{ width: window.innerWidth < 600 && "100%" }}
				>
					<img src={carousel.src} alt="carousel asset" />
				</div>
			</div>
		</div>
	);
};

export default Carousel;
