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
import ContextMenu from '../components/context-menu';
import Datepicker from '../components/datepicker';
import Dialog from '../components/dialog';
import Drawer from '../components/drawer';
import Icon from '../components/icon';
import Input from '../components/input';
import InputMath from '../components/input-math';
import Panel from '../components/panel';
import Select from '../components/select';
import Table from '../components/table';
import Textarea from '../components/textarea';
import TextFit from '../components/text-fit';
import Toaster from '../components/toaster';
import Toggle from '../components/toggle';
import ColorPalette from '../components/color-palette';

const components = {
	Autocomplete,
	Button,
	ContextMenu,
	Datepicker,
	Dialog,
	Drawer,
	Icon,
	Input,
	InputMath,
	Panel,
	Select,
	Table,
	Textarea,
	TextFit,
	Toaster,
	Toggle,
	ColorPalette,
};
let active = location.hash.substr(1) || Object.keys(components)[0];
export let component = components[active];
</script>
