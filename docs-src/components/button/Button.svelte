<h2>Button</h2>

<h3>Live demo</h3>
<div class="docs-buttons-row" style="height: 3rem;">
	{#if buttonText}
		<Button data-one="123" {...props}>{buttonText}</Button>
	{:else}
		<Button {...props}/>
	{/if}
</div>

<CodeBox tag="Button" text={buttonText} {props} />

<hr>

<div class="button-demo-props">
	<InputText label="Text" bind:value={buttonText}/>
	<ButtonToggle label="Style" items={buttonStyles} value="" onchange={onStyleChange} />
	<ButtonToggle label="Type" items={buttonTypes} value="" onchange={onTypeChange} />
	<ButtonToggle label="Icon" items={buttonIcons} value="" onchange={onIconChange} />
	<Toggle label="Round" bind:value={props.round}/>
	<Toggle label="Disabled" bind:value={props.disabled}/>
</div>


<hr>
<API props={apiProps}/>

<script>
import { Button, ButtonToggle, Toggle, InputText } from '../../../src';
import { API } from '../../api-table';
import { CodeBox } from '../../code-example';
import './Button.css';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'danger', description: 'Button type: danger' },
	{ name: 'data-', description: 'Dataset attribute allows to pass some data of a primitive type (string, number, boolean), which will be accessible in the <em>onclick</em> event listener, via button reference.' },
	{ name: 'disabled', description: 'Makes the button <i>disabled</i>' },
	{ name: 'icon', type: 'string', description: 'Adds an icon, with this name, to the button (see <a href="#Icon">icons</a> section for icon names)' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying button' },
	{ name: 'info', description: 'Button type: info' },
	{ name: 'link', description: 'Button style: link' },
	{ name: 'outline', description: 'Button style: outline' },
	{ name: 'round', description: 'Makes the button round' },
	{ name: 'submit', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> button type is set to <i>submit</i>, otherwise it\'s <i>button</i>' },
	{ name: 'success', description: 'Button type: success' },
	{ name: 'text', description: 'Button style: text' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying button' },
	{ name: 'warning', description: 'Button type: warning' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'onclick', type: 'function', description: 'Triggered when the button is clicked.' }
];


const props = $state({
	round: false,
	disabled: false,
	outline: false,
	text: false,
	link: false,
	icon: '',
	info: false,
	success: false,
	warning: false,
	danger: false,
});

let buttonText = $state('Demo button');

const buttonStyles = [
	{ name: 'Normal', value: '' },
	{ name: 'Outline', value: 'outline' },
	{ name: 'Text', value: 'text' },
	{ name: 'Link', value: 'link' },
];

const buttonTypes = [
	{ name: 'Default', value: '' },
	{ name: 'Info', value: 'info' },
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
	setProp(e, true);
}

function onTypeChange (e) {
	props.info = false;
	props.success = false;
	props.warning = false;
	props.danger = false;
	setProp(e, true);
}

function onIconChange (e) {
	setProp('icon', e);
}

function setProp (name, val) {
	if (!name || typeof val === 'undefined') return;
	props[name] = val;
}


</script>
