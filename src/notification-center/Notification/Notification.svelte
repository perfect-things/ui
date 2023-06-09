<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div
	class="notification notification-{notification.type}"
	tabindex="0"
	on:mouseover="{() => clearTimer(notification)}"
	on:focus="{() => clearTimer(notification)}"
	on:mouseleave="{e => createTimer(notification, e.target)}"
	on:blur="{e => createTimer(notification, e.target)}"
	on:keydown="{onkeydown}"
	transition:fly="{{ duration: $ANIMATION_SPEED, x: 500, opacity: 1 }}">

	<div class="notification-msg" role="{notification.type === 'info' ? 'status' : 'alert'}">{@html notification.msg}</div>

	{#if notification.btn}
		<button on:click|preventDefault="{() => notification.cb(notification.id)}">{notification.btn}</button>
	{/if}

	<button class="notification-close" on:click|stopPropagation="{() => hideNotification(notification.id)}">&times;</button>

	{#if notification.showProgress}
		<div class="notification-progressbar">
			<div role="progressbar" class="notification-progress" style="width: {percent}%"></div>
		</div>
	{/if}
</div>


<script>
import { fly } from 'svelte/transition';
import { hideNotification, createTimer, clearTimer, Progress } from '../store.js';
import { ANIMATION_SPEED } from '../../utils.js';

export let notification = {};

$:percent = $Progress[notification.id];

function onkeydown (e) {
	if (e.key === 'Escape') hideNotification(notification.id);
}

</script>
