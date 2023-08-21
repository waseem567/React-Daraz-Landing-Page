import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

const Cart = () => {
	return (
		<div className={styles.cart}>
			<FontAwesomeIcon icon={faCartPlus} fade size="lg" />
			<div className={styles.cartitems}>0</div>
		</div>
	);
};

export default Cart;
