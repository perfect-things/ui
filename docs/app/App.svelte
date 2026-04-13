<Nav bind:component={component} />

<ThemeSwitcher round class="docs-theme-switcher" />

<main class={pageName}>
	<SvelteComponent/>
</main>
<NotificationCenter />

<script>
import { Nav } from '../nav';
import './App.css';
import { ThemeSwitcher } from '../../src/theme-switcher';
import { NotificationCenter } from '../../src/notification-center';

let component = $state();
const pageName = $derived((component?.name ?? '').toLowerCase());

const SvelteComponent = $derived(component);
</script>
