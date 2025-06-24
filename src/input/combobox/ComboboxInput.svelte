<Label {label} {disabled} for={_id}/>
<Info msg={info} />

<div class={['input-inner', { disabled }]}>

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
			{...restProps}>
	</div>
</div>

<script lang="ts">
import type { ComboboxInputProps } from './types';
import { InputError } from '../input-error';
import { Label } from '../label';
import { Info } from '../../info-bar';

import { guid, isMobile } from '../../utils';
import { Button } from '../../button';



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
	...restProps
}: ComboboxInputProps = $props();


const _id = $derived(id || name || guid());
const errorMessageId = guid();



function _onclick (e) {
	const type = e?.type;
	const clickOnMobile = isMobile() && type === 'click';
	const mousedownOnDesktop = !isMobile() && type === 'mousedown';

	if (clickOnMobile || mousedownOnDesktop) onclick(e);
}

</script>
