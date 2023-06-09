{#if !hideButton}
	<PushButton icon="bell"
		{outline}
		{round}
		class="notification-center-button {hasNotifications} {hasArchivedNotifications}"
		bind:pressed={$showArchive}/>
{/if}

<div class="notification-center notification-center-{position} {className}" class:show-archive="{$showArchive}">

	{#if position === 'bottom' && !hideButton}<NotificationArchive {position} bind:show="{$showArchive}"/>{/if}

	{#each notifications as notification (notification.id)}
		<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
		<div
			class="notification notification-{notification.type}"
			data-id="{notification.id}"
			tabindex="0"
			on:mouseover="{() => clearTimer(notification)}"
			on:focus="{() => clearTimer(notification)}"
			on:mouseleave="{e => createTimer(notification, e.target)}"
			on:blur="{e => createTimer(notification, e.target)}"
			on:keydown="{onkeydown}"
			out:_send="{{ key: notification.id }}"
			in:fly
			animate:flip>

			<div class="notification-msg" role="{notification.type === 'info' ? 'status' : 'alert'}">{@html notification.msg}</div>

			{#if notification.btn}
				<button on:click|preventDefault="{() => notification.cb(notification.id)}">{notification.btn}</button>
			{/if}

			<button class="notification-close" on:click|stopPropagation="{() => hideNotification(notification.id)}">&times;</button>

			{#if notification.showProgress}
				<div class="notification-progressbar">
					<div role="progressbar" class="notification-progress"></div>
				</div>
			{/if}
		</div>

	{/each}

	{#if position === 'top' && !hideButton}<NotificationArchive {position} bind:show="{$showArchive}"/>{/if}

</div>



<script>
import { onMount } from 'svelte';
import { writable } from 'svelte/store';
import { PushButton } from '../../push-button';
import { Notifications, ArchivedNotifications, createTimer, timers, hideNotification, clearTimer,
	send, flip, fly } from '../store.js';
import { NotificationArchive } from '../NotificationArchive';
import { ANIMATION_SPEED } from '../../utils.js';

export let position = 'top';
let className = '';
export { className as class };
export let round = false;
export let outline = false;
export let hideButton = false;

const showArchive = writable(false);
const duration = $ANIMATION_SPEED;

let notifications = [];
let archived = [];


$:hasNotifications = (notifications.length + archived.length) > 0 ? 'has-notifications' : '';
$:hasArchivedNotifications = archived.length > 0 ? 'has-archived-notifications' : '';


onMount(() => {
	Notifications.subscribe(val => {
		notifications = position === 'top' ? Object.values(val).reverse() : Object.values(val);
		notifications.forEach(t => {
			if (!timers[t.id]) createTimer(t);
		});
	});

	ArchivedNotifications.subscribe(val => {
		archived = position === 'top' ? Object.values(val).reverse() : Object.values(val);
	});

	showArchive.subscribe(val => {
		if (val) addEvents();
		else removeEvents();
	});
});


function addEvents () {
	document.addEventListener('click', onDocClick);
	document.addEventListener('keydown', onDocClick);
}

function removeEvents () {
	document.removeEventListener('click', onDocClick);
	document.removeEventListener('keydown', onDocClick);
}


function onDocClick (e) {
	if (e.target.closest('.notification-center-button,.notification-archive,.notification-center')) return;
	if (e.type === 'keydown' && e.key !== 'Escape') return;
	showArchive.set(false);
}


function _send (node, params) {
	if (!$showArchive) return fly(node);
	return send(node, { ...params, duration });
}


</script>
