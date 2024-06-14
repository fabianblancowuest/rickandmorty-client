import styles from "./Landing.module.css";
import intro from "../../assets/video/intro.mp4";
import backgroundImage from "../../assets/img/backgrounds/space_background.jpg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
	const [showContent, setShowContent] = useState(false);
	const [showImage, setShowImage] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowContent(true);
		}, 30000);

		return () => clearTimeout(timer);
	}, []);

	const handleVideoEnd = () => {
		setShowImage(true);
	};

	return (
		<div className={styles.landingContainer}>
			{showContent && (
				<div className={styles.content}>
					<h1 className={styles.fadeIn}>Welcome</h1>
					<p className={styles.fadeIn}>To Rick and Morty App</p>
					<p className={styles.fadeIn}>By Me</p>
				</div>
			)}
			{showImage ? (
				<div
					className={styles.backgroundImage}
					style={{ backgroundImage: `url(${backgroundImage})` }}
				>
					<NavLink className={styles.button} to={"/"}>
						Go to Home
					</NavLink>
				</div>
			) : (
				<video
					className={styles.video}
					src={intro}
					autoPlay
					muted
					onEnded={handleVideoEnd}
				></video>
			)}
		</div>
	);
};

export default Landing;
