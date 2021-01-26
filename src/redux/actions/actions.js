import axios from "axios";
import {
	SET_CONTACTS,
	SEARCH_CONTACT,
	ADD_TO_FAVORITES,
	SHOW_FAVORITES,
	SET_FAVORITES,
	SORT_ASCENDING,
	SORT_DESCENDING,
} from "./types";

export const searchContact = (text, contacts) => (dispatch) => {
	const payload = {
		text: text,
		contacts: contacts,
	};

	dispatch({
		type: SEARCH_CONTACT,
		payload: payload,
	});
};

export const fetchContacts = () => (dispatch) => {
	axios
		.get(`https://my-json-server.typicode.com/RomanChasovitin/demo-api/users`)
		.then((res) => {
			dispatch({
				type: SET_CONTACTS,
				payload: res.data.data,
			});
			localStorage.setItem("contacts", JSON.stringify(res.data.data));
		})

		.catch((err) => console.log(err));
};

export const getContacts = () => (dispatch) => {
	const contacts = JSON.parse(localStorage.getItem("contacts"));
	dispatch({
		type: SET_CONTACTS,
		payload: contacts,
	});
};

export const addToFavorites = (contact) => (dispatch) => {
	dispatch({
		type: ADD_TO_FAVORITES,
		contact: contact,
	});
};

export const setFavorites = (contacts) => (dispatch) => {
	dispatch({
		type: SET_FAVORITES,
		contacts: contacts,
	});
};

export const showFavorites = () => (dispatch) => {
	const favorites = JSON.parse(localStorage.getItem("favorites"));
	dispatch({
		type: SHOW_FAVORITES,
		favorites: favorites,
	});
};

export const sortAscending = () => (dispatch) => {
	dispatch({
		type: SORT_ASCENDING,
	});
};

export const sortDescending = () => (dispatch) => {
	dispatch({
		type: SORT_DESCENDING,
	});
};
