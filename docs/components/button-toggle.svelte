<h2>Button Toggle</h2>

<h3>Normal</h3>
<ButtonToggle items="{buttons}" value="1" />

<h3>Fit width</h3>
<div class="button-toggle-wrapper-wide">
	<ButtonToggle items="{buttons}" value="1" />
</div>

<br><br>

<h4>Disabled</h4>
<ButtonToggle disabled items="{buttons}"/><br><br>

<h4>Round</h4>
<ButtonToggle round items="{buttons}" value="2" /><br><br>

<h4>With icon</h4>
<ButtonToggle items="{items}" value="3" /><br><br>

<h3>Icon only buttons</h3>
<ButtonToggle items="{icons}" value="1" /><br><br>


<h3>Icon only, and round</h3>
<ButtonToggle round items="{icons}" value="2" /><br><br>

<script>
import { ButtonToggle } from '../../src';

const buttons = [
	{ name: 'One', value: '1' },
	{ name: 'Two', value: '2' },
	{ name: 'Three', value: '3' },
];

const items = [
	{ name: 'One',   icon: 'info',  value: '1' },
	{ name: 'Two and some long text',   icon: 'check', value: '2' },
	{ name: 'Three', icon: 'alert', value: '3' },
];

const icons = [
	{ icon: 'info', value: '1' },
	{ icon: 'check', value: '2' },
	{ icon: 'alert', value: '3' },
];
</script>
