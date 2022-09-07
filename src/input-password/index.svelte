<div class="input-password-wrapper" class:visible>
	<div class="input-password-row" class:visible>
		<input type="password" class="input-password" autocomplete="off"
			{id}
			{name}
			{title}
			{placeholder}
			bind:this="{inputEl}"
			bind:value="{value}"
			on:keydown
			on:change
			on:blur>
		<Button link icon="{visible ? 'eyeOff' : 'eye'}" on:click="{toggle}"/>
	</div>
	{#if strength && window.zxcvbn}
		<div class="input-password-row">
			<div class="password-strength" id="password-strength">
				<div class="password-strength-progress {colorClass}"
					style="width: {score * 25}%"></div>
			</div>
		</div>
		<div class="input-password-row password-strength-info {colorClass}">
			<h2>{labels[score]}</h2>
			<small>{@html strengthInfoText}</small>
		</div>
	{/if}
</div>
<script>
import Button from '../button';

export let value = '';
export let id = undefined;
export let name = undefined;
export let title = undefined;
export let placeholder = undefined;
export let strength = undefined;

const colorClassNames = ['', 'danger', 'warning', 'info', 'success'];
const labels = ['Very Poor', 'Poor', 'Average', 'Safe', 'Excellent'];

let score = 0;
let strengthInfoText = '';
let colorClass = '';

// score:
// 0 - too guessable: risky password. (guesses < 10^3)
// 1 - very guessable: protection from throttled online attacks. (guesses < 10^6)
// 2 - somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)
// 3 - safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)
// 4 - very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)

$:{
	if (window.zxcvbn && value) {
		const res = window.zxcvbn(value);
		const warning = res.feedback.warning;
		const suggestion = res.feedback.suggestions;
		score = res.score;
		colorClass = colorClassNames[score];
		strengthInfoText = [warning, ...suggestion].filter(i => i.length).join('.<br>');
	}
	else {
		strengthInfoText = '';
		score = 0;
		colorClass = '';
	}
}


let visible = false, inputEl;

function toggle () {
	visible = !visible;
	inputEl.type = visible ? 'text' : 'password';
}
</script>
