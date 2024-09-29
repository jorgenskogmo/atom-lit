// State.ts should be the only consumer

// Define application state here:
export const initialState = {
	num: 1,
	clicks: 0,
	darkmode: 0,
};

export type StateType = typeof initialState;
