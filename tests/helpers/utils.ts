
export function offsetHeight (el, value = 50) {
	Object.defineProperty(el, 'offsetHeight', { configurable: true, value });
}

export function offsetWidth (el, value = 50) {
	Object.defineProperty(el, 'offsetWidth', { configurable: true, value });
}

export function offsetTop (el, value = 50) {
	Object.defineProperty(el, 'offsetTop', { configurable: true, value });
}

export function offsetLeft (el, value = 50) {
	Object.defineProperty(el, 'offsetLeft', { configurable: true, value });
}



class TransitionEvent extends Event {
	propertyName: string;

	constructor (type, eventInitDict) {
		super(type, eventInitDict);
		this.propertyName = eventInitDict.propertyName || '';
	}
}


export function triggerTransitionEnd (element, propertyName = 'height') {
	const event = new TransitionEvent('transitionend', { propertyName });
	element.dispatchEvent(event);
}
