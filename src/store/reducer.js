import { ADD_LOGIN } from "./actionType";

const initState = {
	login: {
		loading: false,
		data: [],
		error: false,
	},
};

export const reducer = (state = initState, { type, payload }) => {
	switch (type) {
		case ADD_TODO:
			return {
				...state,
				login: [...state.data, payload],
			};
		default:
			return { ...state };
	}
};
