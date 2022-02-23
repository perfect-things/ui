<style>
nav {
	width: 100%;
	display: flex;
	flex-flow: column;
	margin-top: 20px;
}

nav a {
	color: var(--ui-color-text);
	text-decoration: none;
	display: block;
	margin: 0 -10px;
	padding: 0.7em 1.2em;
	border-radius: 20px;
}
nav a:hover { background-color: var(--ui-color-background); }
nav a.active { background-color: var(--ui-color-highlight); }
</style>

<nav>
	{#each Object.entries(components) as [name, item]}
		<a
			class:active="{active === name}"
			on:click="{() => component = item}"
			href="#{name}">{name}</a>
	{/each}
</nav>
<svelte:window on:hashchange="{() => active = location.hash.substr(1) }" />
<script>
import ColorPalette from '../components/color-palette';
import Autocomplete from '../components/autocomplete';
import Button from '../components/button';
import ContextMenu from '../components/context-menu';
import Datepicker from '../components/datepicker';
import Dialog from '../components/dialog';
import Drawer from '../components/drawer';
import Icon from '../components/icon';
import Input from '../components/input';
import Panel from '../components/panel';
import Select from '../components/select';
import Table from '../components/table';
import Textarea from '../components/textarea';
import TextFit from '../components/text-fit';
import Toaster from '../components/toaster';
import Toggle from '../components/toggle';

const components = {
	Autocomplete,
	Button,
	ContextMenu,
	Dialog,
	Datepicker,
	Drawer,
	Icon,
	Input,
	Panel,
	Select,
	Table,
	Textarea,
	TextFit,
	Toaster,
	Toggle,
	ColorPalette,
};
let active = location.hash.substr(1) || 'Button';
export let component = components[active];
</script>
