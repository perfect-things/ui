<aside>
	<h2>Components</h2>
	<Nav bind:component="{component}" />
</aside>
<main>
	<svelte:component this="{component}"/>
</main>

<script>
import Nav from './nav';


let component = undefined;

</script>
