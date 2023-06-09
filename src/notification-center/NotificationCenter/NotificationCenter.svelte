<PushButton icon="bell" {outline} {round}
	class="notification-center-button {hasNotifications} {hasArchivedNotifications}"
	on:change="{showNotificationCenter}"/>

<div class="notification-center notification-center-{position} {className}" class:show-archive="{showArchive}">

	{#if position === 'bottom'}<NotificationArchive {position} />{/if}

	{#each notifications as notification (notification.id)}
		<Notification notification="{notification}" />
	{/each}

	{#if position === 'top'}<NotificationArchive {position} />{/if}

</div>


<script>
import { PushButton } from '../../push-button';
import { Notifications, ArchivedNotifications, createTimer, timers } from './NotificationCenter';
import { NotificationArchive } from '../NotificationArchive';
import { Notification } from '../Notification';

export let position = 'top';
let className = '';
export { className as class };
export let round = false;
export let outline = false;

let showArchive = false;
let notifications = [];
let archived = [];


$:hasNotifications = (notifications.length + archived.length) > 0 ? 'has-notifications' : '';
$:hasArchivedNotifications = archived.length > 0 ? 'has-archived-notifications' : '';


Notifications.subscribe(val => {
	notifications = position === 'top' ? Object.values(val).reverse() : Object.values(val);
	notifications.forEach(t => {
		if (!timers[t.id]) createTimer(t);
	});
});

ArchivedNotifications.subscribe(val => {
	archived = position === 'top' ? Object.values(val).reverse() : Object.values(val);
});


function showNotificationCenter (e) {
	showArchive = e.detail.pressed;
}


</script>
