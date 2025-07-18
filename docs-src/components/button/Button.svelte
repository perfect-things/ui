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

<script lang="ts">
import type { ApiProp } from '../../api-table/types';
import { API, PROPS } from '../../api-table';
import { Button, ButtonToggle, Toggle, InputText } from '../../../src';
import { CodeBox } from '../../code-example';
import './Button.css';

const apiProps = <ApiProp[]>[
	...PROPS.component,

	PROPS.info,
	PROPS.success,
	PROPS.warning,
	PROPS.danger,
	PROPS.round,

	PROPS.icon,

	{ name: 'submit', type: 'boolean', default: 'false', description: 'If <i>true</i> button type is set to <i>submit</i>, otherwise it\'s <i>button</i>' },
	{ name: 'outline', description: 'Button style: outline' },
	{ name: 'link', description: 'Button style: link' },
	{ name: 'text', description: 'Button style: text' },
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



function onStyleChange (e, val) {
	props.outline = false;
	props.text = false;
	props.link = false;
	setProp(val.value, true);
}

function onTypeChange (e, val) {
	props.info = false;
	props.success = false;
	props.warning = false;
	props.danger = false;
	setProp(val.value, true);
}

function onIconChange (e, val) {
	setProp('icon', val.value);
}

function setProp (name, val) {
	if (!name || typeof val === 'undefined') return;
	props[name] = val;
}


</script>
