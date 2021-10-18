<style>
.icon-block {
	float: left;
	width: 96px;
	height: 96px;
	margin: 0 20px 20px 0;
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: space-between;
	background-color: var(--color-background);
	padding: 0 10px 10px;
	border-radius: 5px;
}
.icon-block-icon { flex: 1; display: flex; align-items: center; justify-content: center; }
.icon-block-name { height: 20px; }
</style>
<h2>Icons</h2>
{#each Object.keys(icons) as icon}
	<div class="icon-block">
		<div class="icon-block-icon"><Icon name="{icon}"/></div>
		<div class="icon-block-name">{icon}</div>
	</div>
{/each}

<script>
import Icon, { icons } from '../../src/icon';
</script>
