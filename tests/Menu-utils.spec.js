import * as utils from '../src/menu/utils';


describe('Menu-utils - utils.addArias', () => {
	let el;

	beforeEach(() => {
		el = document.createElement('button');
	});

	it('should return undefined if no element is provided', () => {
		const result = utils.addArias(null);
		expect(result).toBeUndefined();
	});

	it('should add the aria-haspopup attribute to the element', () => {
		utils.addArias(el);
		expect(el.getAttribute('aria-haspopup')).toEqual('true');
	});

	it('should add the aria-expanded attribute to the element', () => {
		utils.addArias(el);
		expect(el.getAttribute('aria-expanded')).toEqual('true');
	});

});


describe('Menu-utils - removeArias', () => {
	let el;

	beforeEach(() => {
		el = document.createElement('button');
		el.setAttribute('aria-expanded', 'true');
	});

	it('should return undefined if no element or selector is provided', () => {
		const result = utils.removeArias();
		expect(result).toBeUndefined();
	});

	it('should remove the aria-expanded attribute from the element', () => {
		utils.removeArias(el);
		expect(el.getAttribute('aria-expanded')).toEqual('false');
	});

	it('should remove the aria-expanded attribute from all elements matching the selector', () => {
		const el2 = document.createElement('button');
		el2.setAttribute('aria-expanded', 'true');
		document.body.appendChild(el);
		document.body.appendChild(el2);
		utils.removeArias('button');
		expect(el.getAttribute('aria-expanded')).toEqual('false');
		expect(el2.getAttribute('aria-expanded')).toEqual('false');
		document.body.removeChild(el);
		document.body.removeChild(el2);
	});

	it('should not remove other aria attributes from the element', () => {
		el.setAttribute('aria-haspopup', 'true');
		utils.removeArias(el);
		expect(el.getAttribute('aria-haspopup')).toEqual('true');
	});

});
