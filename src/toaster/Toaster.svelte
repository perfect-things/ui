<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="toaster toaster-{position} {className}">
	{#each toasts as toast (toast.id)}
		<div
			class="toast toast-{toast.type}"
			tabindex="0"
			on:mouseover="{() => clearTimer(toast)}"
			on:focus="{() => clearTimer(toast)}"
			on:mouseleave="{e => createTimer(toast, e.target)}"
			on:blur="{e => createTimer(toast, e.target)}"
			on:keydown="{e => onkeydown(toast, e)}"
			transition:scale="{{ start: 0.5, duration: $ANIMATION_SPEED }}">

			<div
				class="toast-msg"
				role="{toast.type === 'info' ? 'status' : 'alert'}">
					{@html toast.msg}
			</div>
			{#if toast.btn}
				<button on:click|preventDefault="{() => toast.cb(toast.id)}">{toast.btn}</button>
			{/if}
			<button class="toast-close" on:click|stopPropagation="{() => hideToast(toast.id)}">&times;</button>
			{#if toast.showProgress}
				<div class="toast-progressbar">
					<div role="progressbar" class="toast-progress" style="width: {progress[toast.id]}%"></div>
				</div>
			{/if}
		</div>
	{/each}
</div>


<script>
import { scale } from 'svelte/transition';
import { _toasts, hideToast } from './toaster.js';
import { ANIMATION_SPEED } from '../utils.js';

export let position = 'top';
let className = '';
export { className as class };

let toasts = [];
const timers = {};
const progress = {};


_toasts.subscribe(val => {
	toasts = Object.values(val);
	toasts.forEach(t => {
		if (!timers[t.id]) createTimer(t);
	});
});


function createTimer (toast, targetEl) {
	if (!toast.showProgress) return;

	// don't restart the timer if toast is focused
	if (targetEl && targetEl === document.activeElement) return;

	const id = toast.id;
	progress[id] = progress[id] || 0;
	timers[id] = setInterval(() => {
		progress[id] += 1;
		if (progress[id] >= 110) {
			clearInterval(timers[id]);
			hideToast(id);
		}
	}, toast.timeout / 100);
}


function clearTimer (toast) {
	clearInterval(timers[toast.id]);
}


function onkeydown (toast, e) {
	if (e.key === 'Escape') hideToast(toast.id);
}

</script>
