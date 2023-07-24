{#if !hideButton}
	<PushButton icon="bell"
		{outline}
		{round}
		class="notification-center-button {hasNotifications} {hasArchivedNotifications}"
		bind:pressed={$showArchive}/>
{/if}

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="notification-center {className}"
	class:show-archive="{$showArchive}"
	class:archive-is-visible="{archiveIsVisible}"
	class:has-active-notifications="{hasActiveNotifications}"
	bind:this="{el}">

	{#each notifications as notification (notification.id)}
		<div
			class="notification notification-{notification.type}"
			data-id="{notification.id}"
			tabindex="0"
			on:mouseover="{() => clearTimer(notification)}"
			on:focus="{() => clearTimer(notification)}"
			on:mouseleave="{e => createTimer(notification, e.target)}"
			on:blur="{e => createTimer(notification, e.target)}"
			on:keydown="{e => onKeydown(e, notification)}"
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

	{#if !hideButton}<NotificationArchive bind:show="{$showArchive}" bind:expanded="{archiveIsExpanded}"/>{/if}

</div>



<script>
import { onMount } from 'svelte';
import { writable } from 'svelte/store';
import { Icon } from '../../icon';
import { PushButton } from '../../push-button';
import { Notifications, ArchivedNotifications, createTimer, timers, hideNotification, clearTimer,
	send, flip, fly, slideDown } from '../store.js';
import { NotificationArchive } from '../NotificationArchive';
import { ANIMATION_SPEED } from '../../utils.js';

let className = '';
export { className as class };
export let round = false;
export let outline = false;
export let hideButton = false;

const showArchive = writable(false);
const duration = $ANIMATION_SPEED;
let archiveIsVisible = false;
let archiveIsExpanded = false;

let el;
let notifications = [];
let initial = true;
let hasActiveNotifications = false;


$:hasArchivedNotifications = Object.keys($ArchivedNotifications).length ? 'has-archived-notifications' : '';
$:hasNotifications = (notifications.length || hasArchivedNotifications) ? 'has-notifications' : '';


onMount(() => {
	document.body.appendChild(el);

	Notifications.subscribe(val => {
		notifications = Object.values(val).reverse();
		notifications.forEach(t => {
			if (!timers[t.id]) createTimer(t);
		});

		if (notifications.length > 0) hasActiveNotifications = true;
		// letting the last toast finish sliding out before pushing the main component to z-index -1
		else setTimeout(() => hasActiveNotifications = false, $ANIMATION_SPEED);
	});


	showArchive.subscribe(val => {
		if (initial) return;
		if (val) addEvents();
		else removeEvents();
	});
	if (initial) requestAnimationFrame(() => initial = false);
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
	if (!$showArchive) return fly(node);						// dismissing with archive hidden
	if (!archiveIsExpanded) return slideDown(node, params);		// dismissing with archive visible but collapsed
	return send(node, { ...params, duration });
}


function onKeydown (e, notification) {
	if (e.key === 'Escape') hideNotification(notification.id);
}

</script>
