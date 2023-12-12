{@html svg}

<script>
import { getIcon } from './icons.js';
export let name = '';

$:svg = getIcon(name);
</script>
