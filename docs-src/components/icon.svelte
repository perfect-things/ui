<h2>Icons</h2>
{#each Object.keys(icons) as icon}
	<div class="icon-block">
		<div class="icon-block-icon"><Icon name="{icon}"/></div>
		<div class="icon-block-name">{icon}</div>
	</div>
{/each}

<script>
import { Icon, icons } from '../../src';
</script>
