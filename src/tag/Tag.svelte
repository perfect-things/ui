<!--
@component ## Tag

A versatile tag component for labels, categories, and interactive elements.
- Supports custom colors including semantic variants (info, warning, danger, success)
- Can include icons for enhanced visual communication

@example
```svelte
<Tag>Simple Tag</Tag>
<Tag color="success" icon="check">Success Tag</Tag>
<Tag round clickable onclick={() => console.log('clicked')}>Clickable Round Tag</Tag>
<Tag color="#ac6453">Custom Color Tag</Tag>
```
@see {@link https://ui.perfectthings.dev/#Tag Tag Docs} for more info.
-->

<div
	role="button"
	bind:this={element}
	class={cls}
	{inert}
	{tabindex}
	{style}
	{onclick}
	onkeydown={_onkeydown}
	{...restProps}>
	<Icon name={icon}/>
	<div class="ui-tag-label">{@render children?.()}</div>
</div>

<script lang="ts">
import './Tag.css';
import type { TagProps } from './types';
import { Icon } from '../icon';
import { isColorDark } from '../utils';


let {
	class: className = '',
	round = false,
	icon = undefined,
	color = undefined,
	element = $bindable(undefined),
	disabled = false,
	clickable = false,
	onclick = () => {},
	children,
	...restProps
}: TagProps = $props();


const cls = $derived([
	'ui-tag',
	className,
	color,
	{
		round,
		disabled,
		clickable,
		dark: color && isColorDark(color),
		light: color && !isColorDark(color)
	}
]);

const inert = $derived(disabled || !clickable);
const style = $derived(color ? `background-color: ${color};` : '');
const tabindex = $derived(inert ? undefined : 0);

function _onkeydown (e) {
	if (e.key === 'Enter' || e.key === ' ') onclick(e);
}
</script>
