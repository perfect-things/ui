<ButtonToggle round
	class="dark-mode-switch"
	title="Dark mode toggle"
	items={themes}
	value={UI.PREFERS_DARK}
	onchange={switchColorMode}/>



<script>
import './Header.css';
import { onMount } from 'svelte';
import { ButtonToggle, UI } from '../../src';

const themes = [
	{ value: false, icon: 'sun' },
	{ value: true, icon: 'moon' },
];


onMount(() => {
	switchColorMode(null, UI.PREFERS_DARK);
});


function switchColorMode (e, val) {
	document.documentElement.classList.remove('theme-dark', 'theme-light');
	document.documentElement.classList.add(val ? 'theme-dark' : 'theme-light');
}


</script>
