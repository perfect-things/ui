<UIButton text round
	icon="sidebarLeft"
	class="nav-toggler {expanded ? 'expanded' : ''} {swiping ? 'swiping' : ''}"
	bind:element="{navTogglerBtn}"
	on:click="{toggleNav}"/>

<aside class:expanded class:swiping bind:this="{sidebarEl}">
	<menu>
		<h3>Intro</h3>
		<NavItem name="Get Started" {active} />
		<NavItem name="Changelog" {active} />

		<h3>Buttons</h3>
		<NavItem name="Button" {active} />
		<NavItem name="Push Button" {active} />
		<NavItem name="Button Group" {active} />

		<h3>Inputs</h3>
		<NavItem name="Button Toggle" {active} />
		<NavItem name="Checkbox" {active} />
		<NavItem name="Combobox" {active} />
		<NavItem name="Input Date" {active} />
		<NavItem name="Input Text" {active} />
		<NavItem name="Input Number" {active} />
		<NavItem name="Input Math" {active} />
		<NavItem name="Input Password" {active} />
		<NavItem name="Input Search" {active} />
		<NavItem name="Radio" {active} />
		<NavItem name="Select" {active} />
		<NavItem name="Textarea" {active} />
		<NavItem name="Toggle" {active} />


		<h3>Messaging</h3>
		<NavItem name="InfoBar" {active} />
		<NavItem name="Notification Center" {active} />
		<NavItem name="MessageBox" {active} />
		<NavItem name="Tooltip" {active} />


		<h3>Containers</h3>
		<NavItem name="Dialog" {active} />
		<NavItem name="Drawer" {active} />
		<NavItem name="Panel" {active} />
		<NavItem name="Table" {active} />
		<NavItem name="Tree" {active} />


		<h3>Generic</h3>
		<NavItem name="Menu" {active} />
		<NavItem name="Icon" {active} />
		<!-- <NavItem name="Splitter" {active} /> -->
		<NavItem name="Color Palette" {active} />
	</menu>

</aside>

<svelte:window on:hashchange="{onhashchange}" on:popstate="{onpopstate}" />

<script>
import { onMount } from 'svelte';
import { Button as UIButton, isInScrollable } from '../../src';
import VanillaSwipe from 'vanilla-swipe';
import NavItem from './NavItem.svelte';
import GetStarted from '../pages/start.svelte';
import Changelog from '../pages/changelog.svelte';
import * as TestComponents from '../components';

const components = { GetStarted, Changelog, ...TestComponents, };

let active = location.hash.substr(1) || 'GetStarted';
export let component = components[active];

const SIDEBAR_WIDTH = 220;
let expanded = false;
let wasExpanded = false;
let swiping = false;
const swipeSlowDownFactor = 2.5;
let sidebarEl, navTogglerBtn;


onMount(() => {
	const swiper = new VanillaSwipe({
		element: document.body,
		delta: 3,
		mouseTrackingEnabled: true,
		preventTrackingOnMouseleave: true,
		onSwipeStart: onSwipeStart,
		onSwiping: onSwipe,
		onSwiped: onSwipeEnd,
		onTap: onTap,
	});
	swiper.init();
});

function onSwipeStart (e) {
	if (window.innerWidth > 700) return;

	if (isInScrollable(e.target)) return false;
	const untouchables = 'input, button, .toggle, .dialog-backdrop, [aria-haspopup="true"]';
	if (e.target.closest(untouchables)) return;


	wasExpanded = expanded;
	swiping = true;
}

function onSwipe (e, data) {
	if (window.innerWidth > 700) return;
	if (!swiping) return;

	if (Math.abs(data.deltaY) > Math.abs(data.deltaX)) {
		sidebarEl.style.transform = '';
		navTogglerBtn.style.transform = '';
		return;
	}

	e.preventDefault();

	let sidebarX = 0;

	if (wasExpanded) {
		sidebarX = 0;
		if (data.deltaX > 0) sidebarX += data.deltaX * Math.exp(-swipeSlowDownFactor);
		else sidebarX += data.deltaX;

	}
	else {
		sidebarX = -SIDEBAR_WIDTH;
		if (data.deltaX > 0) {
			if (data.deltaX < SIDEBAR_WIDTH) sidebarX += data.deltaX;
			else sidebarX = (sidebarX + data.deltaX) * Math.exp(-swipeSlowDownFactor);
		}
	}
	sidebarEl.style.transform = `translateX(${sidebarX}px)`;

	let btnX = sidebarX + 180;
	btnX = Math.max(10, btnX);
	navTogglerBtn.style.transform = `translateX(${btnX}px)`;
}


function onSwipeEnd (e, data) {
	if (window.innerWidth > 700) return;
	if (!swiping) return;
	swiping = false;

	if (Math.abs(data.deltaY) > Math.abs(data.deltaX)) {
		sidebarEl.style.transform = '';
		navTogglerBtn.style.transform = '';
		expanded = wasExpanded;
		return;
	}
	if (data.directionX === 'LEFT' && !wasExpanded) {
		sidebarEl.style.transform = '';
		navTogglerBtn.style.transform = '';
		expanded = wasExpanded;
		return;
	}
	if (data.directionX === 'RIGHT' && wasExpanded) {
		sidebarEl.style.transform = '';
		navTogglerBtn.style.transform = '';
		expanded = wasExpanded;
		return;
	}

	const delta = Math.abs(data.deltaX) + data.velocity * 50;
	const half = SIDEBAR_WIDTH / 2;
	if (delta > half) expanded = !wasExpanded;

	wasExpanded = expanded;
	sidebarEl.style.transform = '';
	navTogglerBtn.style.transform = '';
	requestAnimationFrame(() => document.body.focus());
}

function onTap (e) {
	if (window.innerWidth > 700) return;
	if (e.target.closest('aside,.nav-toggler')) return;
	if (wasExpanded) expanded = false;
	wasExpanded = expanded;
}


function onhashchange () {
	active = location.hash.substr(1);
	component = components[active];
	if (window.Prism) requestAnimationFrame(() => window.Prism.highlightAll());
	document.documentElement.scrollTop = 0;
}


function toggleNav () {
	expanded = !expanded;
	wasExpanded = expanded;
}

function onpopstate () {
	expanded = false;
	wasExpanded = expanded;
}



</script>
