<UIButton text round class="nav-toggler" icon={ICON.SIDEBARLEFT} onclick={toggleNav}/>

<aside>
	<menu>
		<h3>Intro</h3>
		<NavItem name="Get Started" {active} />
		<NavItem name="Changelog" {active} />

		<h3>Buttons</h3>
		<NavItem name="Button" {active} />
		<NavItem name="Button Group" {active} />
		<NavItem name="Push Button" {active} />

		<h3>Inputs</h3>
		<NavItem name="Button Toggle" {active} />
		<NavItem name="Checkbox" {active} />
		<NavItem name="Combobox" {active} />
		<NavItem name="Input Date" {active} />
		<NavItem name="Input Math" {active} />
		<NavItem name="Input Number" {active} />
		<NavItem name="Input Password" {active} />
		<NavItem name="Input Rating" {active} />
		<NavItem name="Input Search" {active} />
		<NavItem name="Input Tag" {active} />
		<NavItem name="Input Text" {active} />
		<NavItem name="Input Time" {active} />
		<NavItem name="Radio" {active} />
		<NavItem name="Range" {active} />
		<NavItem name="Select" {active} />
		<NavItem name="Textarea" {active} />
		<NavItem name="Toggle" {active} />


		<h3>Messaging</h3>
		<NavItem name="InfoBar" {active} />
		<NavItem name="MessageBox" {active} />
		<NavItem name="Notification Center" {active} />
		<NavItem name="Tooltip" {active} />


		<h3>Containers</h3>
		<NavItem name="Dialog" {active} />
		<NavItem name="Drawer" {active} />
		<NavItem name="Grid" {active} />
		<NavItem name="Panel" {active} />
		<NavItem name="Popover" {active} />
		<NavItem name="Table" {active} />
		<NavItem name="Tree" {active} />


		<h3>Generic</h3>
		<NavItem name="Color Palette" {active} />
		<NavItem name="Icon" {active} />
		<NavItem name="Menu" {active} />
		<NavItem name="Splitter" {active} />
		<NavItem name="Tag" {active} />
		<NavItem name="ThemeSwitcher" {active} />
		<NavItem name="Utils" {active} />
	</menu>
</aside>

<UIButton round info
	icon={ICON.ARROWUP}
	class="btn-scroll-top {showScrollTopBtn ? '' : 'hidden'}"
	title="Scroll to the top"
	onclick={scrollToTop} />

<svelte:window {onhashchange} />

<script>
import './Nav.css';
import { onDestroy, onMount } from 'svelte';
import { debounce } from 'es-toolkit';
import { Button as UIButton, ICON } from '../../src';
import NavItem from './NavItem.svelte';
import GetStarted from '../pages/start.svelte';
import Changelog from '../pages/changelog.svelte';
import ChangelogArchive from '../pages/changelog-archive.svelte';
import * as TestComponents from '../components';


const components = { GetStarted, Changelog, ChangelogArchive, ...TestComponents, };
const onScroll = debounce(checkScrollOffset, 300);


let { component = $bindable() } = $props();

let [active, heading] = $state(getSection());
let showScrollTopBtn = $state(false);
let expanded = $state(true);


$effect(() => {
	component = components[active] || components[component] || GetStarted;
});

$effect(() => {
	waitForElementAndScroll(heading);
});


onMount(() => {
	[active, heading] = getSection();
	window.addEventListener('scroll', onScroll);
	document.body.classList.toggle('sidebar-expanded', expanded);
});


onDestroy(() => {
	window.removeEventListener('scroll', onScroll);
});



function toggleNav () {
	expanded = !expanded;
	document.body.classList.toggle('sidebar-expanded', expanded);
}


function scrollToTop () {
	document.scrollingElement.scrollTo({ top: 0, behavior: 'smooth' });
	setTimeout(() => {
		let section = location.hash.substring(1);
		if (section.includes('/')) section = section.substr(0, section.indexOf('/'));
		location.hash = section;
	}, 300);
}


function waitForElementAndScroll (selector, count = 10) {
	if (count === 0) return;
	const el = document.getElementById(selector);
	if (!el) return setTimeout(() => waitForElementAndScroll(selector, count - 1), 200);
	el.scrollIntoView({ behavior: 'smooth' });
}


function getSection () {
	let [_section, _heading] = location.hash.substring(1).split('/');
	_section = _section || 'GetStarted';
	_heading = _heading || 'top';

	const sectionClasses = Array.from(document.body.classList).filter(c => c.startsWith('section-'));
	document.body.classList.remove(...sectionClasses);
	document.body.classList.add('section-' + _section.toLocaleLowerCase());

	return [_section, _heading];
}


function onhashchange () {
	const [newActive, newHeading] = getSection();
	if (newActive !== active) {
		document.scrollingElement.scrollTop = 0;
		active = newActive;
	}
	heading = newHeading;
	component = components[active];
}


function checkScrollOffset () {
	showScrollTopBtn = document.scrollingElement.scrollTop > 200;
}

</script>
