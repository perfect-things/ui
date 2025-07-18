<div
	role="button"
	bind:this={element}
	{inert}
	{tabindex}
	class={cls}
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
