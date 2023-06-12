{#if !hideButton}
	<PushButton icon="bell"
		{outline}
		{round}
		class="notification-center-button {hasNotifications} {hasArchivedNotifications}"
		bind:pressed={$showArchive}/>
{/if}

<div
	class="notification-center notification-center-{position} {className}"
	class:show-archive="{$showArchive}"
	class:archive-is-visible="{archiveIsVisible}"
	class:has-active-notifications="{hasActiveNotifications}"
	bind:this="{el}">

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

			<div class="notification-icon"><Icon name="{notification.type}"/></div>
			<div class="notification-msg" role="{notification.type === 'info' ? 'status' : 'alert'}">{@html notification.msg}</div>

			<div class="notification-buttons">
				{#if notification.btn}
					<button on:click|preventDefault="{() => notification.cb(notification.id)}">{notification.btn}</button>
				{/if}

				<button class="notification-close" on:click|stopPropagation="{() => hideNotification(notification.id)}">&times;</button>
			</div>

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
import { Icon } from '../../icon';
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
let archiveIsVisible = false;

let el;
let notifications = [];
let archived = [];
let initial = true;
let hasActiveNotifications = false;


$:hasArchivedNotifications = archived.length > 0 ? 'has-archived-notifications' : '';
$:hasNotifications = (notifications.length + archived.length) > 0 ? 'has-notifications' : '';


onMount(() => {
	document.body.appendChild(el);

	Notifications.subscribe(val => {
		notifications = position === 'top' ? Object.values(val).reverse() : Object.values(val);
		notifications.forEach(t => {
			if (!timers[t.id]) createTimer(t);
		});

		if (notifications.length > 0) hasActiveNotifications = true;
		// letting the last toast finish sliding out before pushing the main component to z-index -1
		else setTimeout(() => hasActiveNotifications = false, $ANIMATION_SPEED);
	});

	ArchivedNotifications.subscribe(val => {
		archived = position === 'top' ? Object.values(val).reverse() : Object.values(val);
	});

	showArchive.subscribe(val => {
		if (initial) return;
		if (val) addEvents();
		else removeEvents();
	});
	requestAnimationFrame(() => initial = false);
});


function addEvents () {
	archiveIsVisible = true;
	document.addEventListener('click', onDocClick);
	document.addEventListener('keydown', onDocClick);
}

function removeEvents () {
	document.removeEventListener('click', onDocClick);
	document.removeEventListener('keydown', onDocClick);
	el
		.querySelector('.notification-archive')
		.addEventListener('transitionend', () => archiveIsVisible = false, { once: true });
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
