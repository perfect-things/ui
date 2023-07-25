<UIButton text
	icon="meatballs"
	class="nav-toggler {navMobileShow ? 'visible' : ''}"
	on:click="{toggleNav}"/>

<aside class:mobile-show="{navMobileShow}">
	<div class="nav-toolbar">
		<div class="nav-toolbar-row">
			<ThemeToggle round
				class="dark-mode-switch"
				title="Dark mode toggle"
				items="{themes}"
				value="{$PREFERS_DARK}"
				on:change="{switchColorMode}"/>
		</div>
	</div>

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

<svelte:window on:hashchange="{onhashchange}" />
<script>
import { Button as UIButton, ButtonToggle as ThemeToggle } from '../../src';
import NavItem from './NavItem.svelte';
import GetStarted from '../pages/start.svelte';
import Changelog from '../pages/changelog.svelte';
import { PREFERS_DARK } from '../../src/utils';
import * as TestComponents from '../components';


const components = { GetStarted, Changelog, ...TestComponents, };
const themes = [
	{ value: false, icon: 'sun' },
	{ value: true, icon: 'moon' },
];

let active = location.hash.substr(1) || 'GetStarted';
export let component = components[active];
let navMobileShow = false;


function onhashchange () {
	active = location.hash.substr(1);
	component = components[active];
	if (window.Prism) requestAnimationFrame(() => window.Prism.highlightAll());
	document.querySelector('main').scrollTop = 0;
}

function switchColorMode (e) {
	console.log(111, e.detail, typeof e.detail);
	document.documentElement.className = e.detail ? 'theme-dark' : 'theme-light';
}


function toggleNav () {
	navMobileShow = !navMobileShow;
}


window.addEventListener('popstate', () => navMobileShow = false);

</script>
