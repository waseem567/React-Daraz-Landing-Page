import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Search from "./Search";
import Button from "./Button";
import Cart from "./Cart";
import Image from "./Image";
import { Container, Row, Col } from "react-bootstrap";

const logo = require("../assets/static-images/daraz.png");

const Header = () => {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	// we use the useEffect hook to listen to the window resize event
	useEffect(() => {
		window.onresize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
	}, []);
	return (
		<div className={styles.mainHeader__wrapper}>
			<Container className={styles.con}>
				<div className={styles.inner__wrapper}>
					<Row className={styles.row}>
						{windowSize.width > 650 && (
							<Col xl={1} lg={2} md={2} sm={2}>
								<img src={logo} alt="main logo" height={41} width={135} />
							</Col>
						)}

						<Col xl={6} lg={8} md={8} sm={8} xs={11}>
							<div className={styles.search__wrapper}>
								<Search />
								<Button />
							</div>
						</Col>
						<Col
							xl={2}
							lg={2}
							md={2}
							sm={2}
							xs={1}
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Cart />
						</Col>
						{windowSize.width > 1400 && (
							<Col xl={3}>
								<Image height="45px" width="188px" />
							</Col>
						)}
					</Row>
				</div>
			</Container>
		</div>
	);
};

export default Header;
