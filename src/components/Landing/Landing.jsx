import styles from "./Landing.module.css";
import intro from "../../assets/video/intro.mp4";
import backgroundImage from "../../assets/img/backgrounds/favorites3.jpg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
	const [showWelcome, setShowWelcome] = useState(false);
	const [showParagraph, setShowParagraph] = useState(false);
	const [showImage, setShowImage] = useState(false);
	const [showCopyright, setShowCopyright] = useState(false);
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const welcomeTimer = setTimeout(() => {
			setShowWelcome(true);
		}, 30000); // Mostrar 'Welcome' después de 30 segundos

		const paragraphTimer = setTimeout(() => {
			setShowParagraph(true);
		}, 31000); // Mostrar el primer párrafo 1 segundo después

		const copyright = setTimeout(() => {
			setShowCopyright(true);
		}, 33000); // Mostrar el último párrafo 2 segundos después

		const button = setTimeout(() => {
			setShowButton(true);
		}, 34000); // Mostrar el último párrafo 2 segundos después

		return () => {
			clearTimeout(welcomeTimer);
			clearTimeout(paragraphTimer);
			clearTimeout(copyright);
			clearTimeout(button);
		};
	}, []);

	const handleVideoEnd = () => {
		setShowImage(true);
	};

	return (
		<div className={styles.landingContainer}>
			{showImage ? (
				<div
					className={styles.backgroundImage}
					style={{ backgroundImage: `url(${backgroundImage})` }}
				>
					<div className={styles.content}>
						{showWelcome && <h1 className={styles.fadeIn}>Welcome</h1>}
						{showParagraph && (
							<p className={styles.fadeIn}>To Rick and Morty App</p>
						)}
						{showCopyright && (
							<h6 className={styles.fadeIn}>By Fabián Blanco Wuest &#169;</h6>
						)}
						{showButton && (
							<NavLink className={styles.btnLanding} to={"/cards"}>
								Go to Home
							</NavLink>
						)}
					</div>
				</div>
			) : (
				<video
					className={styles.video}
					src={intro}
					autoPlay
					onEnded={handleVideoEnd}
				></video>
			)}
		</div>
	);
};

export default Landing;
