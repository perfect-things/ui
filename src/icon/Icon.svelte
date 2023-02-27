{@html svg}

<script>
import { icons } from './icons';
export let name = '';
$:svg = icons[name] || '<svg width="20" height="20"></svg>';
</script>
