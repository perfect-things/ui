<div class="notification-archive" bind:this="{el}">
	<header>
		<h2>Recent notifications</h2>
		<div class="notification-archive-buttons">
			{#if archived.length}
				<Button text on:click="{clearAll}">Clear all</Button>
			{/if}
			<Button text class="btn-close" on:click="{() => (show = false)}">&times;</Button>
		</div>
	</header>
	{#if archived.length}
		{#each archived as notification (notification.id)}
			<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
			<div
				tabindex="0"
				class="notification notification-{notification.type} archived"
				on:keydown="{e => onKeydown(e, notification)}"
				in:_receive="{{ key: notification.id }}"
				out:fly
				animate:flip>

				<div class="notification-msg" role="{notification.type === 'info' ? 'status' : 'alert'}">{@html notification.msg}</div>
				<div class="notification-timestamp">{timeAgo(notification.timestamp, now)}</div>
				<button class="notification-close" on:click|stopPropagation="{() => removeFromArchive(notification.id)}">&times;</button>
			</div>
		{/each}
	{:else}
		<div class="notification-archive-empty">No recent notifications</div>
	{/if}
</div>


<script>
import { onDestroy, onMount, afterUpdate } from 'svelte';
import { Button } from '../../button';
import { ArchivedNotifications, removeFromArchive, receive, fly, flip } from '../store.js';
import { ANIMATION_SPEED, timeAgo } from '../../utils.js';

export let position = 'top';
export let show = false;
let isVisible = false;

const duration = $ANIMATION_SPEED;

let el;
let archived = [];
let now = new Date().getTime();
let timer;


onMount(() => {
	timer = setInterval(() => (now = new Date().getTime()), 10000);

	ArchivedNotifications.subscribe(val => {
		archived = position === 'top' ? Object.values(val).reverse() : Object.values(val);
	});

});

onDestroy(() => {
	clearInterval(timer);
});

afterUpdate(() => {
	if (show) openArchive();
	else closeArchive();
});


function openArchive () {
	if (isVisible) return;
	el.style.display = 'flex';
	requestAnimationFrame(() => (el.style.marginLeft = '-1rem'));
	isVisible = true;
}


function closeArchive () {
	if (!isVisible) return;
	el.style.marginLeft = 'calc(var(--ui-notification-width) + var(--ui-notification-gap) + 1rem)';
	el.addEventListener('transitionend', () => (el.style.display = 'none'), { once: true });
	isVisible = false;
}


function clearAll (e) {
	e.stopPropagation();
	ArchivedNotifications.set({});
}



function _receive (node, params) {
	if (!show) return fly(node, { duration: 0 });
	return receive(node, { ...params, delay: 100, duration });
}


function onKeydown (e, notification) {
	if (e.key === 'Escape') removeFromArchive(notification.id);
}
</script>
