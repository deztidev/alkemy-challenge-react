import { ADD_HERO, REMOVE_HERO } from "./actionTypes";

const initialState = {
	team: [],
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_HERO:
			return { ...state, team: [...state.team, action.payload] };
		case REMOVE_HERO:
			return {
				team: [...state.team.filter(hero => hero !== action.payload)],
			};
		default:
			return state;
	}
}

export default reducer;
