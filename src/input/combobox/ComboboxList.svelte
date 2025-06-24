<!-- svelte-ignore a11y_interactive_supports_focus -->
{#if opened}
	<div
		id="{listId}"
		role="listbox"
		bind:this={listElement}
		class={[
			'combobox-list',
			{
				'hidden': !opened,
				'empty': !items.length && !shouldShowNewItem,
				multiselect
			},
		]}
		{onmousedown}>

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
			onclick={_onclick}/>
	</div>
{/if}


<script lang="ts">
import ComboboxListItem from './ComboboxListItem.svelte';
import ComboboxListItemNew from './ComboboxListItemNew.svelte';
import ComboboxListHeader from './ComboboxListHeader.svelte';
import { groupData } from './utils';

type Item = {
	id?: string;
	name?: string;
	highlightedName?: string;
	idx?: number;
	group?: boolean;
};

type Group = {
	name: string;
	items: Item[];
};

interface ComboboxListProps {
	listId?: string;
	allowNew?: boolean;
	multiselect?: boolean;
	items?: Item[];
	selectedItems?: Item[];
	opened?: boolean;
	shouldShowNewItem?: boolean;
	newItemName?: string;

	highlightIndex?: number;
	listElement?: HTMLDivElement;

	onmousedown?: () => void;
	onclick?: (event, item) => void;
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


const groupedItems: Group[] = $derived(groupData(items));


function _onclick (e) {
	const item = { name: newItemName, idx: items.length };
	onclick(e, item);

}

</script>
