import styles from "./Footer.module.css";

function Footer() {
	return (
		<div className={styles.footerContainer}>
			<div className={styles.copyright}>
				<p>Created by Fabian Blanco Wuest (2024) &#169;</p>
			</div>
		</div>
	);
}

export default Footer;
