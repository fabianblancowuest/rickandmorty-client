import { useState } from "react";
import styles from "./SignUp.module.css";
import { validate } from "./validate";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { signUp } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const initialState = {
		name: "",
		email: "",
		password: "",
		birthdate: "",
		sex: "",
	};
	const [inputs, setInputs] = useState(initialState);
	const [errors, setErrors] = useState(initialState);

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
	// function signUp(userData) {
	// 	const URL = "http://localhost:3001/rickandmorty/user/signup/";

	// 	try {
	// 		const { data } = axios.post(URL, userData);

	// 		Swal.fire({
	// 			position: "top-end",
	// 			icon: "success",
	// 			title: "User registered succesfully!",
	// 			showConfirmButton: false,
	// 			timer: 3000,
	// 		});

	// 		return data;
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }
	// const users = useSelector((state) => state.users);
	const signUp = (userData) => {
		const URL = "http://localhost:3001/rickandmorty/user/signup/";
		axios.post(URL, userData);
	};

	const handleSubmit = () => {
		// dispatch(signUp(inputs));
		// console.log(users);
		signUp(inputs);
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
						type="password"
						name="password"
						placeholder="Enter your password"
						value={inputs.password}
						onChange={handleChange}
					></input>
					{errors.password && <p>{errors.password}</p>}
					<label>Date of birth</label>
					<input
						type="date"
						name="birthdate"
						value={inputs.birthdate}
						onChange={handleChange}
					></input>
					{errors.birthdate && <p>{errors.birthdate}</p>}
					<label htmlFor="sex">Choose your sex</label>
					<select
						id="sex"
						name="sex"
						onChange={handleChange}
						value={inputs.sex}
					>
						<option value="">--Select an option--</option>
						<option value="male" id="sex" name="sex">
							Male
						</option>
						<option value="female" id="sex" name="sex">
							Female
						</option>
					</select>
					{errors.sex && <p>{errors.sex}</p>}
					<button type="submit">Enviar</button>
				</form>
			</div>
		</section>
	);
};

export default SignUp;
