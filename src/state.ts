// State.ts should be the only consumer

// Define application state here:
export const initialState = {
	num: 20,
	clicks: 0,
	airplane_mode: 0,
};

export type StateType = typeof initialState;
