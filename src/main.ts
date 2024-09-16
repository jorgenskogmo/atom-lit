import "./components.ts";
import { setInitialState } from "./State";

// export interface StateType {
//     /** For testing purposes */
//     a?: number;
//     /** Number of particles in the system */
//     numParticles?: number;
//     /** Strength of attraction between particles */
//     attractionStrength?: number;
//     /** Strength of repulsion between particles */
//     repulsionStrength?: number;
//     /** Radius within which particles repel each other */
//     repulsionRadius?: number;
//     /** Maximum speed of particles */
//     maxSpeed?: number;
//     /** Maximum force that can be applied to particles */
//     maxForce?: number;
//     /** Friction coefficient for particle movement */
//     friction?: number;
//     /** Color of slow-moving particles */
//     slowColor?: string;
//     /** Color of fast-moving particles */
//     fastColor?: string;
//     /** Size of arrows representing particle direction */
//     arrowSize?: number;
//     /** Whether to use trails for particle movement */
//     useTrails?: string;
//   }

setInitialState({
    numParticles: 500,
});



//   export interface StateType = typeof initial_state;