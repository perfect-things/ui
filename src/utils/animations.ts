import { UI } from './constants.svelte';


/**
 * Animate an element from one state to another.
 * @param el - The element to animate
 * @param from - The starting state of the animation, e.g. { opacity: 0 }
 * @param to - The ending state of the animation, e.g. { opacity: 1 }
 * @param options - Animation options
 * @returns {Promise<void>} A promise that resolves when the animation is complete or cancelled
 */
export function animate (el: HTMLElement, from: Keyframe, to: Keyframe, options: KeyframeAnimationOptions = {}): Promise<void> {
	const dflt: KeyframeAnimationOptions = {
		duration: UI.ANIMATION_SPEED,
		easing: 'ease-out',
		fill: 'forwards'
	};
	const opts: KeyframeAnimationOptions = Object.assign({}, dflt, options);

	return new Promise<void>(resolve => {
		requestAnimationFrame(() => {
			if (!el || !el.animate) return resolve();

			const anim: Animation = el.animate([from, to], opts);
			anim.oncancel = () => resolve();
			anim.onfinish = () => resolve();
		});
	});
}



/**
 * Blinks an element by animating its opacity.
 * @param el - The element to blink
 * @param duration - The duration of the blink animation in milliseconds (default is 160ms)
 * @returns {Promise<void>} A promise that resolves when the blink animation is complete or cancelled
 */
export function blink (el: HTMLElement, duration = 160): Promise<void> {
	return animate(el,
		{ opacity: 1 },
		{ opacity: 0.5 },
		{ duration: duration / 2, fill: 'backwards' }
	);
}
