<div class="sticky-block utilities-nav">
	<h3>Utility properties</h3>
	<ul>
		{#each props as item (item)}
			<li><a href="#Utils/{item}">{item}</a></li>
		{/each}
	</ul>

	<h3>Utility Functions</h3>
	<ul>
		{#each fns as item (item)}
			<li><a href="#Utils/{item}">{item}</a></li>
		{/each}
	</ul>
</div>

<div class="sticky-block" id="top">
	<h2>Utility properties</h2>
	{#each props as item (item)}
		{@const SvelteComponent = Properties[item]}
		<SvelteComponent />
		<br>
	{/each}
</div>

<div class="sticky-block">
	<h2>Utility Functions</h2>
	{#each fns as item (item)}
		{@const SvelteComponent1 = Functions[item]}
		<SvelteComponent1 />
		<br>
	{/each}
</div>



<script>
import * as Functions from './functions';
import * as Properties from './properties';
import './Utils.css';

const props = Object.keys(Properties);
const fns = Object.keys(Functions);
</script>
