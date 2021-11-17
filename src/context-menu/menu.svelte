<ul class="context-menu" class:hidden="{!opened}" bind:this="{menuEl}">
	<slot></slot>
</ul>

<svelte:window on:click={onDocumentClick} on:contextmenu="{onContextMenu}" />

<script>
let menuEl, el, opened = false;
export let targetSelector = 'body';

document.addEventListener('wheel', onscroll);

function updatePosition (e)  {
	if (e) {	// update position to pointer
		menuEl.style.left = e.pageX + 'px';
		menuEl.style.top = e.pageY + 'px';
	}
	else {		// make sure it stays on screen
		let {x, y, width, height} = menuEl.getBoundingClientRect();
		const winH = window.innerHeight;
		const winW = window.innerWidth;
		const padding = 10;
		if (winH - height - y < padding) y = winH - height - padding;
		if (winW - width - x < padding) x = winW - width - padding;
		menuEl.style.left = x + 'px';
		menuEl.style.top = y + 'px';
	}
}

function onContextMenu (e) {
	close();
	el = e.target.closest(targetSelector);
	if (!el) return;
	e.stopPropagation();
	e.preventDefault();
	updatePosition(e);
	open();
}

function onDocumentClick (e) {
	if (e.button !== 0) return;
	if (!e.target.closest('.context-menu')) close();
}

function onscroll () {
	if (opened) close();
}

export function open () {
	opened = true;
	return new Promise(resolve => {
		setTimeout(() => {
			// needs to finish rendering first
			updatePosition();
			requestAnimationFrame(resolve);
		});
	});
}

export function close () {
	opened = false;
	return new Promise(resolve => requestAnimationFrame(resolve));
}


</script>
