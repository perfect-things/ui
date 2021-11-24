<style>
nav {
	width: 100%;
	display: flex;
	flex-flow: column;
	margin-top: 20px;
}

nav a {
	color: var(--color-text);
	text-decoration: none;
	display: block;
	margin: 0 -10px;
	padding: 10px 20px;
	border-radius: 20px;
}
nav a:hover { background-color: var(--color-background); }
nav a.active { background-color: var(--color-highlight); }
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
import Autocomplete from '../components/autocomplete';
import Button from '../components/button';
import Input from '../components/input';
import Dialog from '../components/dialog';
import Drawer from '../components/drawer';
import Icon from '../components/icon';
import Select from '../components/select';
import TextFit from '../components/text-fit';
import Toaster from '../components/toaster';
import Table from '../components/table';
import Toggle from '../components/toggle';
import ContextMenu from '../components/context-menu';

const components = {
	Autocomplete,
	Button,
	ContextMenu,
	Dialog,
	Drawer,
	Icon,
	Input,
	Select,
	Table,
	TextFit,
	Toaster,
	Toggle,
};
let active = location.hash.substr(1) || 'Button';
export let component = components[active];
</script>
