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
	return async (dispatch) => {
		try {
			return dispatch({
				type: SEARCH_BY_NAME,
				payload: name,
			});
		} catch (error) {
			return Swal.fire({
				title: name,
				text: "Character not found!",
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
};
