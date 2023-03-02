<UIButton icon="meatballs" text class="nav-toggler {navMobileShow ? 'visible' : ''}" on:click="{toggleNav}"></UIButton>

<aside class:mobile-show="{navMobileShow}">
	<menu>
		<div class="nav-toolbar">
			<span>Dark mode:</span>
			<ActualToggle value="true" on:change="{switchColorMode}"/>
		</div>

		<h3>Intro</h3>
		<NavItem name="Get Started" {active} />

		<h3>Form Controls</h3>
		<NavItem name="Autocomplete" {active} />
		<NavItem name="Button" {active} />
		<NavItem name="Push Button" {active} />
		<NavItem name="Button Group" {active} />
		<NavItem name="Button Toggle" {active} />
		<NavItem name="Checkbox" {active} />
		<NavItem name="Datepicker" {active} />
		<NavItem name="Input" {active} />
		<NavItem name="Input Math" {active} />
		<NavItem name="Password" hash="InputPassword" {active} />
		<NavItem name="Select" {active} />
		<NavItem name="Textarea" {active} />
		<NavItem name="Toggle" {active} />

		<h3>Containers</h3>
		<NavItem name="Dialog" {active} />
		<NavItem name="Drawer" {active} />
		<NavItem name="Menu" {active} />
		<NavItem name="Panel" {active} />
		<NavItem name="Splitter" {active} />
		<NavItem name="Table" {active} />
		<NavItem name="Tree" {active} />

		<h3>Generic</h3>
		<NavItem name="Icon" {active} />
		<NavItem name="TextFit" {active} />
		<NavItem name="Toaster" {active} />
		<NavItem name="Tooltip" {active} />
		<NavItem name="Color Palette" {active} />
	</menu>
</aside>

<svelte:window on:hashchange="{onhashchange}" />
<script>
import { Button as UIButton, Toggle as ActualToggle } from '../../src';
import NavItem from './NavItem.svelte';
import GetStarted from '../pages/start.svelte';

import Button from '../components/button.svelte';
import ButtonGroup from '../components/button-group.svelte';
import ButtonToggle from '../components/button-toggle.svelte';
import PushButton from '../components/push-button.svelte';
import Menu from '../components/menu.svelte';
import Icon from '../components/icon.svelte';
import TextFit from '../components/text-fit.svelte';
import Toaster from '../components/toaster.svelte';
import ColorPalette from '../components/color-palette.svelte';

import Autocomplete from '../components/autocomplete.svelte';
import Datepicker from '../components/datepicker.svelte';
import Checkbox from '../components/checkbox.svelte';
import Input from '../components/input.svelte';
import InputMath from '../components/input-math.svelte';
import InputPassword from '../components/input-password.svelte';
import Select from '../components/select.svelte';
import Textarea from '../components/textarea.svelte';
import Toggle from '../components/toggle.svelte';
import Tooltip from '../components/tooltip.svelte';

import Dialog from '../components/dialog.svelte';
import Drawer from '../components/drawer.svelte';
import Panel from '../components/panel.svelte';
import Splitter from '../components/splitter.svelte';
import Table from '../components/table.svelte';
import Tree from '../components/tree.svelte';

const components = {
	GetStarted,
	Autocomplete,
	Button,
	ButtonGroup,
	ButtonToggle,
	ColorPalette,
	Datepicker,
	Checkbox,
	Dialog,
	Drawer,
	Icon,
	Input,
	InputMath,
	InputPassword,
	Menu,
	Panel,
	PushButton,
	Select,
	Splitter,
	Table,
	Textarea,
	TextFit,
	Toaster,
	Toggle,
	Tooltip,
	Tree,
};

let active = location.hash.substr(1) || 'GetStarted';
export let component = components[active];
let navMobileShow = false;


function onhashchange () {
	active = location.hash.substr(1);
	component = components[active];
	if (window.Prism) requestAnimationFrame(() => window.Prism.highlightAll());
}

function switchColorMode (e) {
	document.documentElement.className = e.detail ? 'theme-dark' : 'theme-light';
}


function toggleNav () {
	navMobileShow = !navMobileShow;
}

window.addEventListener('popstate', () => navMobileShow = false);

</script>
