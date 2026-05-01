<Nav bind:component={component} />

<ThemeSwitcher round class="docs-theme-switcher" />

<main class={pageName}>
	<SvelteComponent/>
</main>
<NotificationCenter />

<script>
import { Nav } from '../nav';
import './App.css';
import { onMount } from 'svelte';
import { NotificationCenter, ThemeSwitcher, UI } from '../../src';

let component = $state();
const pageName = $derived((component?.name ?? '').toLowerCase());

const SvelteComponent = $derived(component);

onMount(() => {
	UI.init();
});
</script>
