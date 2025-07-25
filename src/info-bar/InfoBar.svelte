<!--
@component ## InfoBar

A component for displaying informational messages with contextual styling.
- Different types: info, success, warning, error/danger
- Conditional rendering - only shows when message is provided

@example
```svelte
<InfoBar msg="Operation completed successfully!" type="success" />
<InfoBar msg="Please check your input." type="warning" />
<InfoBar msg="An error occurred during processing." type="error" />
<InfoBar msg="Here's some helpful information." type="info" />
```
@see {@link https://ui.perfectthings.dev/#InfoBar Info Bar Docs} for more info.
-->

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
