let ANIMATION_SPEED = 300;

// Grab the prefers reduced media query.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion || reducedMotion.matches) ANIMATION_SPEED = 0;

export {
	ANIMATION_SPEED,
};
