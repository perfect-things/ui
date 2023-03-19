<div class="toaster toaster-{position} {className}">
	{#each toasts as toast (toast.id)}
		<div class="toast toast-{toast.type}" transition:scale="{{ start: 0.5 }}">
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

export let position = 'top';
let className = '';
export { className as class };

let toasts = [];
const timers = {};
const progress = {};

$:role =
_toasts.subscribe(val => {
	toasts = Object.values(val);
	toasts.forEach(t => {
		if (!timers[t.id]) createTimer(t.id, t.timeout);
	});
});

function createTimer (id, timeout) {
	progress[id] = 0;
	timers[id] = setInterval(() => {
		progress[id] += 1;
		if (progress[id] >= 100) clearInterval(timers[id]);
	}, timeout / 100);
}
</script>
