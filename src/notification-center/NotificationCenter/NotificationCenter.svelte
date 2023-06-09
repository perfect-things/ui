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
		<Notification notification="{notification}" />
	{/each}

	{#if position === 'top' && !hideButton}<NotificationArchive {position} bind:show="{$showArchive}"/>{/if}

</div>



<script>
import { onMount } from 'svelte';
import { writable } from 'svelte/store';
import { PushButton } from '../../push-button';
import { Notifications, ArchivedNotifications, createTimer, timers } from '../store.js';
import { NotificationArchive } from '../NotificationArchive';
import { Notification } from '../Notification';

export let position = 'top';
let className = '';
export { className as class };
export let round = false;
export let outline = false;
export let hideButton = false;

let notifications = [];
let archived = [];
const showArchive = writable(false);


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

</script>
