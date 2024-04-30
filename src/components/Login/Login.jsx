import styles from "./Login.module.css";
import { useState } from "react";
import img from "../../assets/img/backgrounds/fondo1.jpg";
import validate from "./validations";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = ({ login, datos }) => {
	const { email, password } = datos;
	const initialState = {
		email: "",
		password: "",
	};

	const [userData, setUserData] = useState(initialState);
	const [incorrect, setIncorrect] = useState(false);
	const [errors, setErrors] = useState(initialState);
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (event) => {
		// ** Agrega las propiedades al objeto inputs que coincida con el valor de input del evento que se está ejecutando
		setUserData({ ...userData, [event.target.name]: event.target.value });

		// ** Valida los errores establecidos en el objeto errors
		setErrors(
			validate({ ...userData, [event.target.name]: event.target.value }),
		);
	};

	const handleSubmit = (event) => {
		try {
			event.preventDefault();
			if (login(userData)) {
				setIncorrect(false);
			} else {
				setIncorrect(true);
				setUserData(initialState);
			}
		} catch (error) {
			alert({
				message: error.message,
			});
		}
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
						className={styles.pass}
						id="pass"
						name="password"
						value={userData.password}
						type={showPassword ? "text" : "password"}
						placeholder="Enter your password..."
						onChange={handleChange}
					></input>
					{userData.password?.length ? (
						showPassword ? (
							<FaEyeSlash
								className={styles.ico}
								onClick={() => {
									setShowPassword(false);
								}}
							></FaEyeSlash>
						) : (
							<FaEye
								className={styles.ico}
								onClick={() => {
									setShowPassword(true);
								}}
							></FaEye>
						)
					) : null}

					{errors.password ? (
						<p className={styles.danger}>{errors.password}</p>
					) : null}

					{!userData.email?.length ? (
						<div className={styles.register}>
							<span>Not registered?</span>
							<span>
								<NavLink to={"/signup"}>
									<strong> Register</strong>
								</NavLink>
							</span>
						</div>
					) : null}

					{incorrect && (
						<p id="incorrect" className={styles.danger}>
							User or password incorrect
						</p>
					)}

					<button onClick={handleSubmit}>Submit</button>
				</form>
			</div>
		</section>
	);
};

export default Login;
