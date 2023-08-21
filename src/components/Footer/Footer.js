import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LinkTab from "./LinkTab";
import styles from "./Footer.module.css";
import QRCodeTab from "./QRCodeTab";

const CUSTOMER_CARE_LINKS = {
	headline: "CUSTOMER CARE",
	links: [
		{ linkTitle: "Help Center", link: "/" },
		{ linkTitle: "How to Buy", link: "/" },
		{ linkTitle: "Corporate & Bulk Purchasing", link: "/" },
		{ linkTitle: "Returns & Refunds", link: "/" },
		{ linkTitle: "Daraz Shop", link: "/" },
		{ linkTitle: "Contact Us", link: "/" },
		{ linkTitle: "Purchase Protection", link: "/" },
		{ linkTitle: "Daraz Pick up Points", link: "/" },
	],
};
const MAKE_MONEY_LINKS = {
	headline: "MAKE MONEY WITH US",
	links: [
		{ linkTitle: "Help Center", link: "/" },
		{ linkTitle: "Daraz Shop", link: "/" },
		{ linkTitle: "Contact Us", link: "/" },
	],
};
const DARAZ_LINKS = {
	headline: "DARAZ",
	links: [
		{ linkTitle: "Help Center", link: "/" },
		{ linkTitle: "Daraz Shop", link: "/" },
		{ linkTitle: "Terms and Condition", link: "/" },
	],
};
const Footer = () => {
	return (
		<Container style={{ padding: "20px 0px", maxWidth: "1150px" }}>
			<Row>
				<Col sm>
					<LinkTab linkData={CUSTOMER_CARE_LINKS} />
					<LinkTab linkData={MAKE_MONEY_LINKS} />
				</Col>
				<Col sm className={styles.flexbox}>
					<LinkTab linkData={DARAZ_LINKS} />
				</Col>
				<Col sm lg={4}>
					<QRCodeTab />
				</Col>
				<Col sm></Col>
			</Row>
		</Container>
	);
};

export default Footer;
