import styles from "./Login.module.css";
import { useState } from "react";
import img from "../../assets/img/backgrounds/fondo1.jpg";
import validate from "./validations";

const Login = ({ login, datos }) => {
	const initialState = {
		email: "",
		password: "",
	};

	const [userData, setUserData] = useState(initialState);
	const [errors, setErrors] = useState(initialState);

	const handleChange = (event) => {
		// ** Agrega las propiedades al objeto inputs que coincida con el valor de input del evento que se está ejecutando
		setUserData({ ...userData, [event.target.name]: event.target.value });

		// ** Valida los errores establecidos en el objeto errors
		setErrors(
			validate({ ...userData, [event.target.name]: event.target.value }),
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		login(userData);
		setUserData("");
	};

	return (
		<section className={styles.section}>
			<div className={styles.formDiv}>
				<img src={img} className={styles.img}></img>
				<form className={styles.form}>
					<label>EMAIL</label>
					<input
						name="email"
						value={userData.email}
						type="text"
						placeholder="Enter your email..."
						onChange={handleChange}
					></input>
					{errors.email ? (
						<p className={styles.danger}>{errors.email}</p>
					) : null}
					<label>PASSWORD</label>
					<input
						name="password"
						value={userData.password}
						type="password"
						placeholder="Enter your password..."
						onChange={handleChange}
					></input>
					{errors.password ? (
						<p className={styles.danger}>{errors.password}</p>
					) : null}
					{!datos ? (
						<p className={styles.danger}>Usuario o constraseña incorrecto(s)</p>
					) : null}
					<button onClick={handleSubmit}>Submit</button>
				</form>
			</div>
		</section>
	);
};

export default Login;
