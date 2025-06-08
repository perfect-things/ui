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
	{ value: false, icon: 'sun' },
	{ value: true, icon: 'moon' },
];


function switchColorMode (e) {
	document.documentElement.className = e.detail ? 'theme-dark' : 'theme-light';
}


</script>
