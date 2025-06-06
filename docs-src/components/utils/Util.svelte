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

<script>
import { CodeExample } from '../../code-example';
import { API } from '../../api-table';

	/**
	 * @typedef {Object} Props
	 * @property {string} [id]
	 * @property {string} [name]
	 * @property {any} [example]
	 * @property {any} [api]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	const {
		id = '',
		name = '',
		example = undefined,
		api = undefined,
		children
	} = $props();

</script>
