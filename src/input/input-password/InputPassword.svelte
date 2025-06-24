<div bind:this={element} class={cls} {...restProps}>
	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class={['input-inner', { disabled }]}>
		<InputError id={errorMessageId} msg={error} />

		<div class="input-row" class:visible>
			<input
				id={_id}
				autocomplete="off"
				{name}
				{type}
				{value}
				{disabled}
				{placeholder}
				aria-invalid={!!error}
				aria-errormessage={error ? errorMessageId : undefined}
				aria-required={required}
				bind:this={inputElement}
				oninput={_oninput}>
			<Button link icon={visible ? 'eye' : 'eyeOff'} class="input-password-button" onclick={toggle}/>
		</div>

		{#if strength && lib && value}
			<div class="input-row">
				<div class="password-strength" title={quality}>
					<div class="password-strength-progress {colorClass}" style="width: {percent}%"></div>
				</div>
			</div>
			<div class="input-row">
				<div class="password-strength-info {colorClass}">
					<h2>{quality}</h2>
					<small>{@html strengthInfoText}</small>
				</div>
			</div>
		{/if}

	</div>
</div>

<script lang="ts">
import './InputPassword.css';
import type { InputPasswordProps, ZxcvbnLib } from './types';
import { onMount } from 'svelte';
import { Button } from '../../button';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let {
	class: className = '',
	id = '',
	required = undefined,
	disabled = undefined,
	value = $bindable(''),
	strength = false,
	name = '',
	label = '',
	placeholder = '',
	error = undefined,
	info = undefined,
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	oninput = () => {},
	...restProps
}: InputPasswordProps = $props();



// score:
// 0 - too guessable: risky password. (guesses < 10^3)
// 1 - very guessable: protection from throttled online attacks. (guesses < 10^6)
// 2 - somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)
// 3 - safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)
// 4 - very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)
const qualities = ['Very Poor', 'Poor', 'Average', 'Safe', 'Excellent'];
const colorClassNames = ['danger', 'danger', 'warning', 'info', 'success'];
const errorMessageId = guid();


let visible = $state(false);	// show pass as text
let lib = $state<ZxcvbnLib | undefined>(undefined);
let quality = $state('');
let percent = $state(0);
let strengthInfoText = $state('');
let colorClass = $state('');


const type = $derived(visible ? 'text' : 'password');
const _id = $derived(id || name || guid());
const cls = $derived([
	'input',
	'input-password',
	className,
	{
		visible,
		'has-error': !!error,
		'label-on-the-left': labelOnTheLeft,
	},
]);


onMount(() => {
	requestAnimationFrame(checkLib);
});


$effect(() => {
	const { score, text } = measure(value);
	quality = qualities[score];
	percent = score ? score * 25 : 5;
	colorClass = colorClassNames[score];
	strengthInfoText = text;
});



function _oninput (e: Event) {
	const target = e.target as HTMLInputElement;
	value = target.value;
	oninput(e, value);
}

function checkLib (): void {
	lib = window.zxcvbn;
}


function measure (pass: string): { score: number; text: string } {
	if (strength && !lib) checkLib(); // try again, just in case
	if (!lib || !pass || !strength) return { score: 0, text: '' };

	const res = lib(pass);
	const warning = res.feedback.warning;
	const suggestion = res.feedback.suggestions;
	const text = [warning, ...suggestion].filter(i => i.length).join('.<br>');
	return { score: res.score, text };
}


function toggle (): void {
	visible = !visible;
	requestAnimationFrame(() => element?.querySelector('input')?.focus());
}

</script>
