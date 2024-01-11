<!-- svelte-ignore a11y-interactive-supports-focus a11y-click-events-have-key-events -->
{#if opened}
	<div
		id="combobox-list-{guid}"
		class="combobox-list {opened ? '' : 'hidden'}"
		class:multiselect
		class:empty="{!items.length && !shouldShowNewItem}"
		role="listbox"
		on:mousedown={onListMouseDown}
		bind:this="{element}">
		{#if items.length}
			{#each groups as group}
				{#if group.name}
					<div class="combobox-list-header">{group.name}</div>
				{/if}
				{#if group.items}
					{#each group.items as item}
						<div
							role="option"

							aria-selected="{item.idx === highlightIndex}"
							class:selected="{item.idx === highlightIndex}"

							aria-checked="{item.checked}"
							class:checked="{item.checked}"

							class="combobox-list-item"
							class:in-group="{!!item.group}"
							on:click="{e => onclick(item, e)}"
							on:mouseenter="{() => highlightIndex = item.idx}"
							on:mousedown|preventDefault
							on:mouseup="{e => onclick(item, e)}"
							on:touchstart="{touchStart}"
							on:touchend="{touchEnd}"
							>
							{#if multiselect}
								{#if item.checked}
									<Icon name="checkboxChecked" />
								{:else}
									<Icon name="checkbox" />
								{/if}
							{/if}
							{@html item.highlightedName || item.name}
						</div>
					{/each}
				{/if}
			{/each}
		{:else if allowNew}
			<div class="combobox-list-empty">No items found</div>
		{/if}

		{#if shouldShowNewItem}
		<div class="combobox-list-header">Create new item</div>
			<div
				role="option"
				aria-selected="{highlightIndex === items.length}"
				class="combobox-list-item"
				class:selected="{highlightIndex === items.length}"
				on:click="{e => onclick({ name: inputElement.value, idx: items.length }, e)}">
					{inputElement.value}
			</div>
		{/if}
	</div>
{/if}


<script>
import { afterUpdate, createEventDispatcher, onDestroy } from 'svelte';
import { isMobile, alignItem } from '../../utils';
import { Icon } from '../../icon';
import { groupData } from './utils';


export let multiselect = undefined;
export let allowNew = false;
export let shouldShowNewItem = false;
export let items = [];

export let element = undefined;
export let inputElement = undefined;
export let guid = '';
export let opened = false;

const dispatch = createEventDispatcher();

let highlightIndex = 0;
let _opened = false;
// let isHiding = false;
// let isSelecting = false;

$:groups = groupData(items);



afterUpdate(() => {
	if (opened !== _opened) {
		_opened = opened;
		if (opened) open();
		else close();
	}

});

onDestroy(() => {
	if (element) element.remove();
});



function open (e) {
	if (opened) return;

	opened = true;
	requestAnimationFrame(() => {
		if (element && element.parentElement !== document.body) {
			document.body.appendChild(element);
		}
		highlight();
		alignDropdown(e);
	});
}


function close () {
	if (!opened) return;
	opened = false;
	// isSelecting = false;
}




export function getItem () {
	return items[highlightIndex];
}


export function up () {
	if (!opened) return open();
	let idx = highlightIndex - 1;
	while (idx > 0 && !items[idx]) idx -= 1;
	if (idx !== highlightIndex && items[idx]) {
		highlightIndex = items[idx].idx;
		highlight();
	}
}


export function down () {
	if (!opened) return open();
	let idx = highlightIndex + 1;
	while (idx < items.length - 1 && !items[idx]) idx += 1;

	let item = items[idx];

	if (shouldShowNewItem && idx === items.length) {
		item = { idx: items.length };
	}

	if (idx !== highlightIndex && item) {
		highlightIndex = item.idx;
		highlight();
	}
}


function highlight () {
	if (!element) return;
	requestAnimationFrame(() => {
		const selectedEl = element.querySelector('.selected');
		if (!selectedEl || !element.scrollTo) return;

		// going up
		const paddingTop = 3;
		let top = selectedEl.offsetTop - paddingTop;
		if (element.scrollTop > top) element.scrollTo({ top });

		// going down
		else {
			const paddingBottom = 6;
			top = selectedEl.offsetTop + selectedEl.offsetHeight - element.offsetHeight + paddingBottom;
			if (element.scrollTop < top) element.scrollTo({ top });
		}
	});
}




function alignDropdown (e) {
	requestAnimationFrame(() => {
		alignItem({
			element,
			target: inputElement,
			setMinWidthToTarget: true,
			offsetH: -1
		});
		if (e && e.type === 'focus') inputElement.select();
	});
}



function onListMouseDown () {
	// isSelecting = true;
}


function touchStart (e) {
	const el = e.target.closest('.combobox-list-item');
	el.classList.add('blinking');
}


function touchEnd (e) {
	const el = e.target.closest('.combobox-list-item');
	requestAnimationFrame(() => el.classList.remove('blinking'));
}


function onclick (item, event) {
	// click should only be handled on touch devices
	if (isMobile() && event.type !== 'click') return event.preventDefault();
	if (!isMobile() && event.type === 'click') return;

	dispatch('click', { item, event });
}

</script>
