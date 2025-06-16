/**
 * Finds the next notification to focus
 *
 * @param {*} el notifications list container
 * @param {*} id id of the current notification
 * @returns HTMLElement for the previous/next/first notification
 */
export function getNextNotification (el, id) {
	if (!el) return;
	const thisEl = el.querySelector(`[data-id="${id}"]`);
	const all = el.querySelectorAll('.notification');
	if (!all || !all.length) return;

	const index = Array.from(all).indexOf(thisEl);
	if (index < all.length - 1) return all[index + 1];
	if (index > 0) return all[index - 1];
	return all[0];
}
