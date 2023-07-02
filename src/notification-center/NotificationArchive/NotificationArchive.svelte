<div class="notification-archive" bind:this="{el}" inert="{!show}" class:expanded class:inert="{!show}">
	<header>
		{#if archived.length}
			<h2><Button icon="chevronRight" text on:click="{toggle}"> Recent notifications ({archived.length})</Button></h2>
			<div class="notification-archive-buttons">
				<Button text on:click="{clearAll}">Clear all</Button>
				<Button text class="btn-close" on:click="{() => (show = false)}">&times;</Button>
			</div>
		{:else}
			<h2>No recent notifications</h2>
			<div class="notification-archive-buttons">
				<Button text class="btn-close" on:click="{() => (show = false)}">&times;</Button>
			</div>
		{/if}
	</header>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	{#if archived.length && expanded}
		{#each archived as notification (notification.id)}
			<div
				tabindex="0"
				class="notification notification-{notification.type} archived"
				on:keydown="{e => onKeydown(e, notification)}"
				in:_in="{{ key: notification.id }}"
				out:_out
				animate:flip>

				<div class="notification-msg" role="{notification.type === 'info' ? 'status' : 'alert'}">{@html notification.msg}</div>
				<div class="notification-timestamp">{timeAgo(notification.timestamp, now)}</div>
				<button class="notification-close" on:click|stopPropagation="{() => removeFromArchive(notification.id)}">&times;</button>
			</div>
		{/each}
	{/if}
</div>


<script>
import { onDestroy, onMount } from 'svelte';
import { Button } from '../../button';
import { ArchivedNotifications, removeFromArchive, receive, fly, slideUp, flip } from '../store.js';
import { ANIMATION_SPEED, timeAgo } from '../../utils.js';

export let show = false;
export let expanded = false;

const duration = 100000 || $ANIMATION_SPEED;

let el;
let archived = [];
let timer;
let now = new Date().getTime();



$: {
	if (!show && el) el.addEventListener('transitionend', () => expanded = false, { once: true });
}

onMount(() => {
	timer = setInterval(() => (now = new Date().getTime()), 10000);

	ArchivedNotifications.subscribe(val => {
		archived = Object.values(val).reverse();
	});

});

onDestroy(() => {
	clearInterval(timer);
});


function toggle () {
	expanded = !expanded;
}


function clearAll (e) {
	e.stopPropagation();
	ArchivedNotifications.set({});
}


function onKeydown (e, notification) {
	if (e.key === 'Escape') removeFromArchive(notification.id);
}


function _in (node, params) {
	if (!show) return fly(node, { duration: 0 });
	if (show && expanded) return slideUp(node, params);
	return receive(node, { ...params, delay: 100, duration });
}


function _out (node, params) {
	if (show && expanded) return fly(node);					// deleting
	if (show && !expanded) return slideUp(node, params);	// collapsing with archive visible
	return slideUp(node, { duration: 0 });					// collapsing with archive hidden
}


</script>
