<aside>
	<Nav bind:component="{component}" />
</aside>
<main>
	<svelte:component this="{component}"/>
</main>

<script>
import Nav from '../nav';


let component = undefined;

</script>
