<!--
@component ## NotificationCenter

A simple notification system.

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


<div class={['notification-center', className]}
	style="min-height: {totalHeight}px;"
	bind:this={el}>

	{#each notifications as notification (notification.id)}
		<div
			class={['notification', `notification-${notification.type}`]}
			data-id={notification.id}
			tabindex="0"
			role="alertdialog"
			onmouseover={() => clearTimer(notification)}
			onfocus={() => clearTimer(notification)}
			onmouseleave={e => createTimer(notification, e.target)}
			onblur={e => createTimer(notification, e.target)}
			onkeydown={e => onKeydown(e, notification)}
			out:fly={{ duration, key: notification.id }}
			in:fly={{ duration, key: notification.id }}
			animate:flip={{ duration }}>

			<div class="notification-icon"><Icon name={notification.type}/></div>
			<div class="notification-msg" role={notification.role}>{@html notification.msg}</div>

			<div class="notification-buttons">
				{#if notification.btn}
					<button class="notification-button" onclick={e => onToastClick(e, notification)}>{notification.btn}</button>
				{/if}

				<Button
					class="notification-close"
					icon="close"
					round
					text
					onclick={e => onToastCloseClick(e, notification)}/>
			</div>

			{#if notification.showProgress}
				<div class="notification-progressbar">
					<div role="progressbar" class="notification-progress"></div>
				</div>
			{/if}
		</div>
	{/each}

</div>


<script lang="ts">
import './NotificationCenter.css';
import type { Notification, NotificationCenterProps } from './types';

import { onMount } from 'svelte';
import { Icon } from '../icon';
import { UI } from '../utils';
import { Notifications, createTimer, hideNotification, clearTimer, flip, fly } from './store';
import { getNextNotification } from './utils';
	import { Button } from '../button';


const duration = $derived(UI.ANIMATION_SPEED);
const { class: className = '' }: NotificationCenterProps = $props();

let el: HTMLElement = $state();
let notifications = $state<Notification[]>([]);

let totalHeight = $state(0);


onMount(() => {
	document.body.appendChild(el);

	Notifications.subscribe((val: Notification[]) => {
		const newNotifications = Object.values(val).reverse();
		const adding = newNotifications.length > notifications.length;
		notifications = newNotifications;

		if (adding) requestAnimationFrame(updateTotalHeight);

		// if removing, we need to wait for the fly animation to finish
		// as the notification position is set to absolute immediately
		// and the container height would ignore it and the
		// still-animating notification would be cut off
		else setTimeout(updateTotalHeight, duration + 100);
	});

});


function updateTotalHeight () {
	if (!el) return;
	el.style.minHeight = '0';
	totalHeight = el.offsetHeight;
}


function onToastClick (e: Event, notification: Notification) {
	e.preventDefault();
	notification.cb(notification.id);
}

function onToastCloseClick (e: Event, notification: Notification) {
	e.stopPropagation();
	hideNotification(notification.id);
}



function onKeydown (e: KeyboardEvent, notification: Notification) {
	if (e.key === 'Escape') {
		const nextEl = getNextNotification(el, notification.id);
		hideNotification(notification.id)
			.then(() => {
				if (nextEl) nextEl.focus();
			});
	}
}

</script>
