import styles from "./About.module.css";
import imagen from "../../assets/img/backgrounds/perfil-tiny.jpg";
import linkedin from "../../assets/img/icons/linkedin.png";
import github from "../../assets/img/icons/logotipo-de-github.png";
import portafolio from "../../assets/img/icons/portafolio.png";

const technologies = [
	"HTML",
	"CSS",
	"JavaScript",
	"React.js",
	"Next.js",
	"Node.js",
	"SQL",
];
const showTechs = technologies.map((item) => <li key={item}>{item}</li>);

const About = () => {
	return (
		<>
			<div className={styles.about}>
				<div className={styles.container}>
					<div className={styles.imgPerfilContainer}>
						<img src={imagen} className={styles.imgPerfil}></img>
					</div>
					<div className={styles.info}>
						<h2>Fabián Blanco Wuest</h2>
						<h3>Full-Stack Developer</h3>
						<h4>Formosa, Argentina</h4>
						<h5>
							Passionate about learning new technologies and overcoming
							challenges
						</h5>
						<ul className={styles.ul}>{showTechs}</ul>
						<div className={styles.imgContainer}>
							<a
								href="https://www.linkedin.com/in/fabi%C3%A1n-blanco-wuest-04979b196/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={linkedin}
									title="Visita mi perfil en LinkedIn"
									className={styles.imgLinkedin}
								></img>
							</a>
							<a
								href="https://github.com/fabianblancowuest"
								target="_blank"
								rel="noreferrer"
							>
								<img src={github} className={styles.imgGithub}></img>
							</a>
							<a
								href="https://fabianblancowuest.netlify.app/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={portafolio} className={styles.imgPortafolio}></img>
							</a>
							{/* <a href="https://www.instagram.com/fabianblancowuest" target="_blank" rel="noreferrer"><img src={instagram} className={styles.imgInstagram}></img></a> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
