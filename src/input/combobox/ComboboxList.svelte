<!-- svelte-ignore a11y_interactive_supports_focus -->
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
			{#each groupedItems as group (group)}
				<ComboboxListHeader name={group.name} />

				{#if group.items}
					{#each group.items as item (item)}
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


<script lang="ts">
import ComboboxListItem from './ComboboxListItem.svelte';
import ComboboxListItemNew from './ComboboxListItemNew.svelte';
import ComboboxListHeader from './ComboboxListHeader.svelte';
import { groupData } from './utils';


interface ComboboxListProps {
	listId?: string;
	allowNew?: boolean;
	multiselect?: boolean;
	items?: any[];
	selectedItems?: any[];
	opened?: boolean;
	shouldShowNewItem?: boolean;
	newItemName?: string;

	highlightIndex?: number;
	listElement?: HTMLDivElement;

	onmousedown?: (e: MouseEvent) => void;
	onclick?: (item: any, e: MouseEvent) => void;
}

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
}: ComboboxListProps = $props();


const groupedItems = $derived(groupData(items));

</script>
