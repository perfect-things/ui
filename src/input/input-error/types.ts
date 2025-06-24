export interface InputErrorProps {
	id?: string;
	msg?: string;
	element?: HTMLElement;
	animOffset?: number;		// - used in checkbox, as there is a gap between input and error
	animOpacity?: boolean;		// - so that the animation looks weird without the fadein/out
}
