import styles from "./SearchBar.module.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
	cleanScreen,
	searchById,
	searchByName,
} from "../../redux/actions/actions.js";
import Swal from "sweetalert2";
import { FaSearch } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import searchButton from "../../assets/img/icons/search-button.png";

export default function SearchBar() {
	// **Estado local
	const location = useLocation();
	const currentPath = location.pathname;
	const characters = useSelector((state) => state.characters);
	const initialState = "";
	const [id, setId] = useState(initialState);
	const [name, setName] = useState(initialState);
	const [wasSearched, setWasSearched] = useState(false);

	const inputRef = useRef(null);

	const dispatch = useDispatch();

	const repeated = characters.filter(
		(character) => character.id === parseInt(id),
	);

	console.log(characters);

	function handleChange(event) {
		// console.log("funciona el handle", event)
		setId(parseInt(event.target.value));
		setName(event.target.value);
	}

	const handleKeyPress = (event) => {
		// // event.preventDefault();
		if (event && event.key === "Enter") {
			// Lógica que se ejecuta al presionar Enter
			console.log("Se presionó la tecla Enter");
			if (typeof name != "number") {
				dispatch(searchByName(name));
				inputRef.current.value = "";
				setName("");
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
			// dispatch(searchById(id));
			// setId("");
			setWasSearched(true);
		}
	};

	const handleClick = () => {
		if (typeof name != "number") {
			dispatch(searchByName(name));
			inputRef.current.value = "";
			setName("");
			// }

			// if (repeated.length) {
			// 	alert("Ya existe ese personaje");
			// 	setId("");
			setWasSearched(true);
		} else {
			// dispatch(searchById(id));
			// inputRef.current.value = "";
			// setId("");
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
		<div className={styles.searchBar}>
			{currentPath === "/cards" ? (
				<div className={styles.searchBarContainer}>
					<div className={styles.searchBarContainerBtn}>
						<input
							ref={inputRef}
							id="input"
							className={styles.input}
							type="search"
							title="Type the character id and press the ENTER key"
							placeholder="Search..."
							onChange={handleChange}
							onKeyDown={handleKeyPress}
						/>
						<button
							type="submit"
							className={`${styles.button} ${styles.btnSearch}`}
							onClick={handleClick}
						>
							<img src={searchButton} className={styles.searchButtonImg}></img>
						</button>
					</div>
					<input
						type="submit"
						value="RANDOM"
						className={styles.button}
						onClick={handleRandom}
					></input>
					<button
						type="submit"
						className={`${styles.button} ${styles.buttonCleanScreen}`}
						onClick={handleCleanScreen}
					>
						CLEAN SCREEN
						<MdCleaningServices
							className={styles.iconCleanScreen}
						></MdCleaningServices>
					</button>
				</div>
			) : null}
		</div>
	);
}
