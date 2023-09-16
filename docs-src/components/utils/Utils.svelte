<div class="sticky-block utilities-nav">
	<h3>Utility properties</h3>
	<ul>
		{#each props as item}
			<li><a href="#Utils/{item}">{item}</a>
		{/each}
	</ul>

	<h3>Utility Functions</h3>
	<ul>
		{#each fns as item}
			<li><a href="#Utils/{item}">{item}</a>
		{/each}
	</ul>
</div>

<div class="sticky-block" id="top">
	<h2>Utility properties</h2>
	{#each props as item}
		<svelte:component this="{Properties[item]}" /><br>
	{/each}
	<p>
		<em>*</em> <a href="https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values">
		svelte store variables</a> - when reading the value, add <em>$</em> to the name, e.g.
		<em>$ANIMATION_SPEED</em>.
	</p>
</div>

<div class="sticky-block">
	<h2>Utility Functions</h2>
	{#each fns as item}
		<svelte:component this="{Functions[item]}" /><br>
	{/each}
</div>



<script>
import * as Functions from './functions';
import * as Properties from './properties';

const props = Object.keys(Properties);
const fns = Object.keys(Functions);
</script>
