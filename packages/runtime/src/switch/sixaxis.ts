import { $ } from '../$';

/**
 * One sample of a controller's six-axis sensor (accelerometer + gyroscope).
 */
export interface SixAxisState {
	/** Monotonic sample counter. */
	sample: number;
	/** Acceleration in G, `[x, y, z]`. */
	acceleration: [number, number, number];
	/** Angular velocity in revolutions per second, `[x, y, z]`. */
	angularVelocity: [number, number, number];
	/** Accumulated rotation in revolutions, `[x, y, z]`. */
	angle: [number, number, number];
	/** Orientation as a row-major 3x3 rotation matrix. */
	direction: number[];
}

/**
 * Which controller's sensor to read.
 *
 * - `0` handheld (Joy-Cons attached to the console)
 * - `1` Pro Controller
 * - `2` left Joy-Con of a detached pair
 * - `3` right Joy-Con of a detached pair
 */
export type SixAxisSlot = 0 | 1 | 2 | 3;

/**
 * Starts the six-axis sensors of the handheld Joy-Cons, the Pro Controller
 * and a detached Joy-Con pair. Safe to call more than once.
 */
export function startSixAxis(): void {
	$.hidSixAxisStart();
}

/**
 * Reads the latest six-axis sample of the given controller, or `undefined`
 * if that sensor has not produced a sample (e.g. the controller is absent).
 * Call {@link startSixAxis} first.
 */
export function readSixAxis(slot: SixAxisSlot): SixAxisState | undefined {
	return $.hidSixAxisRead(slot);
}
