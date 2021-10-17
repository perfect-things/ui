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
import Button from './c-button';
import Input from './c-input';
import Autocomplete from './c-autocomplete';
import Modal from './c-modal';
import Select from './c-select';
import TextFit from './c-text-fit';
import Toaster from './c-toaster';
import Toggle from './c-toggle';

const components = {
	Button,
	Input,
	Autocomplete,
	Modal,
	Select,
	TextFit,
	Toaster,
	Toggle
};
let active = location.hash.substr(1) || 'Button';
export let component = components[active];
</script>
