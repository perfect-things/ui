<Nav bind:component="{component}" />
<main>
	<Header />
	<svelte:component this="{component}"/>
</main>

<script>
import { Nav } from '../nav';
import { Header } from '../header';


let component = undefined;

</script>
