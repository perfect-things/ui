<nav>
	<h3>Form Controls</h3>
	<NavItem name="Autocomplete" {active} />
	<NavItem name="Button" {active} />
	<NavItem name="Datepicker" {active} />
	<NavItem name="Input" {active} />
	<NavItem name="Input Math" {active} />
	<NavItem name="Password" hash="InputPassword" {active} />
	<NavItem name="Select" {active} />
	<NavItem name="Textarea" {active} />
	<NavItem name="Toggle" {active} />

	<h3>Containers</h3>
	<NavItem name="Drawer" {active} />
	<NavItem name="Panel" {active} />
	<NavItem name="Dialog" {active} />
	<NavItem name="Table" {active} />

	<h3>Generic</h3>
	<NavItem name="Context Menu" {active} />
	<NavItem name="Icon" {active} />
	<NavItem name="TextFit" {active} />
	<NavItem name="Toaster" {active} />
	<NavItem name="Color Palette" {active} />
</nav>

<svelte:window on:hashchange="{onhashchange}" />
<script>
import NavItem from './nav-item';

import Button from '../components/button';
import ContextMenu from '../components/context-menu';
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

import Drawer from '../components/drawer';
import Panel from '../components/panel';
import Dialog from '../components/dialog';
import Table from '../components/table';

const components = {
	Button,
	ContextMenu,
	Icon,
	TextFit,
	Toaster,
	ColorPalette,
	Autocomplete,
	Datepicker,
	Input,
	InputMath,
	InputPassword,
	Select,
	Textarea,
	Toggle,
	Drawer,
	Panel,
	Dialog,
	Table,
};

let active = location.hash.substr(1) || 'Button';
export let component = components[active];

function onhashchange () {
	active = location.hash.substr(1);
	component = components[active];
}
</script>
