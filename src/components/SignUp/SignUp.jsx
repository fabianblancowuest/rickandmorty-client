import { useState } from "react";
import styles from "./SignUp.module.css";
import { validate } from "./validate";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { signUp } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const initialState = {
		name: "",
		email: "",
		password: "",
	};
	const [inputs, setInputs] = useState(initialState);
	const [errors, setErrors] = useState(initialState);
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (event) => {
		setInputs({
			...inputs,
			[event.target.name]: event.target.value,
		});

		setErrors(
			validate({
				...inputs,
				[event.target.name]: event.target.value,
			}),
		);
	};

	const handleSubmit = (event) => {
		try {
			event.preventDefault();
			console.log(errors);

			// const { name, email, password } = errors;

			// if (inputs.name === "" || inputs.email === "" || inputs.password === "") {
			// 	Swal.fire({
			// 		icon: "error",
			// 		title: "Oops...",
			// 		text: "You must complete all fields!",
			// 	});
			// } else {
			dispatch(signUp(inputs));

			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "User registered succesfully!",
				showConfirmButton: false,
				timer: 2000,
			});

			navigate("/");
			// }
		} catch (error) {
			alert(error.message);
		}
	};
	return (
		<section className={styles.section}>
			<div className={styles.formDiv}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<label>Name</label>
					<input
						type="text"
						name="name"
						placeholder="Enter your name"
						value={inputs.name}
						onChange={handleChange}
					></input>
					{errors.name && <p>{errors.name}</p>}
					<label>Email</label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						value={inputs.email}
						onChange={handleChange}
					></input>
					{errors.email && <p>{errors.email}</p>}
					<label>Password</label>
					<input
						type={showPassword ? "text" : "password"}
						name="password"
						placeholder="Enter your password"
						value={inputs.password}
						onChange={handleChange}
					></input>
					{errors.password && <p>{errors.password}</p>}
					{inputs.password?.length ? (
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
					<div className={styles.register}>
						<span>already have an account?</span>
						<span>
							<NavLink to={"/"}>
								<strong> Log in</strong>
							</NavLink>
						</span>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		</section>
	);
};

export default SignUp;
