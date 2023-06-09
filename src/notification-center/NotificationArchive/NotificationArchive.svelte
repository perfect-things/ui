<div class="notification-archive">
	<header>
		<h2>Recent notifications</h2>
		<div class="notification-archive-buttons">
			{#if archived.length}
				<Button text on:click="{clearAll}">Clear all</Button>
			{/if}
			<Button text class="btn-close" on:click="{hideArchive}">&times;</Button>
		</div>
	</header>
	{#if archived.length}
		{#each archived as notification (notification.id)}
			<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
			<div
				tabindex="0"
				class="notification notification-{notification.type} archived"
				on:keydown="{() => removeFromArchive(notification.id)}"
				transition:fly="{{ duration: $ANIMATION_SPEED, x: 500, opacity: 1 }}">

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
import { onDestroy, onMount } from 'svelte';
import { fly } from 'svelte/transition';
import { Button } from '../../button';
import { ArchivedNotifications, removeFromArchive } from '../store.js';
import { ANIMATION_SPEED, timeAgo } from '../../utils.js';

export let position = 'top';
export let show = false;

let archived = [];
let now = new Date().getTime();
let timer;

onMount(() => {
	timer = setInterval(() => (now = new Date().getTime()), 10000);
});

onDestroy(() => {
	clearInterval(timer);
});


ArchivedNotifications.subscribe(val => {
	archived = position === 'top' ? Object.values(val).reverse() : Object.values(val);
});


function clearAll (e) {
	e.stopPropagation();
	ArchivedNotifications.set({});
}

function hideArchive () {
	show = false;
}

</script>
