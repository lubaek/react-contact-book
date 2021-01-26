import {
	SET_CONTACTS,
	SEARCH_CONTACT,
	ADD_TO_FAVORITES,
	SHOW_FAVORITES,
	SET_FAVORITES,
	SORT_ASCENDING,
	SORT_DESCENDING,
} from "../actions/types";

const initialState = {
	text: "",
	allContacts: [],
	showedContacts: [],
	favorites: [],
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case SEARCH_CONTACT:
			const contacts = action.payload.contacts.filter((contact) =>
				(
					contact.firstName.toLowerCase() +
					" " +
					contact.lastName.toLowerCase()
				).includes(action.payload.text.toLowerCase())
			);
			return {
				...state,
				text: action.payload.text,
				showedContacts: contacts,
			};

		case SET_CONTACTS:
			return {
				...state,
				allContacts: action.payload,
				showedContacts: action.payload,
			};

		case ADD_TO_FAVORITES: {
			const contacts = [
				...state.allContacts.map((contact) => {
					return contact.id === action.contact.id
						? { ...action.contact, isFavorite: !action.contact.isFavorite }
						: contact;
				}),
			];

			return {
				...state,
				allContacts: contacts,
				showedContacts: contacts,
			};
		}

		case SET_FAVORITES: {
			const favorites = [
				...state.allContacts.filter((contact) => contact.isFavorite === true),
			];
			return {
				...state,
				favorites: favorites,
			};
		}

		case SHOW_FAVORITES:
			return {
				...state,
				showedContacts: action.favorites,
			};

		case SORT_ASCENDING: {
			const contacts = [
				...state.allContacts.sort(function (prev, next) {
					if (prev.firstName + prev.lastName < next.firstName + next.lastName)
						return -1;
					else if (
						prev.firstName + prev.lastName >
						next.firstName + next.lastName
					)
						return 1;
					return 0;
				}),
			];

			return { ...state, showedContacts: contacts };
		}

		case SORT_DESCENDING: {
			const contacts = [
				...state.allContacts.sort(function (prev, next) {
					if (prev.firstName + prev.lastName > next.firstName + next.lastName)
						return -1;
					else if (
						prev.firstName + prev.lastName <
						next.firstName + next.lastName
					)
						return 1;
					return 0;
				}),
			];

			return { ...state, showedContacts: contacts };
		}

		default:
			return state;
	}
}
