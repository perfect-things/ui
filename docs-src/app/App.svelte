<Nav bind:component={component} />

<ThemeSwitcher round class="docs-theme-switcher" />

<main class={pageName}>
	<SvelteComponent/>
</main>

<script>
import { Nav } from '../nav';
import './App.css';
import { ThemeSwitcher } from '../../src/theme-switcher';

let component = $state();
const pageName = $derived((component?.name ?? '').toLowerCase());

const SvelteComponent = $derived(component);
</script>
