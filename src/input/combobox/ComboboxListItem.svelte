<!-- svelte-ignore a11y_interactive_supports_focus -->
<div
	role="option"
	class={cls}
	aria-selected={selected}
	aria-checked={!!checked}

	onmouseenter={() => highlightIndex = item.idx}
	onmousedown={e => e.preventDefault()}
	onmouseup={e => onclick(e, item)}

	{ontouchstart}
	{ontouchend}
	{ontouchmove}
	>
	{#if multiselect}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-square-check">
			<rect x="4" y="4" width="16" height="16" rx="3"></rect>
			<path class="tick" d="M8 12l3 3l5.5 -5.5"></path>
		</svg>
	{/if}
	<span>{@html item.highlightedName || item.name}</span>
</div>

<script lang="ts">
import type { ComboboxListItemProps } from './types';

let {
	item = {},
	multiselect = undefined,
	selectedItems = [],
	highlightIndex = $bindable(0),
	onclick = () => {}
}: ComboboxListItemProps = $props();

let touching = $state(false);

const selected = $derived(item.idx === highlightIndex);
const checked = $derived(isChecked(item, selectedItems));
const cls = $derived([
	'combobox-list-item',
	{
		'in-group': !!item.group,
		selected,
		checked,
		touching
	}
]);


function isChecked (_item, _selectedItems) {
	if (!multiselect || !_selectedItems?.length) return false;
	const _id = _item.id || _item.name || _item;
	return _selectedItems.some(s => (s.id || s.name || s) === _id);
}


function ontouchstart () {
	touching = true;
}


function ontouchend (e) {
	e.preventDefault();
	setTimeout(() => {
		if (touching) onclick(e, item);
		touching = false;
	}, multiselect ? 0 : 200);
}

function ontouchmove () {
	touching = false;
}

</script>
