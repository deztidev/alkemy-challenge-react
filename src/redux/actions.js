import { ADD_HERO, REMOVE_HERO } from "./actionTypes";

export const addHero = hero => ({
	type: ADD_HERO,
	payload: hero,
});

export const removeHero = hero => ({
	type: REMOVE_HERO,
	payload: hero,
});
