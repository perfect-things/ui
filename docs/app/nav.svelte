<nav>
	<h3>Form Controls</h3>
	<NavItem name="Autocomplete" {active} />
	<NavItem name="Button" {active} />
	<NavItem name="Button Toggle" {active} />
	<NavItem name="Push Button" {active} />
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
	<NavItem name="Color Palette" {active} />
</nav>

<svelte:window on:hashchange="{onhashchange}" />
<script>
import NavItem from './nav-item';

import Button from '../components/button';
import ButtonToggle from '../components/button-toggle';
import PushButton from '../components/push-button';
import Menu from '../components/menu';
import Icon from '../components/icon';
import TextFit from '../components/text-fit';
import Toaster from '../components/toaster';
import ColorPalette from '../components/color-palette';

import Autocomplete from '../components/autocomplete';
import Datepicker from '../components/datepicker';
import Input from '../components/input';
import InputMath from '../components/input-math';
import InputPassword from '../components/input-password';
import Select from '../components/select';
import Textarea from '../components/textarea';
import Toggle from '../components/toggle';

import Dialog from '../components/dialog';
import Drawer from '../components/drawer';
import Panel from '../components/panel';
import Splitter from '../components/splitter';
import Table from '../components/table';
import Tree from '../components/tree';

const components = {
	Autocomplete,
	Button,
	ButtonToggle,
	ColorPalette,
	Datepicker,
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
	Tree,
};

let active = location.hash.substr(1) || 'Button';
export let component = components[active];

function onhashchange () {
	active = location.hash.substr(1);
	component = components[active];
}
</script>
