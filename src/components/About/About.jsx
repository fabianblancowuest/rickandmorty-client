import styles from "./About.module.css";
import imagen from "../../assets/img/backgrounds/perfil_upscaled.png";
import linkedin from "../../assets/img/backgrounds/linkedin-ico.svg";
import github from "../../assets/img/backgrounds/github-ico.svg";

const technologies = ["HTML", "CSS", "JavaScript", "React", "NodeJS", "SQL"];
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
						<h3>Programador Full-Stack</h3>
						<h4>Formosa, Argentina</h4>
						<h5>
							Apasionado de aprender nuevas tecnologías y superar desafíos
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
							{/* <a href="https://www.instagram.com/fabianblancowuest" target="_blank" rel="noreferrer"><img src={instagram} className={styles.imgInstagram}></img></a> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
