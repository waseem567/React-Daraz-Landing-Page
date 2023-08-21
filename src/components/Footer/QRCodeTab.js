import React from "react";
import styles from "./Footer.module.css";
import ButtonGroup from "./ButtonGroup";

const QRCodeTab = () => {
	return (
		<div className={styles.qrcode__wrapper}>
			<div className={styles.flexStart}>
				<div className={styles.qr__box}>
					<img
						src="https://laz-img-cdn.alicdn.com/images/ims-web/TB18aqePBLoK1RjSZFuXXXn0XXa.png"
						alt="qr code"
					/>
				</div>
				<div className={styles.iconBox}>
					<div className={styles.icon}>
						<img
							src="https://icms-image.slatic.net/images/ims-web/9bef0e70-2a7c-48b7-91cb-59c5c83c5b46.png"
							alt="icon"
						/>
					</div>
					<div className={styles.orangeText}>Happy Shopping</div>
					<div className={styles.downloadText}>Download App</div>
				</div>
			</div>
			<ButtonGroup />
		</div>
	);
};

export default QRCodeTab;
