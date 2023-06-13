{@html svg}

<script>
import { icons } from './icons.js';
export let name = '';

const aliases = {
	add: 'plus',
	report: 'reportAnalytics',
	success: 'checkCircle',
	warning: 'alert',
};

$:svg = findIcon(name);

/*eslint import/namespace: 0 */
function findIcon (_name) {
	if (_name in aliases) _name = aliases[_name];
	if (_name in icons) return icons[_name];
	return `<svg width="20" height="20" title="${_name}"></svg>`;
}
</script>
