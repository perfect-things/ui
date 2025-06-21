<ButtonToggle round
	class="dark-mode-switch"
	title="Dark mode toggle"
	items={themes}
	value={$PREFERS_DARK}
	onchange={switchColorMode}/>



<script>
import { ButtonToggle } from '../../src';
import { PREFERS_DARK } from '../../src/utils';
import './Header.css';

const themes = [
	{ name: 'light', value: false, icon: 'sun' },
	{ name: 'dark', value: true, icon: 'moon' },
];


function switchColorMode (val) {
	document.documentElement.className = val ? 'theme-dark' : 'theme-light';
}


</script>
