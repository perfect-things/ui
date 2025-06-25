<ButtonToggle round
	class="dark-mode-switch"
	title="Dark mode toggle"
	items={themes}
	value={UI.PREFERS_DARK}
	onchange={switchColorMode}/>



<script>
import { onMount } from 'svelte';
import { ButtonToggle } from '../../src';
import { UI } from '../../src/utils/index';
import './Header.css';

const themes = [
	{ value: false, icon: 'sun' },
	{ value: true, icon: 'moon' },
];


onMount(() => {
	switchColorMode(null, UI.PREFERS_DARK);
});


function switchColorMode (e, val) {
	document.documentElement.className = val ? 'theme-dark' : 'theme-light';
}


</script>
