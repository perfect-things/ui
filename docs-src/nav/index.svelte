<UIButton icon="meatballs" text className="nav-toggler {navMobileShow ? 'visible' : ''}" on:click="{toggleNav}"></UIButton>

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
import { Button as UIButton } from '../../src';
import NavItem from './nav-item';
import ActualToggle from '../../src/toggle';
import GetStarted from '../pages/start';

import Button from '../components/button';
import ButtonGroup from '../components/button-group';
import ButtonToggle from '../components/button-toggle';
import PushButton from '../components/push-button';
import Menu from '../components/menu';
import Icon from '../components/icon';
import TextFit from '../components/text-fit';
import Toaster from '../components/toaster';
import ColorPalette from '../components/color-palette';

import Autocomplete from '../components/autocomplete';
import Datepicker from '../components/datepicker';
import Checkbox from '../components/checkbox';
import Input from '../components/input';
import InputMath from '../components/input-math';
import InputPassword from '../components/input-password';
import Select from '../components/select';
import Textarea from '../components/textarea';
import Toggle from '../components/toggle';
import Tooltip from '../components/tooltip';

import Dialog from '../components/dialog';
import Drawer from '../components/drawer';
import Panel from '../components/panel';
import Splitter from '../components/splitter';
import Table from '../components/table';
import Tree from '../components/tree';

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
}

function switchColorMode (e) {
	document.documentElement.className = e.detail ? 'theme-dark' : 'theme-light';
}


function toggleNav () {
	navMobileShow = !navMobileShow;
}

window.addEventListener('popstate', () => navMobileShow = false);

</script>
