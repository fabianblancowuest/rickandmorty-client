import styles from "./Landing.module.css";
import intro from "../../assets/video/intro.mp4";
import backgroundImage from "../../assets/img/backgrounds/detail-2.png";
import playButton from "../../assets/img/icons/play-button.png";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
	const [showWelcome, setShowWelcome] = useState(false);
	const [showParagraph, setShowParagraph] = useState(false);
	const [showImage, setShowImage] = useState(false);
	const [showCopyright, setShowCopyright] = useState(false);
	const [showButton, setShowButton] = useState(false);
	const [videoStarted, setVideoStarted] = useState(false);
	const videoRef = useRef(null);
	const [showContent, setShowContent] = useState(false);

	// useEffect(() => {
	// 	if (videoStarted) {
	// 		const welcomeTimer = setTimeout(() => {
	// 			setShowWelcome(true);
	// 		}, 30000); // Mostrar 'Welcome' después de 30 segundos

	// 		const paragraphTimer = setTimeout(() => {
	// 			setShowParagraph(true);
	// 		}, 31000); // Mostrar el primer párrafo 1 segundo después

	// 		const copyright = setTimeout(() => {
	// 			setShowCopyright(true);
	// 		}, 33000); // Mostrar el último párrafo 2 segundos después

	// 		const button = setTimeout(() => {
	// 			setShowButton(true);
	// 		}, 34000); // Mostrar el último párrafo 2 segundos después

	// 		return () => {
	// 			clearTimeout(welcomeTimer);
	// 			clearTimeout(paragraphTimer);
	// 			clearTimeout(copyright);
	// 			clearTimeout(button);
	// 		};
	// 	}
	// }, [videoStarted]);

	const handleVideoEnd = () => {
		setShowImage(true);
	};

	const handlePlayVideo = () => {
		if (videoRef.current) {
			videoRef.current.play();
			setVideoStarted(true);
		}
	};

	const handleSkipIntro = () => {
		if (videoRef.current) {
			videoRef.current.pause();
			setShowImage(true);
			setShowContent(true);
		}
	};

	return (
		<header className={styles.landingContainer}>
			{showImage ? (
				<div
					className={styles.backgroundImage}
					style={{ backgroundImage: `url(${backgroundImage})` }}
				>
					<div className={styles.content}>
						<h1 className={styles.fadeIn}>Welcome</h1>
						<p className={styles.fadeIn}>To Rick and Morty App</p>
						<h6 className={styles.fadeIn}>By Fabián Blanco Wuest &#169;</h6>
						<NavLink className={`${styles.btnLanding}`} to={"/cards"}>
							Go to Home
						</NavLink>
					</div>
				</div>
			) : (
				<div className={styles.videoContainer}>
					{!videoStarted && (
						<button className={styles.btnStart} onClick={handlePlayVideo}>
							Start <img src={playButton} alt="play-button"></img>
						</button>
					)}
					<video
						ref={videoRef}
						className={styles.video}
						src={intro}
						onEnded={handleVideoEnd}
					></video>
					{videoStarted && (
						<button className={styles.skipButton} onClick={handleSkipIntro}>
							Skip Intro
						</button>
					)}
				</div>
			)}
		</header>
	);
};

export default Landing;
