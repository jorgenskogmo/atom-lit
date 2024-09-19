// State.ts should be the only consumer

export interface StateType {
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

export const initialState: StateType = {
	numParticles: 2321,
	repulsionStrength: 0.2,
	repulsionRadius: 100,
	arrowSize: 10,
	slowColor: "#00d5ff",
	fastColor: "#e100ff",
	maxSpeed: 30,
	maxForce: 0.6,
	attractionStrength: 9999,
	friction: 0.9,
};
