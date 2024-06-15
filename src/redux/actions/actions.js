import {
	ADDFAVORITE,
	DELETEFAVORITE,
	FILTER,
	ORDER,
	SEARCH_BY_ID,
	DELETE_CHARACTER,
	CLEAN_SCREEN,
	SIGN_UP,
	CLEAN_FAVORITES,
	SEARCH_BY_NAME,
	CHARACTERS,
} from "./types";

import Swal from "sweetalert2";
import axios from "axios";
const img =
	"https://s.yimg.com/ny/api/res/1.2/ERF8gU34MVP46JXFYeTvQQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/cinemablend_388/4cea827a41d7c66770e144612647cf50";
// const baseURL = "https://rym-server-u2eg.onrender.com";
// const baseURL = "http://192.168.0.32:3001";
const baseURL = "https://rickandmortyapi.com/api";

// Action creators
const addFavorite = (objCharacter) => ({
	type: ADDFAVORITE,
	payload: objCharacter,
});

const deleteFavorite = (id) => ({
	type: DELETEFAVORITE,
	payload: id,
});

const filterCards = (gender) => {
	return {
		type: FILTER,
		payload: gender,
	};
};

const orderCards = (orden) => {
	return {
		type: ORDER,
		payload: orden,
	};
};

const firstChards = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios(
				`https://rickandmortyapi.com/api/character/?page=1`,
			);

			const characters = data.results;

			return dispatch({
				type: CHARACTERS,
				payload: characters,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

const searchById = (id) => {
	return async (dispatch) => {
		try {
			// const { data } = await axios(`${baseURL}/rickandmorty/character/${id}`);
			const { data } = await axios(`${baseURL}/character/${id}`);
			return dispatch({
				type: SEARCH_BY_ID,
				payload: data,
			});
		} catch (error) {
			return Swal.fire({
				title: id,
				text: "You must enter an ID number between 1 and 826!",
				color: "red",
				imageUrl: img,
				imageWidth: 420,
				imageHeight: 210,
				imageAlt: "Error",
			});
			// return alert(error.message);
		}
	};
};

const searchByName = (name) => {
	let nameMinus = name.toLowerCase();
	return async (dispatch) => {
		try {
			const { data } = await axios(`https://rickandmortyapi.com/api/character`);
			const totalPages = data.info.pages;

			let characters = data.results;

			for (let page = 2; page < totalPages; page++) {
				const { data } = await axios(
					`https://rickandmortyapi.com/api/character?page=${page}`,
				);
				characters = characters.concat(data.results);
			}

			let characterFounded = [];

			characters.forEach((char) => {
				if (char.name.toLowerCase().includes(nameMinus)) {
					characterFounded.push(char);
				}
			});

			if (characterFounded.length === 0) {
				// Si no se encuentra ningún personaje, mostrar alerta
				return Swal.fire({
					title: "No encontrado",
					text: `No se encontró ningún personaje con el nombre "${name}"`,
					icon: "warning",
					confirmButtonText: "OK",
				});
			}

			return dispatch({
				type: SEARCH_BY_NAME,
				payload: characterFounded,
			});
		} catch (error) {
			return Swal.fire({
				title: name,
				text: "Error!",
				color: "red",
				imageUrl: img,
				imageWidth: 420,
				imageHeight: 210,
				imageAlt: "Error",
			});
		}
	};
};

const deleteCharacter = (id) => {
	return {
		type: DELETE_CHARACTER,
		payload: id,
	};
};

const cleanScreen = () => {
	return {
		type: CLEAN_SCREEN,
	};
};

const cleanFavorites = () => {
	return {
		type: CLEAN_FAVORITES,
	};
};

const signUp = (userData) => {
	return async (dispatch) => {
		const URL = `${baseURL}/rickandmorty/user/signup/`;
		const { data } = await axios.post(URL, userData);
		dispatch({
			type: SIGN_UP,
			payload: data,
		});
	};
};

export {
	addFavorite,
	deleteFavorite,
	filterCards,
	orderCards,
	searchById,
	deleteCharacter,
	cleanScreen,
	cleanFavorites,
	signUp,
	searchByName,
	firstChards,
};
