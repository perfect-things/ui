import type { AlignmentDirection } from '../types';

type BoxSize = {
	top: number;
	left: number;
	height: number;
	width: number;
};

type ItemAlignmentOptions = {
	element: HTMLElement;
	event?: any;
	alignH?: 'left' | 'right' | 'center';
	offsetH?: number;
	alignV?: AlignmentDirection; // 'top' | 'bottom' | 'left' | 'right'
	offsetV?: number;
	viewportPadding?: number;
	setMinWidthToTarget?: boolean;
};


/**
 * Aligns an element based on the position of a target element or event (for tooltips, popovers, dropdowns).
 * @param {ItemAlignmentOptions} options - An object containing parameters for alignment.
 * @returns {string} - Returns 'left', 'right', 'top', or 'bottom' based on the alignment.
 */
export function alignItem ({
	element,
	event,
	alignH = 'left',
	offsetH = 0,
	alignV = 'bottom',
	offsetV = 2,
	viewportPadding = 10,
	setMinWidthToTarget = false,
}: ItemAlignmentOptions): AlignmentDirection {
	if (!element || !event) return 'top'; // default to top if no element or event is provided
	const winH = window.visualViewport?.height || window.innerHeight;
	const winW = window.visualViewport?.width || window.innerWidth;

	let targetBox: BoxSize;
	let top, left;
	let isLeft = false;
	let isRight = false;


	// event is a context | longpress event
	if (event.type === 'contextmenu' || event.type === 'longpress') {
		if (event.type === 'longpress' && event.detail) event = event.detail;
		targetBox = { top: event.y, left: event.x, height: 0, width: 0 };
	}

	// event is a click event on a button
	else if (event.type === 'click') targetBox = event.target.getBoundingClientRect();

	// event is an element
	else targetBox = event.getBoundingClientRect();


	top = targetBox.top + targetBox.height + offsetV;
	left = targetBox.left + offsetH;

	if (alignH === 'right') left += targetBox.width - element.offsetWidth;
	else if (alignH === 'center') {
		left = (targetBox.width - element.offsetWidth) / 2 + targetBox.left;
	}

	element.style.top = top + window.scrollY + 'px';
	element.style.left = left + window.scrollX + 'px';
	if (setMinWidthToTarget) element.style.minWidth = targetBox.width + 'px';



	// ensure it stays on screen
	const spaceAbove = targetBox.top - viewportPadding;
	const spaceBelow = winH - targetBox.top - targetBox.height - viewportPadding;
	const spaceBefore = targetBox.left - viewportPadding;
	const spaceAfter = winW - targetBox.left - targetBox.width - viewportPadding;

	element.style.maxHeight = Math.max(spaceAbove, spaceBelow) + 'px';
	let elementBox = element.getBoundingClientRect();

	if (alignV === 'left' && spaceBefore > elementBox.width) {
		isLeft = true;
		top = targetBox.top + ((targetBox.height - elementBox.height) / 2);
		left = Math.max(targetBox.left - elementBox.width, viewportPadding);
		element.style.top = top + window.scrollY + 'px';
		element.style.left = left + window.scrollX + 'px';
	}

	else if (alignV === 'right' && spaceAfter > elementBox.width) {
		isRight = true;
		top = targetBox.top + ((targetBox.height - elementBox.height) / 2);
		left = Math.max(targetBox.left + targetBox.width, viewportPadding);
		element.style.top = top + window.scrollY + 'px';
		element.style.left = left + window.scrollX + 'px';
	}

	else if ((alignV === 'top' && spaceAbove > elementBox.height) || spaceBelow < elementBox.height) {
		top = winH - elementBox.height - viewportPadding;
		if (alignV === 'top' || top < elementBox.y) {
			top = targetBox.top - elementBox.height - offsetV;
		}
		element.style.top = top + window.scrollY + 'px';
	}

	// check if the menu is off the right side of the screen
	const padding = alignH === 'center' ? viewportPadding * 2 : viewportPadding;
	if (winW < elementBox.x + elementBox.width + padding) {
		left = winW - elementBox.width - padding;
		if (left < 0) left = viewportPadding;
		left = left + window.scrollX;
	}

	elementBox = element.getBoundingClientRect();
	// check if the menu is off the left side of the screen
	if (elementBox.x < viewportPadding) {
		left = viewportPadding + window.scrollX;
	}
	element.style.left = left + 'px';
	element.style.maxWidth = `calc(100% - ${left + viewportPadding}px)`;

	if (isLeft || isRight) {
		if (isLeft) return 'left';
		if (isRight) return 'right';
	}

	// set the property for the tip offset
	// so when the popover is at the edge of the screen, and is offset left/right
	// from the original position, the tip will try to be centered on the target
	element.style.setProperty('--tip-offset', findTipOffset(targetBox, element));
	if (top > targetBox.top) return 'bottom';
	return 'top';
}


/**
 * Calculates the offset for the tooltip tip based on the target box and the element's position.
 * @param targetBox - The bounding rectangle of the target element.
 * @param element - The tooltip element to align.
 * @returns {string} - The calculated offset for the tooltip tip in pixels.
 */
function findTipOffset (targetBox: BoxSize, element: HTMLElement): string {
	const elementBox = element.getBoundingClientRect();
	const targetCenter = targetBox.left + targetBox.width / 2;
	const elementCenter = elementBox.left + elementBox.width / 2;
	const elemWidth = elementBox.width ? elementBox.width / 100 : 1;
	const tOffset = 50 + (targetCenter - elementCenter) / elemWidth;
	// constrain tip to min 8% and max 93% to account for the border-radius
	const tooltipOffsetPercent = Math.max(8, Math.min(93, tOffset));
	const tooltipOffset = Math.round(tooltipOffsetPercent * elemWidth - 1);
	return `${tooltipOffset}px`;
}
