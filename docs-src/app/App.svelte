<Nav bind:component={component} />
<main class={pageName}>
	<Header />
	<SvelteComponent/>
</main>

<script>
import { Nav } from '../nav';
import { Header } from '../header';
import './App.css';

let component = $state();
const pageName = $derived((component?.name ?? '').toLowerCase());

const SvelteComponent = $derived(component);
</script>
