<Nav bind:component="{component}" />
<main class="{pageName}">
	<Header />
	<svelte:component this="{component}"/>
</main>

<script>
import { Nav } from '../nav';
import { Header } from '../header';


let component = undefined;


$:pageName = (component && component.name || '').toLowerCase();
</script>
