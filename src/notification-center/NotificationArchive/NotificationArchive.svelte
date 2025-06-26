<div
	bind:this={el}
	inert={!show}
	class={[
		'notification-archive',
		{
			expanded,
			inert: !show
		}
	]}>
	<header>
		{#if archived.length}
			<h2><Button icon="chevronRight" text onclick={() => toggle()}> Recent notifications ({archived.length})</Button></h2>
			<div class="notification-archive-buttons">
				<Button text class="btn-clear" onclick={e => clearAll(e)}>Clear all</Button>
				<Button text class="btn-close" onclick={() => (show = false)}>&times;</Button>
			</div>
		{:else}
			<h2>No recent notifications</h2>
			<div class="notification-archive-buttons">
				<Button text class="btn-close" onclick={() => (show = false)}>&times;</Button>
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
				<button class="notification-close" onclick={e => _removeFromArchive(e, notification.id)}>&times;</button>
			</div>
		{/each}
	{/if}
</div>


<script lang="ts">
import './NotificationArchive.css';
import type { NotificationArchiveProps } from '../types';
import { onDestroy, onMount } from 'svelte';
import { Button } from '../../button';
import { ArchivedNotifications, removeFromArchive, receive, fly, slideUp, flip } from '../store';
import { UI, timeAgo } from '../../utils';
import { getNextNotification } from '../utils';



let {
	show = $bindable(false),
	expanded = $bindable(false),
}: NotificationArchiveProps = $props();


const duration = $derived(UI.ANIMATION_SPEED);

let el: HTMLElement = $state();
let archived = $state([]);
let timer;
let now = $state(new Date());



$effect(() => {
	if (!show && el) el.addEventListener('transitionend', () => expanded = false, { once: true });
});

onMount(() => {
	timer = setInterval(() => (now = new Date()), 10000);

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


function _removeFromArchive (e, id) {
	e.stopPropagation();
	removeFromArchive(id);
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


function _in (node, params = { key: '' }) {
	if (!show) return fly(node, { duration: 0 });
	if (show && expanded) return slideUp(node, params);
	return receive(node, { ...params, delay: 100, duration });
}


function _out (node, params = {}) {
	if (show && expanded) return fly(node, params);			// deleting
	if (show && !expanded) return slideUp(node, params);	// collapsing with archive visible
	return slideUp(node, { duration: 0 });					// collapsing with archive hidden
}


</script>
