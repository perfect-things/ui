<!-- svelte-ignore a11y_interactive_supports_focus -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	role="option"
	class="combobox-list-item"
	class:in-group={!!item.group}

	aria-selected={selected}
	class:selected={selected}

	aria-checked={!!checked}
	class:checked={checked}

	onclick={e => onclick(item, e)}
	onmouseenter={() => highlightIndex = item.idx}
	onmousedown={e => e.preventDefault()}
	onmouseup={e => onclick(item, e)}
	ontouchstart={touchStart}
	ontouchend={touchEnd}
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

interface Item {
	id?: string;
	name?: string;
	highlightedName?: string;
	idx?: number;
	group?: boolean;
}

interface Props {
	item?: Item;
	multiselect?: boolean;
	selectedItems?: Array<Item>;
	highlightIndex?: number;
	onclick?: (item: Item, event: MouseEvent | TouchEvent) => void;
}

let {
	item = {},
	multiselect = undefined,
	selectedItems = [],
	highlightIndex = $bindable(0),
	onclick = () => {}
}: Props = $props();


const selected = $derived(item.idx === highlightIndex);
const checked = $derived(isChecked(item, selectedItems));


function isChecked (_item, _selectedItems = selectedItems) {
	if (!multiselect || !_selectedItems?.length) return false;

	return _selectedItems.some(s => {
		return (s.id || s.name || s) === (_item.id || _item.name || _item);
	});
}


function touchStart (e) {
	const el = e.target.closest('.combobox-list-item');
	el.classList.add('blinking');
}


function touchEnd (e) {
	const el = e.target.closest('.combobox-list-item');
	requestAnimationFrame(() => el.classList.remove('blinking'));
}

</script>
