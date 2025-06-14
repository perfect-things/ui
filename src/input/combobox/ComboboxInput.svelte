<Label {label} {disabled} for={_id}/>
<Info msg={info} />

<div class="input-inner" class:disabled>
	<InputError id={errorMessageId} msg={error} />

	<div class="input-row" title={value}>
		<Button
			link
			icon="dots"
			class="combobox-button"
			tabindex="-1"
			onmousedown={oniconmousedown}
			onclick={oniconclick}/>

		<input
			id={_id}
			{name}
			{disabled}
			{placeholder}
			type="text"
			role="combobox"
			autocomplete="off"
			class="prevent-scrolling-on-focus"
			aria-autocomplete="list"
			aria-controls="{listId}"
			aria-expanded={opened}
			aria-invalid={!!error}
			aria-errormessage={error ? errorMessageId : undefined}
			aria-required={required}

			bind:value
			bind:this={inputElement}
			onclick={_onclick}
			onmousedown={_onclick}
			onkeydowncapture={onkeydown}
			{onfocus}
			{oninput}
			{onblur}
			{...restProps}>
	</div>
</div>

<script>
import { InputError } from '../input-error';
import { Label } from '../label';
import { Info } from '../../info-bar';

import { guid, isMobile } from '../../utils';
import { Button } from '../../button';


/**
 * @typedef {Object} Props
 * @property {string} [id]
 * @property {string} [listId]
 * @property {string} [name]
 * @property {boolean} [disabled]
 * @property {any} [required]
 * @property {any} [value]
 * @property {string} [label]
 * @property {any} [error]
 * @property {any} [info]
 * @property {boolean} [opened]
 * @property {string} [placeholder]
 * @property {any} [inputElement]
 * @property {function} [onclick]
 * @property {function} [oniconclick]
 * @property {function} [oniconmousedown]
 * @property {function} [onkeydown]
 * @property {function} [onfocus]
 * @property {function} [oninput]
 * @property {function} [onblur]
 * @property {Object} [restProps]
 */

/** @type {Props} */
let {
	id = '',
	listId = '',
	name = '',
	disabled = false,
	required = undefined,
	label = '',
	error = undefined,
	info = undefined,
	opened = false,
	placeholder = 'Type to filter...',
	value = $bindable(''),
	inputElement = $bindable(undefined),
	onclick = () => {},
	oniconclick = () => {},
	oniconmousedown = () => {},
	onkeydown = () => {},
	onfocus = () => {},
	oninput = () => {},
	onblur = () => {},
	...restProps
} = $props();


const _id = $derived(id || name || guid());
const errorMessageId = guid();



function _onclick (e) {
	const type = e?.type;
	const clickOnMobile = isMobile() && type === 'click';
	const mousedownOnDesktop = !isMobile() && type === 'mousedown';

	if (clickOnMobile || mousedownOnDesktop) onclick(e);
}

</script>
