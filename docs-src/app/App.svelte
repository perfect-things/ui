<Nav bind:component="{component}" />
<main>
	<svelte:component this="{component}"/>
</main>

<script>
import { Nav } from '../nav';


let component = undefined;

</script>
