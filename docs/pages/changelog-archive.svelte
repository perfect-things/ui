<style>
	h1 { display: flex; align-items: center; gap: 0.5rem; margin-left: -3rem; }
</style>
<h1>
	<a class="button button-text round info" href="#Changelog">
		<Icon name="chevronLeft" />
	</a>
	Changelog Archive
</h1>
{@html changelog}

<script>
import { Icon } from '../../src';

// @ts-ignore
import changelog from './changelog-archive.html?raw';

</script>
