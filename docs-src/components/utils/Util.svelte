<div class="utility">
	<h3 {id}><a href="#Utils/{id}">{name}</a></h3>

	{@render children?.()}

	{#if api}
		<API props={api} title="Config object schema"/>
	{/if}

	{#if example}
		<CodeExample nohr html={example} />
	{/if}
</div>

<script lang="ts">
import { CodeExample } from '../../code-example';
import { API } from '../../api-table';

interface Props {
	id?: string;
	name?: string;
	example?: any;
	api?: any;
	children?: import('svelte').Snippet;
}

const {
	id = '',
	name = '',
	example = undefined,
	api = undefined,
	children
}: Props = $props();

</script>
