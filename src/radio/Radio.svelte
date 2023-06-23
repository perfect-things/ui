<!-- svelte-ignore a11y-autocomplete-valid -->
<div class="input-password-wrapper {className}" class:visible bind:this="{el}">
	<div class="input-password-row" class:visible>
		<Button link icon="{visible ? 'eyeOff' : 'eye'}" class="input-password-button" on:click="{toggle}"/>
		<input
			class="input-password"
			autocomplete="off"
			{...props}
			{type}
			{value}
			on:input={e => value = e.target.value}
			on:keydown
			on:change
			on:focus
			on:blur>
	</div>
	{#if strength && lib && value}
		<div class="input-password-row">
			<div class="password-strength" title="{label}">
				<div class="password-strength-progress {colorClass}" style="width: {percent}%"></div>
			</div>
		</div>
		<div class="input-password-row password-strength-info {colorClass}">
			<h2>{label}</h2>
			<small>{@html strengthInfoText}</small>
		</div>
	{/if}
</div>
<script>
import { onMount } from 'svelte';
import { Button } from '../button';
import { pluck } from '../utils';

export let value = '';
$:props = pluck($$props, ['id', 'title', 'name', 'disabled', 'placeholder', 'required']);
$:type = visible ? 'text' : 'password';


export let strength = false;
let className = '';
export { className as class };

// score:
// 0 - too guessable: risky password. (guesses < 10^3)
// 1 - very guessable: protection from throttled online attacks. (guesses < 10^6)
// 2 - somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)
// 3 - safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)
// 4 - very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)
const labels = ['Very Poor', 'Poor', 'Average', 'Safe', 'Excellent'];
const colorClassNames = ['danger', 'danger', 'warning', 'info', 'success'];


let visible = false;	// show pass as text
let lib;
let label = '';
let percent = 0;
let strengthInfoText = '';
let colorClass = '';
let el;


$: {
	const { score, info } = measure(value);
	label = labels[score];
	percent = score ? score * 25 : 5;
	colorClass = colorClassNames[score];
	strengthInfoText = info;
}


onMount(() => requestAnimationFrame(checkLib));


function checkLib () {
	lib = window.zxcvbn;
	if (strength && !lib) console.error('zxcvbn library is missing.');
}


function measure (pass) {
	if (strength && !lib) lib = window.zxcvbn; // try again, just in case
	if (!lib || !pass || !strength) return { score: 0, info: '' };

	const res = lib(pass);
	const warning = res.feedback.warning;
	const suggestion = res.feedback.suggestions;
	const info = [warning, ...suggestion].filter(i => i.length).join('.<br>');
	return { score: res.score, info };
}


function toggle () {
	visible = !visible;
	requestAnimationFrame(() => el.querySelector('input').focus());
}

</script>
