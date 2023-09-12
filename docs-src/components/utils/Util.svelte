<div class="utility">
	<h3 {id}><a href="#Utils/{id}">{name}</a></h3>

	<slot/>

	{#if api}
		<API props="{api}" title="Config object schema"/>
	{/if}

	{#if example}
		<CodeExample nohr html="{example}" />
	{/if}
</div>

<script>
import { CodeExample } from '../../code-example';
import { API } from '../../api-table';

export let id = '';
export let name = '';
export let example = undefined;
export let api = undefined;

</script>
