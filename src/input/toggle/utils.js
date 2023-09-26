export const isTouchDevice = 'ontouchstart' in document.documentElement;


export function initialMeasure (toggleEl) {
	const isHidden = toggleEl.offsetParent === null;
	if (isHidden) {
		toggleEl = toggleEl.cloneNode(true);
		document.body.appendChild(toggleEl);
	}
	const toggleInnerEl = toggleEl.querySelector('.toggle-inner');
	const toggleInner = toggleInnerEl.getBoundingClientRect();
	const toggle = getComputedStyle(toggleEl);
	const togglePadding = parseFloat(toggle.paddingBlock);

	if (isHidden && toggleEl) toggleEl.remove();

	return {
		scrollerStartX: toggleInner.height - toggleInner.width,
		scrollerEndX: 0,
		handleStartX: toggleInner.height / 2 + togglePadding,
		handleEndX: toggleInner.width + togglePadding - toggleInner.height / 2,
	};
}
