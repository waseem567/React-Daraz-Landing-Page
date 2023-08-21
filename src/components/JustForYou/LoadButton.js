import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const LoadButton = () => {
	return (
		<Row>
			<Col style={{ display: "flex", justifyContent: "center" }}>
				<Button
					style={{
						color: "#f57224",
						borderColor: "#f57224",
						background: "none",
						borderRadius: "0px",
						fontWeight: "500",
						fontSize: "14px",
						display: "block",
						width: "30%",
					}}
				>
					LOAD MORE
				</Button>
			</Col>
		</Row>
	);
};

export default LoadButton;
