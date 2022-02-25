let ANIMATION_SPEED = 300;

// Grab the prefers reduced media query.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion || reducedMotion.matches) ANIMATION_SPEED = 0;


// native js animation
function animate (el, from, to, _options = {}) {
	const dflt = { duration: ANIMATION_SPEED, easing: 'ease-out', fill: 'forwards' };
	const opts = Object.assign({}, dflt, _options);

	return new Promise(resolve => {
		requestAnimationFrame(() => {
			const anim = el.animate([from, to], opts);
			anim.oncancel = resolve;
			anim.onfinish = resolve;
		});
	});
}


export {
	ANIMATION_SPEED,
	animate,
};
