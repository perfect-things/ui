<div
	class={[
		'toggle',
		className,
		{
			'label-on-the-left': labelOnTheLeft,
			'has-error': !!error
		}
	]}
	role="switch"
	aria-checked={value}
	tabindex={disabled ? undefined : 0}
	bind:this={element}
	{onkeydown}
	ontouchstart={dragStart}
	onmousedown={dragStart}
	oncontextmenu={e => e.preventDefault()}
	onclick={e => e.preventDefault()}>

	<Label {label} {disabled} for={_id}/>

	<Info msg={info} />
	<InputError id={errorMessageId} msg={error} animOpacity={true}/>

	<div class="toggle-inner">
		<label class="toggle-label" {title}>
			<div class="toggle-scroller" bind:this={scroller}>
				<div class="toggle-option"></div>
				<div class="toggle-handle" bind:this={handle}><div class="toggle-knob"></div></div>
				<div class="toggle-option"></div>
				<input
					id={_id}
					type="checkbox"
					class="toggle-input"
					{disabled}
					{name}
					aria-invalid={!!error}
					aria-errormessage={error ? errorMessageId : undefined}
					aria-required={required}
					bind:this={inputElement}
					bind:checked={value}>
			</div>
		</label>
	</div>
</div>

<script lang="ts">
import './Toggle.css';
import type { InputProps } from '../types';
import { guid, getMouseX } from '../../utils';
import { isTouchDevice, initialMeasure } from './utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';

let {
	class: className = '',
	id = '',
	name = guid(),
	title = '',
	required = undefined,
	disabled = false,
	label = '',
	error = undefined,
	info = undefined,
	value = $bindable(false),
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	onchange = () => {},
}: InputProps = $props();

const _id: string = $derived(id || name || guid());

const errorMessageId: string = guid();
let scroller = $state<HTMLDivElement>();
let handle = $state<HTMLDivElement>();
let startX = $state<number>();
let currentX = $state<number>(0);
let scrollerStartX = $state<number>();
let scrollerEndX = $state<number>();
let handleStartX = $state<number>();
let isClick = $state<boolean>(false);
let isDragging = $state<boolean>(false);
let oldValue = $state<boolean>();

$effect(() => {
	if (element) {
		toggleTransitions(false);
		({ scrollerStartX, scrollerEndX, handleStartX } = initialMeasure(element));
	}
});

$effect(() => {
	if (typeof value !== 'boolean') value = !!value;
	setValue(undefined, value);
});



function setValue (e: Event, v = false, force = false) {
	if (typeof v !== 'boolean') v = !!v;
	if (v !== value) {
		value = v;
	}
	else {
		if (value === oldValue && !force) return;
		startX = currentX = value ? scrollerEndX : scrollerStartX;
		oldValue = value;
		setKnobPosition();
	}
	onchange(e, value);
}


function onkeydown (e) {
	toggleTransitions(true);
	if (e.key === 'Enter' || e.key === ' ') {
		e.preventDefault();
		setValue(e, !value);
	}
}


function dragStart (e) {
	const target = e.target;
	if (!target.closest('.toggle-inner, .toggle>label')) return;

	// prevent double call
	if (isTouchDevice && e.type !== 'touchstart') return;

	if (e.type === 'touchstart') {
		document.addEventListener('touchend', dragEnd);
		document.addEventListener('touchmove', drag, { passive: false });
	}
	else {
		document.addEventListener('mouseup', dragEnd);
		document.addEventListener('mousemove', drag, { passive: false });
	}
	toggleTransitions(false);
	startX = getMouseX(e) - currentX;
	isDragging = true;
	isClick = true;
}


function dragEnd (e: Event) {
	document.removeEventListener('mouseup', dragEnd);
	document.removeEventListener('mousemove', drag);
	document.removeEventListener('touchend', dragEnd);
	document.removeEventListener('touchmove', drag);
	toggleTransitions(true);
	isDragging = false;
	if (isClick) setValue(e, !value);
	else {
		// drag-end left knob at over 50% of the toggle width
		setValue(e, currentX - scrollerStartX >= (scrollerEndX - scrollerStartX) / 2, true);
	}
}


function drag (e) {
	if (!isDragging) return;
	isClick = false;
	e.preventDefault();
	currentX = (getMouseX(e) - startX) - scrollerEndX;
	setKnobPosition();
}


function toggleTransitions (enable) {
	handle.style.transition = enable ? '' : 'none';
	scroller.style.transition = enable ? '' : 'none';
}

function setKnobPosition () {
	if (currentX < scrollerStartX) currentX = scrollerStartX;
	if (currentX > scrollerEndX) currentX = scrollerEndX;
	scroller.style.marginLeft = Math.round(currentX) + 'px';

	let handleLeft = handleStartX;
	if (isDragging || value) handleLeft -= scrollerStartX;
	if (isDragging) handleLeft += currentX;
	handle.style.left = `${Math.round(handleLeft - 1)}px`;
}

</script>
