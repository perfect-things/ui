<div aria-modal="true"
	aria-label="{title}"
	class="dialog-backdrop {cssClass}"
	class:visible="{opened}"
	bind:this="{backdropEl}"
	on:click="{onBackdropClick}">

	<div class="dialog">
		<h1>{title}</h1>
		<div class="dialog-content" bind:this="{contentEl}">
			<div tabindex="0" class="focus-trap focus-trap-top" on:focus="{focusLast}"></div>
			<slot></slot>
			<div tabindex="0" class="focus-trap focus-trap-bottom" on:focus="{focusFirst}"></div>
		</div>
	</div>
</div>
<svelte:options accessors={true}/>

<script>
import './index.css';
export let title = '';
export let opened = false;
export let cssClass = '';
let backdropEl, contentEl, triggerEl;

function focusFirst () {
	const focusable = getFocusableElements().shift();
	if (focusable) focusable.focus();
}

function focusLast () {
	const focusable = getFocusableElements().pop();
	if (focusable) focusable.focus();
}

function getFocusableElements () {
	const FOCUSABLE_SELECTOR = 'a[href],button:not([disabled]),iframe:not([disabled]),input:not([disabled]),' +
		'select:not([disabled]),textarea:not([disabled]),[contentEditable]';
	return Array.from(contentEl.querySelectorAll(FOCUSABLE_SELECTOR));
}

function onBackdropClick (e) {
	if (!e.target.closest('.dialog')) {
		e.stopPropagation();
		close();
	}
}

function onDocKeydown (e) {
	const hasFocus = document.activeElement.closest('.dialog-backdrop') === backdropEl;
	if (e.key === 'Escape' && opened && hasFocus) {
		e.stopPropagation();
		close();
	}
}


export function open (openedBy) {
	if (opened) return;
	triggerEl = openedBy || document.activeElement;
	backdropEl.style.display = 'flex';
	setTimeout(() => {
		opened = true;
		focusFirst();
		document.addEventListener('keydown', onDocKeydown, true);
	}, 100);
}

export function close () {
	if (!opened) return;
	setTimeout(() => opened = false);
	setTimeout(() => {
		backdropEl.style.display = 'none';
		if (triggerEl) triggerEl.focus();
		document.removeEventListener('keydown', onDocKeydown);
	}, 250);
}

</script>
