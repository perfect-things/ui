
const id = { name: 'id', type: 'string', description: 'Assign ID to the component' };
const title = { name: 'title', type: 'string', description: 'Assign title to the component' };
const disabled = { name: 'disabled', description: 'Makes the component <i>disabled</i>', };
const cls = {
	name: 'class',
	type: 'ClassValue',
	description: 'Additional css class name to be added to the component. ' +
		'This can be a string, an array of strings, or an object with boolean values to ' +
		'conditionally apply classes [<a href="https://svelte.dev/docs/svelte/class">ref</a>].'
};
const round = { name: 'round', description: 'Makes the component round' };
const icon = { name: 'icon', type: 'string', description: 'Adds an icon by name to the component (see <a href="#Icon">icons</a> section for icon names)' };
const dataset = { name: 'data-', type: 'string', description: 'Dataset attribute allows to pass some data of a primitive type (string, number, boolean), which will be accessible in the <em>onclick</em> event listener, via component reference.' };

const info = { name: 'info', description: 'Component type: info' };
const danger = { name: 'danger', description: 'Component type: danger' };
const error = { name: 'error', description: 'Component type: error' };
const success = { name: 'success', description: 'Component type: success' };
const warning = { name: 'warning', description: 'Component type: warning' };

const bindelement = { name: 'bind:element', type: 'HTMLElement', description: 'Exposes the HTML element of the component.' };

const name = { name: 'name', type: 'string', description: 'Assign name to the underlying input element.' };
const inputInfo = { name: 'info', type: 'string', description: 'Show info message above the component.' };
const inputError = { name: 'error', type: 'string', description: 'Error message to show above the component.' };
const label = { name: 'label', type: 'string', description: 'Label bound to the input.' };
const labelOnTheLeft = { name: 'labelOnTheLeft', type: 'boolean', default: 'false', description: 'Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container.' };
const bindinputelement = { name: 'bind:inputElement', type: 'HTMLElement', description: 'Exposes the HTML element of the underlying input.' };
const placeholder = { name: 'placeholder', type: 'string', description: 'Shows placeholder text.' };
const required = { name: 'required', description: 'Mark the component as required with <i>aria-required</i>.' };

const onclick = { name: 'onclick', type: 'function(event, data)', description: 'Triggered when the component is clicked.' };
const onfocus = { name: 'onfocus', type: 'function(event, data)', description: 'Triggered when the component focused.' };
const onblur = { name: 'onblur', type: 'function(event, data)', description: 'Triggered when the component looses focus.' };
const onchange = { name: 'onchange', type: 'function(event, data)', description: 'Triggered when the input value changes.' };
const oninput = { name: 'oninput', type: 'function(event, data)', description: 'Triggered when the user changes the input value.' };
const onkeydown = { name: 'onkeydown', type: 'function(event, data)', description: 'Triggered when the user presses a key.' };



export const PROPS = {
	class: cls,
	dataset,
	id,
	title,
	disabled,
	bindelement,
	icon,
	round,

	info,
	danger,
	error,
	success,
	warning,

	label,
	labelOnTheLeft,
	placeholder,
	required,
	inputInfo,
	inputError,
	bindinputelement,

	onclick,
	onfocus,
	onblur,
	onchange,
	oninput,
	onkeydown,

	component: [
		id,
		cls,
		title,
		disabled,
		bindelement,
	],
	input: [
		id,
		cls,
		title,
		name,
		disabled,
		bindelement,
		inputInfo,
		inputError,
		label,
		labelOnTheLeft,
		placeholder,
		onchange,
	],
};
