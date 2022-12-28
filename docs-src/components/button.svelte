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
		<code class="docs-code">
			{@html buttonHtml}
		</code>
	</div>
	<div class="docs-column">
		<h3>Properties</h3>
		<h4>Text</h4>
		<input bind:value="{buttonText}" on:input="{buildButtonHtml}" />
		<h4>Style</h4>
		<ButtonToggle items="{buttonStyles}" value="" on:change="{onStyleChange}" />
		<h4>Type</h4>
		<ButtonToggle items="{buttonTypes}" value="default" on:change="{onTypeChange}" />
		<h4>Icon</h4>
		<ButtonToggle items="{buttonIcons}" value="" on:change="{onIconChange}" />
		<h4>Round</h4>
		<Toggle bind:value="{props.round}" on:change="{buildButtonHtml}"/>
		<h4>Disabled</h4>
		<Toggle bind:value="{props.disabled}" on:change="{buildButtonHtml}"/>

	</div>
</div>



<hr>
<h3>Normal</h3>

<h4>Default</h4>
<Button>Hello</Button>
<Button success>Success</Button>
<Button warning>Warning</Button>
<Button danger>Danger</Button>

<h4>Disabled</h4>
<Button disabled>Hello</Button>
<Button disabled success>Success</Button>
<Button disabled warning>Warning</Button>
<Button disabled danger>Danger</Button>

<h4>With icon</h4>
<Button icon="info">Info</Button>
<Button icon="check" success>Success</Button>
<Button icon="alert" warning>Warning</Button>
<Button icon="trash" danger>Delete</Button>


<hr>
<h3>Outline</h3>

<h4>Default</h4>
<Button outline>Hello</Button>
<Button outline success>Success</Button>
<Button outline warning>Warning</Button>
<Button outline danger>Danger</Button>

<h4>Disabled</h4>
<Button disabled outline>Hello</Button>
<Button disabled outline success>Success</Button>
<Button disabled outline warning>Warning</Button>
<Button disabled outline danger>Danger</Button>

<h4>With icon</h4>
<Button outline icon="info">Hello</Button>
<Button outline icon="check" success>Success</Button>
<Button outline icon="alert" warning>Warning</Button>
<Button outline icon="trash" danger>Danger</Button>


<hr>
<h3>Text button</h3>

<h4>Default</h4>
<Button text>Hello</Button>
<Button text success>Success</Button>
<Button text warning>Warning</Button>
<Button text danger>Danger</Button>

<h4>Disabled</h4>
<Button disabled text>Hello</Button>
<Button disabled text success>Success</Button>
<Button disabled text warning>Warning</Button>
<Button disabled text danger>Danger</Button>

<h4>With icon</h4>
<Button text icon="info">Hello</Button>
<Button text icon="check" success>Success</Button>
<Button text icon="alert" warning>Warning</Button>
<Button text icon="trash" danger>Danger</Button>


<hr>
<h3>Link button</h3>

<h4>Default</h4>
<Button link>Hello</Button>
<Button link success>Success</Button>
<Button link warning>Warning</Button>
<Button link danger>Danger</Button>

<h4>Disabled</h4>
<Button disabled link>Hello</Button>
<Button disabled link success>Success</Button>
<Button disabled link warning>Warning</Button>
<Button disabled link danger>Danger</Button>

<h4>With icon</h4>
<Button link icon="info">Hello</Button>
<Button link icon="check" success>Success</Button>
<Button link icon="alert" warning>Warning</Button>
<Button link icon="trash" danger>Danger</Button>


<hr>
<h3>Icon only buttons</h3>


<h4>Default</h4>
<Button icon="info"></Button>
<Button icon="check" success></Button>
<Button icon="alert" warning></Button>
<Button icon="trash" danger></Button>

<h4>Outline</h4>
<Button outline icon="info"></Button>
<Button outline icon="check" success></Button>
<Button outline icon="alert" warning></Button>
<Button outline icon="trash" danger></Button>

<h4>Text</h4>
<Button text icon="info"></Button>
<Button text icon="check" success></Button>
<Button text icon="alert" warning></Button>
<Button text icon="trash" danger></Button>

<h4>Link</h4>
<Button link icon="info"></Button>
<Button link icon="check" success></Button>
<Button link icon="alert" warning></Button>
<Button link icon="trash" danger></Button>


<hr>
<h3>Icon only, and round</h3>

<h4>Default</h4>
<Button round icon="info"></Button>
<Button round icon="check" success></Button>
<Button round icon="alert" warning></Button>
<Button round icon="trash" danger></Button>

<h4>Outline</h4>
<Button round outline icon="info"></Button>
<Button round outline icon="check" success></Button>
<Button round outline icon="alert" warning></Button>
<Button round outline icon="trash" danger></Button>

<h4>Text</h4>
<Button round text icon="info"></Button>
<Button round text icon="check" success></Button>
<Button round text icon="alert" warning></Button>
<Button round text icon="trash" danger></Button>


<script>
import { onMount } from 'svelte';
import { Button, ButtonToggle, Toggle } from '../../src';

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

let buttonHtml = '';


onMount(() => {
	buildButtonHtml();
});



function buildButtonHtml () {
	const _props = {};
	for (let prop in props) {
		if (props[prop] === false) continue;
		_props[prop] = props[prop];
	}
	let _html = '';
	let propsStr = JSON.stringify(_props)
		.replace(/"([^"]+)":/g, '$1:')
		.replace(/(:)/g, '=')
		.replace(/,/g, ' ')
		.replace(/({|}|=true|default|icon="")/g, '')
		.trim();
	if (propsStr) propsStr = ' ' + propsStr;

	if (!buttonText) _html = `<Button${propsStr}/>`;
	else _html = `<Button${propsStr}>${buttonText}</Button>`;

	buttonHtml = encode(_html);
}

function onStyleChange (e) {
	props.outline = false;
	props.text = false;
	props.link = false;
	if (e.detail) props[e.detail] = true;
	buildButtonHtml();
}

function onTypeChange (e) {
	props.default = false;
	props.success = false;
	props.warning = false;
	props.danger = false;
	if (e.detail) props[e.detail] = true;
	buildButtonHtml();
}

function onIconChange (e) {
	props.icon = e.detail;
	buildButtonHtml();
}


function encode (s) {
	return s.replace(/[\u00A0-\u9999<>&]/gim, i => `&#${i.charCodeAt(0)};`);
}

</script>
