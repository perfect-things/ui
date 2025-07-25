<!--
@component ## NotificationCenter

A comprehensive notification system with live notifications and an archive.
- Displays a bell button that shows count of archived (past) notifications
- Live notifications appear on screen and then move to archive when dismissed
- Supports different notification types (info, success, warning, error)
- Can be used as a regular toaster by hiding the button

@example
```svelte
<NotificationCenter />
<Button onclick={() => showNotification('Hello')}>Show info</Button>

<script>
import { NotificationCenter, Button, showNotification } from '@perfectthings/ui';
</script>
```
@see {@link https://ui.perfectthings.dev/#NotificationCenter Notification Center Docs} for more info.
-->

{#if !hideButton}
	<PushButton
		icon="bell"
		{outline}
		{round}
		bind:pressed={$showArchive}
		class={[
			'notification-center-button',
			{
				'has-notifications': notifications.length || hasArchivedNotifications,
				'has-archived-notifications': hasArchivedNotifications
			}
		]}/>
{/if}

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="notification-center {className}"
	class:show-archive={$showArchive}
	class:archive-is-visible={archiveIsVisible}
	class:has-active-notifications={hasActiveNotifications}
	bind:this={el}
	{...restProps}>

	{#each notifications as notification (notification.id)}
		<div
			class="notification notification-{notification.type}"
			data-id={notification.id}
			tabindex="0"
			onmouseover={() => clearTimer(notification)}
			onfocus={() => clearTimer(notification)}
			onmouseleave={e => createTimer(notification, e.target)}
			onblur={e => createTimer(notification, e.target)}
			onkeydown={e => onKeydown(e, notification)}
			out:_send="{{ key: notification.id }}"
			in:fly="{{ duration }}"
			animate:flip>

			<div class="notification-icon"><Icon name={notification.type}/></div>
			<div class="notification-msg" role={notification.type === 'info' ? 'status' : 'alert'}>{@html notification.msg}</div>

			<div class="notification-buttons">
				{#if notification.btn}
					<button class="notification-button" onclick={e => onToastClick(e, notification)}>{notification.btn}</button>
				{/if}

				<button class="notification-close" onclick={e => onToastCloseClick(e, notification)}>&times;</button>
			</div>

			{#if notification.showProgress}
				<div class="notification-progressbar">
					<div role="progressbar" class="notification-progress"></div>
				</div>
			{/if}
		</div>
	{/each}

	{#if !hideButton}<NotificationArchive bind:show={$showArchive} bind:expanded={archiveIsExpanded}/>{/if}
</div>


<script lang="ts">
import './NotificationCenter.css';
import type { NotificationCenterProps } from '../types';
import { onMount } from 'svelte';
import { writable } from 'svelte/store';
import { Icon } from '../../icon';
import { PushButton } from '../../push-button';
import { Notifications, ArchivedNotifications, createTimer, timers, hideNotification, clearTimer,
	send, flip, fly, slideDown } from '../store';
import { NotificationArchive } from '../NotificationArchive';
import { UI } from '../../utils';
import { getNextNotification } from '../utils';


const {
	class: className = '',
	round = false,
	outline = false,
	hideButton = false,
	...restProps
}: NotificationCenterProps = $props();


const showArchive = writable(false);
let archiveIsVisible = $state(false);
let archiveIsExpanded = $state(false);

let el: HTMLElement = $state();
let notifications = $state([]);
let hasActiveNotifications = $state(false);
let initial = $state(true);


const duration = $derived(UI.ANIMATION_SPEED);
const hasArchivedNotifications = $derived(Object.keys($ArchivedNotifications).length > 0);


onMount(() => {
	document.body.appendChild(el);

	Notifications.subscribe(val => {
		notifications = Object.values(val).reverse();
		notifications.forEach(t => {
			if (!timers[t.id]) createTimer(t);
		});

		if (notifications.length > 0) hasActiveNotifications = true;
		// letting the last toast finish sliding out before pushing the main component to z-index -1
		else setTimeout(() => hasActiveNotifications = false, duration);
	});


	showArchive.subscribe(val => {
		if (initial) return;
		if (val) addEvents();
		else removeEvents();
	});
	if (initial) requestAnimationFrame(() => initial = false);
});


function onToastClick (e, notification) {
	e.preventDefault();
	notification.cb(notification.id);
}

function onToastCloseClick (e, notification) {
	e.stopPropagation();
	hideNotification(notification.id);
}



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
	params = { ...params, duration };
	if (!$showArchive) return fly(node, {});						// dismissing with archive hidden
	if (!archiveIsExpanded) return slideDown(node, params);		// dismissing with archive visible but collapsed
	return send(node, params);
}




function onKeydown (e, notification) {
	if (e.key === 'Escape') {
		const nextEl = getNextNotification(el, notification.id);
		hideNotification(notification.id)
			.then(() => {
				if (nextEl) nextEl.focus();
			});
	}
}

</script>
