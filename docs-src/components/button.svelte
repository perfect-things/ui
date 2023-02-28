<h2>Button</h2>

<div class="docs-layout">
	<div class="docs-column">
		<h3>Demo</h3>
		{#if buttonText}
			<Button {...props}>{buttonText}</Button>
		{:else}
			<Button {...props}/>
		{/if}

		<hr>
		<h3>Example instantiation</h3>
		<CodeBox tag="Button" text="{buttonText}" {props} />
	</div>
	<div class="docs-column">
		<h3>Properties</h3>
		<h4>Text</h4>
		<input bind:value="{buttonText}"/>
		<h4>Style</h4>
		<ButtonToggle items="{buttonStyles}" value="" on:change="{onStyleChange}" />
		<h4>Type</h4>
		<ButtonToggle items="{buttonTypes}" value="default" on:change="{onTypeChange}" />
		<h4>Icon</h4>
		<ButtonToggle items="{buttonIcons}" value="" on:change="{onIconChange}" />
		<h4>Round</h4>
		<Toggle bind:value="{props.round}"/>
		<h4>Disabled</h4>
		<Toggle bind:value="{props.disabled}"/>
	</div>
</div>



<hr>
<API props="{apiProps}"/>

<script>
import { Button, ButtonToggle, Toggle } from '../../src';
import API from '../api-table';
import CodeBox from '../code-example/code-box.svelte';

const apiProps = [
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying button' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying button' },
	{ name: 'submit', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> button type is set to <i>submit</i>, otherwise it\'s <i>button</i>' },
	{ name: 'disabled', description: 'Makes the button <i>disabled</i>' },
	{ name: 'round', description: 'Makes the button round' },
	{ name: 'outline', description: 'Button style: outline' },
	{ name: 'text', description: 'Button style: text' },
	{ name: 'link', description: 'Button style: link' },
	{ name: 'success', description: 'Button type: success' },
	{ name: 'warning', description: 'Button type: warning' },
	{ name: 'danger', description: 'Button type: danger' },
	{ name: 'className', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'icon', type: 'string', description: 'Adds an icon, with this name, to the button (see <a href="#Icon">icons</a> section for icon names)' },
	{ name: 'on:click', type: 'function', description: 'Triggered when the button is clicked.' }
];


const props = {};
let buttonText = 'Demo button';
const buttonStyles = [
	{ name: 'Normal', value: '' },
	{ name: 'Outline', value: 'outline' },
	{ name: 'Text', value: 'text' },
	{ name: 'Link', value: 'link' },
];

const buttonTypes = [
	{ name: 'Default', value: 'default' },
	{ name: 'Success', value: 'success' },
	{ name: 'Warning', value: 'warning' },
	{ name: 'Danger', value: 'danger' },
];

const buttonIcons = [
	{ name: 'none', value: '' },
	{ name: 'info', value: 'info' },
	{ name: 'check', value: 'check' },
	{ name: 'alert', value: 'alert' },
	{ name: 'trash', value: 'trash' },
];



function onStyleChange (e) {
	props.outline = false;
	props.text = false;
	props.link = false;
	setProp(e.detail, true);
}

function onTypeChange (e) {
	props.default = false;
	props.success = false;
	props.warning = false;
	props.danger = false;
	setProp(e.detail, true);
}

function onIconChange (e) {
	setProp('icon', e.detail);
}

function setProp (name, val) {
	if (!name || typeof val === 'undefined') return;
	props[name] = val;
}


</script>
