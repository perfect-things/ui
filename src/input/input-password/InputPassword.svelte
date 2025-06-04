<div
	class="input input-password {className}"
	class:has-error="{error}"
	class:visible
	class:label-on-the-left="{labelOnTheLeft === true || labelOnTheLeft === 'true'}"
	bind:this="{element}">

	<Label {label} {disabled} for="{_id}"/>
	<Info msg="{info}" />

	<div class="input-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="input-row" class:visible>
			<input
				id="{_id}"
				autocomplete="off"
				{type}
				{value}
				{disabled}
				{...$$restProps}
				aria-invalid="{error}"
				aria-errormessage="{error ? errorMessageId : undefined}"
				aria-required="{required}"
				bind:this="{inputElement}"
				on:input="{oninput}"
				on:keydown
				on:change
				on:focus
				on:blur>
			<Button link icon="{visible ? 'eye' : 'eyeOff'}" class="input-password-button" on:click="{toggle}"/>
		</div>

		{#if strength && lib && value}
			<div class="input-row">
				<div class="password-strength" title="{quality}">
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

<script>
import './InputPassword.css';
import { onMount, createEventDispatcher } from 'svelte';
import { Button } from '../../button';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let className = '';
export { className as class };
export let id = '';
export let required = undefined;
export let disabled = undefined;
export let value = '';
export let strength = false;
export let label = '';
export let error = undefined;
export let info = undefined;
export let labelOnTheLeft = false;

export let element = undefined;
export let inputElement = undefined;



// score:
// 0 - too guessable: risky password. (guesses < 10^3)
// 1 - very guessable: protection from throttled online attacks. (guesses < 10^6)
// 2 - somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)
// 3 - safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)
// 4 - very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)
const qualities = ['Very Poor', 'Poor', 'Average', 'Safe', 'Excellent'];
const colorClassNames = ['danger', 'danger', 'warning', 'info', 'success'];
const dispatch = createEventDispatcher();
const errorMessageId = guid();


let visible = false;	// show pass as text
let lib;
let quality = '';
let percent = 0;
let strengthInfoText = '';
let colorClass = '';


$:type = visible ? 'text' : 'password';
$:_id = id || $$restProps.name || guid();

$: {
	const { score, text } = measure(value);
	quality = qualities[score];
	percent = score ? score * 25 : 5;
	colorClass = colorClassNames[score];
	strengthInfoText = text;
}


onMount(() => {
	requestAnimationFrame(checkLib);
});


function oninput (e) {
	value = e.target.value;
	dispatch('input', { event: e, value });
}

function checkLib () {
	lib = window.zxcvbn;
}


function measure (pass) {
	if (strength && !lib) checkLib(); // try again, just in case
	if (!lib || !pass || !strength) return { score: 0, info: '' };

	const res = lib(pass);
	const warning = res.feedback.warning;
	const suggestion = res.feedback.suggestions;
	const text = [warning, ...suggestion].filter(i => i.length).join('.<br>');
	return { score: res.score, text };
}


function toggle () {
	visible = !visible;
	requestAnimationFrame(() => element.querySelector('input').focus());
}

</script>
