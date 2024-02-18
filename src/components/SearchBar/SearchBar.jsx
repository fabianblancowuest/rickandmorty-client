import styles from "./SearchBar.module.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { cleanScreen, searchById } from "../../redux/actions/actions.js";
import Swal from "sweetalert2";
export default function SearchBar() {
	// **Estado local
	const location = useLocation();
	const currentPath = location.pathname;
	const characters = useSelector((state) => state.characters);
	const initialState = "";
	const [id, setId] = useState(initialState);

	const inputRef = useRef(null);

	const dispatch = useDispatch();

	const repeated = characters.filter(
		(character) => character.id === parseInt(id),
	);

	function handleChange(event) {
		// console.log("funciona el handle", event)
		setId(event.target.value);
	}

	const handleKeyPress = (event) => {
		// event.preventDefault();
		if (event && event.key === "Enter") {
			// Lógica que se ejecuta al presionar Enter
			// console.log('Se presionó la tecla Enter');
			if (!id) {
				return Swal.fire("Yo must enter an id!");
			}

			if (repeated.length) {
				return Swal.fire({
					title: "Such a character already exists",
					showClass: {
						popup: `
						animate__animated
						animate__fadeInUp
						animate__faster
					  `,
					},
					hideClass: {
						popup: `
						animate__animated
						animate__fadeOutDown
						animate__faster
					  `,
					},
				});
			}
			dispatch(searchById(id));
			setId("");
		}
	};

	const handleClick = () => {
		if (!id) {
			Swal.fire("Yo must enter an id!");
			inputRef.current.value = "";
			setId("");
		} else if (repeated.length) {
			Swal.fire({
				title: "Such a character already exists",
				showClass: {
					popup: `
					animate__animated
					animate__fadeInUp
					animate__faster
				  `,
				},
				hideClass: {
					popup: `
					animate__animated
					animate__fadeOutDown
					animate__faster
				  `,
				},
			});
			inputRef.current.value = "";
			setId("");
		} else {
			dispatch(searchById(id));
			inputRef.current.value = "";
		}
	};
	function handleRandom() {
		const random = Math.round(Math.random() * (826 - 1) + 1);
		dispatch(searchById(random));
	}
	function handleCleanScreen() {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to reverse this!",
			icon: "warning",
			showCancelButton: true,
			cancelButtonText: "Cancel",
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, clean it!",
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(cleanScreen());
				Swal.fire("Done!", "The screen has been cleaned..", "success");
			}
		});
	}

	return (
		<div>
			{currentPath === "/home" ? (
				<div className={styles.div}>
					<input
						ref={inputRef}
						id="input"
						className={styles.input}
						type="search"
						title="Type the character id and press the ENTER key"
						placeholder="Search character..."
						onChange={handleChange}
						onKeyDown={handleKeyPress}
					/>
					<input
						type="submit"
						value="ADD CHARACTER"
						className={styles.button}
						onClick={handleClick}
					></input>
					<input
						type="submit"
						value="RANDOM"
						className={styles.button}
						onClick={handleRandom}
					></input>
					<input
						type="submit"
						value="CLEAN SCREEN"
						className={styles.button}
						onClick={handleCleanScreen}
					></input>
				</div>
			) : null}
		</div>
	);
}
