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
		<CodeBox tag="Button" text="{buttonText}" props="{props}" />
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
<h3>API</h3>
<Table className="api-table">
	<thead>
		<tr><th>Attribute</th><th>Value</th><th>Description</th></tr>
	</thead>
	<tbody>
		<tr><td>id</td><td>string</td><td>assign ID to the underlying button</td></tr>
		<tr><td>title</td><td>string</td><td>assign title to the underlying button</td></tr>
		<tr><td>submit</td><td>string "true"|"false"</td><td>If "true" button type is set to "submit", otherwise it's "button"</td></tr>

		<tr><td>disabled</td><td>-</td><td>Makes the button disabled</td></tr>
		<tr><td>round</td><td>-</td><td>Makes the button round</td></tr>

		<tr><td>outline</td><td>-</td><td>Button style: outline</td></tr>
		<tr><td>text</td><td>-</td><td>Button style: text</td></tr>
		<tr><td>link</td><td>-</td><td>Button style: link</td></tr>

		<tr><td>success</td><td>-</td><td>Button type: success</td></tr>
		<tr><td>warning</td><td>-</td><td>Button type: warning</td></tr>
		<tr><td>danger</td><td>-</td><td>Button type: danger</td></tr>

		<tr><td>icon</td><td>string icon name</td><td>Adds an icon to the button (see <a href="#Icon">icons</a> section for icon names)</td></tr>
		<tr><td>on:click</td><td>function</td><td>The standard svelte function assignment by reference.</td></tr>
	</tbody>
</Table>


<script>
import { Button, ButtonToggle, Toggle, Table } from '../../src';
import CodeBox from '../app/code-box';

let props = {};
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
	if (e.detail) props[e.detail] = true;
}

function onTypeChange (e) {
	props.default = false;
	props.success = false;
	props.warning = false;
	props.danger = false;
	if (e.detail) props[e.detail] = true;
}

function onIconChange (e) {
	props.icon = e.detail;
}


</script>
