<!-- svelte-ignore a11y_interactive_supports_focus -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
{#if opened}
	<div
		id="{listId}"
		class="combobox-list {opened ? '' : 'hidden'}"
		class:multiselect
		class:empty={!items.length && !shouldShowNewItem}
		role="listbox"
		{onmousedown}
		bind:this={listElement}>

		{#if items.length}
			{#each groupedItems as group}
				<ComboboxListHeader name={group.name} />

				{#if group.items}
					{#each group.items as item}
						<ComboboxListItem
							{item}
							{multiselect}
							{selectedItems}
							bind:highlightIndex
							{onclick} />
					{/each}
				{/if}
			{/each}
		{:else if allowNew}
			<div class="combobox-list-empty">No items found</div>
		{/if}

		<ComboboxListItemNew
			selected={highlightIndex === items.length}
			show={shouldShowNewItem}
			name={newItemName}
			onclick={e => onclick({ name: newItemName, idx: items.length }, e)}/>
	</div>
{/if}


<script>
import { onDestroy } from 'svelte';
import ComboboxListItem from './ComboboxListItem.svelte';
import ComboboxListItemNew from './ComboboxListItemNew.svelte';
import ComboboxListHeader from './ComboboxListHeader.svelte';
import { groupData } from './utils';


/**
 * @typedef {Object} Props
 * @property {string} [listId]
 * @property {boolean} [allowNew]
 * @property {boolean} [multiselect]
 * @property {Array} [items]
 * @property {Array} [selectedItems]
 * @property {boolean} [opened]
 * @property {boolean} [shouldShowNewItem]
 * @property {string} [newItemName]
 *
 * @property {number} [highlightIndex]
 * @property {HTMLElement} [listElement]
 * @property {Function} [onmousedown]
 * @property {Function} [onclick]
 */

/** @type {Props} */
let {
	listId = '',
	allowNew = undefined,
	multiselect = undefined,
	items = [],
	selectedItems = [],
	opened = false,
	shouldShowNewItem = false,
	newItemName = '',

	highlightIndex = $bindable(0),
	listElement = $bindable(undefined),
	onmousedown = () => {},
	onclick = () => {}
} = $props();


const groupedItems = $derived(groupData(items));


onDestroy(() => {
	if (listElement) listElement.remove();
});

</script>
