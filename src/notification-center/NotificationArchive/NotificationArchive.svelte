<div class="notification-archive" bind:this={el} inert={!show} class:expanded class:inert={!show}>
	<header>
		{#if archived.length}
			<h2><Button icon="chevronRight" text on:click={toggle}> Recent notifications ({archived.length})</Button></h2>
			<div class="notification-archive-buttons">
				<Button text on:click={clearAll}>Clear all</Button>
				<Button text class="btn-close" on:click={() => (show = false)}>&times;</Button>
			</div>
		{:else}
			<h2>No recent notifications</h2>
			<div class="notification-archive-buttons">
				<Button text class="btn-close" on:click={() => (show = false)}>&times;</Button>
			</div>
		{/if}
	</header>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	{#if archived.length && expanded}
		{#each archived as notification (notification.id)}
			<div
				tabindex="0"
				data-id={notification.id}
				class="notification notification-{notification.type} archived"
				onkeydown={e => onKeydown(e, notification)}
				in:_in="{{ key: notification.id }}"
				out:_out
				animate:flip>

				<div class="notification-msg" role={notification.type === 'info' ? 'status' : 'alert'}>{@html notification.msg}</div>
				<div class="notification-timestamp">{timeAgo(notification.timestamp, now)}</div>
				<button class="notification-close" onclick={stopPropagation(() => removeFromArchive(notification.id))}>&times;</button>
			</div>
		{/each}
	{/if}
</div>


<script>
	import { run, stopPropagation } from 'svelte/legacy';

import './NotificationArchive.css';
import { onDestroy, onMount } from 'svelte';
import { Button } from '../../button';
import { ArchivedNotifications, removeFromArchive, receive, fly, slideUp, flip } from '../store.js';
import { ANIMATION_SPEED, timeAgo } from '../../utils.js';
import { getNextNotification } from '../utils.js';


	/**
	 * @typedef {Object} Props
	 * @property {boolean} [show]
	 * @property {boolean} [expanded]
	 */

	/** @type {Props} */
	let { show = $bindable(false), expanded = $bindable(false) } = $props();

const duration = $ANIMATION_SPEED;

let el = $state();
let archived = $state([]);
let timer;
let now = $state(new Date().getTime());



run(() => {
	if (!show && el) el.addEventListener('transitionend', () => expanded = false, { once: true });
});

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
	if (e.key === 'Escape') {
		const nextEl = getNextNotification(el, notification.id);
		removeFromArchive(notification.id)
			.then(() => {
				if (nextEl) nextEl.focus();
			});
	}
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
