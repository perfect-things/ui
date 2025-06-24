{#if msg}
	<div bind:this={element} class={cls} {...restProps}>
		<Icon name={type}/>
		<p>{@html msg}</p>
	</div>
{/if}

<script lang="ts">
import './InfoBar.css';
import type { InfoBarProps } from './types';
import { Icon } from '../icon';

let {
	class: className = '',
	element = $bindable(undefined),
	msg = '',
	type = 'info',
	...restProps
}: InfoBarProps = $props();


const cls = $derived([
	'info-bar',
	'info-bar-' + type,
	className
]);

</script>
