<li>
	{#if item.items}
		<Folder level="{level + 1}" item="{item}"/>
	{:else}
		<File level="{level + 1}" item="{item}"/>
	{/if}
</li>



<script>
import Folder from './tree-folder';
import File from './tree-file';

export let item = {};
export let level = 0;

</script>
