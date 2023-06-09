<div class="notification-archive">
	<header>
		<h2>Recent notifications</h2>
		<div class="notification-archive-buttons">
			{#if archived.length}
				<Button link on:click="{clearAll}">Clear all</Button>
			{/if}
			<Button text round icon="close" on:click="{closeArchive}" />
		</div>
	</header>
	{#if archived.length}
		{#each archived as notification (notification.id)}
			<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
			<div
				tabindex="0"
				class="notification notification-{notification.type} archived"
				on:keydown="{() => removeFromArchive(notification.id)}"
				transition:fly="{{ duration: $ANIMATION_SPEED, x: 500, opacity: 1 }}">

				<div class="notification-msg" role="{notification.type === 'info' ? 'status' : 'alert'}">{@html notification.msg}</div>
				<button class="notification-close" on:click|stopPropagation="{() => removeFromArchive(notification.id)}">&times;</button>
			</div>
		{/each}
	{:else}
		<p class="notification-archive-empty">No recent notifications</p>
	{/if}
</div>


<script>
import { fly } from 'svelte/transition';
import { Button } from '../../button';
import { ArchivedNotifications, removeFromArchive } from '../NotificationCenter';
import { ANIMATION_SPEED } from '../../utils.js';

export let position = 'top';

let archived = [];


ArchivedNotifications.subscribe(val => {
	archived = position === 'top' ? Object.values(val).reverse() : Object.values(val);
});


function clearAll () {
	ArchivedNotifications.set({});
}

function closeArchive () {
	ArchivedNotifications.set({});
}

</script>
