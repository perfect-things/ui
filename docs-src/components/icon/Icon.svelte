<h2>Icons</h2>
<div class="icons">
	{#each Object.keys(icons) as icon}
		<div class="icon-block" title={icon}>
			<div class="icon-block-icon"><Icon name={icon}/></div>
			<div class="icon-block-name">{icon}</div>
		</div>
	{/each}
	{#each Object.keys(customIcons) as icon}
		<div class="icon-block" title={icon}>
			<div class="icon-block-icon"><Icon name={icon}/></div>
			<div class="icon-block-name">{icon}</div>
		</div>
	{/each}
</div>

<h2>Custom Icon</h2>
<Button icon="customIcon">Custom Icon Button</Button>

<CodeExample html={exampleHtml} />
<API props={apiProps}/>
<API props={addIconAPI} title="addIcon function" description="The component exports a global <em>addIcon</em> function with the following arguments:"/>
<API props={getIconAPI} title="getIcon function" description="The component exports a global <em>getIcon</em> function that can be used to retrieve the icon's svg code (as string). The function accepts the following argument:"/>


<script>
import { Icon, icons, customIcons, addIcon, Button } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';
import './Icon.css';

addIcon('customIcon', '<[CUSTOM ICON]>');

const apiProps = [
	{ name: 'name', type: 'string', description: 'Name of the icon.' },
];

const addIconAPI = [
	{ name: 'name', type: 'string', description: 'Name of the custom icon.' },
	{ name: 'svg', type: 'string', description: 'SVG code.' },
];

const getIconAPI = [
	{ name: 'name', type: 'string', description: 'Name of the icon.' },
];

const exampleHtml = `
<Icon name="alert"/>
<Icon name="customIcon"/>

<script>
	import { addIcon } from '@perfectthings/ui';

	addIcon('customIcon', '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">...</svg>');
&lt;/script>
`;

</script>
