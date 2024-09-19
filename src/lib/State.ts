export interface StateType {
	/** For testing purposes */
	a?: number;
	/** Number of particles in the system */
	numParticles?: number;
	/** Strength of attraction between particles */
	attractionStrength?: number;
	/** Strength of repulsion between particles */
	repulsionStrength?: number;
	/** Radius within which particles repel each other */
	repulsionRadius?: number;
	/** Maximum speed of particles */
	maxSpeed?: number;
	/** Maximum force that can be applied to particles */
	maxForce?: number;
	/** Friction coefficient for particle movement */
	friction?: number;
	/** Color of slow-moving particles */
	slowColor?: string;
	/** Color of fast-moving particles */
	fastColor?: string;
	/** Size of arrows representing particle direction */
	arrowSize?: number;
	/** Whether to use trails for particle movement */
	useTrails?: string;
	/** Clear color */
	clearColor?: string;
}

/**
 * Function type for state change subscribers.
 * @param state - The current state after an update.
 */
type Subscriber = (state: Readonly<StateType>) => void;

/** The current state of the application */
const state: StateType = {};

/** Set of subscriber functions to be called on state changes */
const subscribers: Set<Subscriber> = new Set();

export function setInitialState(state: StateType) {
	updateMany(state);
}

/**
 * Retrieves a read-only copy of the current state.
 * @returns A frozen copy of the current state.
 */
export function getState(): Readonly<StateType> {
	return Object.freeze({ ...state });
}

/**
 * Updates a single key-value pair in the state.
 * @param key - The key of the state property to update.
 * @param value - The new value for the specified key.
 */
export function update<K extends keyof StateType>(key: K, value: StateType[K]) {
	state[key] = value;
	notifySubscribers();
}

/**
 * Updates multiple key-value pairs in the state.
 * @param data - An object containing the key-value pairs to update.
 */
export function updateMany(data: Partial<StateType>) {
	// biome-ignore lint/complexity/noForEach: <explanation>
	Object.entries(data).forEach(([key, value]) => {
		if (key in state) {
			(state[key as keyof StateType] as typeof value) = value;
		}
	});
	notifySubscribers();
}

/**
 * Updates the state with either a single key-value pair or multiple key-value pairs.
 * @param keyOrData - Either a single key of StateType or an object with multiple key-value pairs.
 * @param value - The new value if updating a single key-value pair.
 */
export function set<K extends keyof StateType>(
	keyOrData: K | Partial<StateType>,
	value?: StateType[K],
): void {
	if (typeof keyOrData === "string") {
		// Single key-value update
		if (value !== undefined) {
			state[keyOrData] = value;
		}
	} else {
		// Multiple updates
		// biome-ignore lint/complexity/noForEach: <explanation>
		Object.entries(keyOrData).forEach(([key, val]) => {
			if (key in state) {
				(state[key as keyof StateType] as typeof val) = val;
			}
		});
	}
	notifySubscribers();
}

/**
 * Subscribes a callback function to state changes.
 * @param callback - The function to be called when the state changes.
 * @returns A function that, when called, will unsubscribe the callback.
 */
export function subscribe(callback: Subscriber): () => void {
	subscribers.add(callback);
	return () => unsubscribe(callback);
}

/**
 * Unsubscribes a callback function from state changes.
 * @param callback - The function to be unsubscribed.
 */
export function unsubscribe(callback: Subscriber): void {
	subscribers.delete(callback);
}

/**
 * Notifies all subscribers of a state change.
 */
function notifySubscribers(): void {
	const currentState = getState();
	// biome-ignore lint/complexity/noForEach: <explanation>
	subscribers.forEach((callback) => callback(currentState));
}