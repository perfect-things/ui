{@html svg}

<script>
import { icons } from './icons.svelte';
export let name = '';
$:svg = icons[name] || `<svg width="20" height="20" title="${name}"></svg>`;
</script>
