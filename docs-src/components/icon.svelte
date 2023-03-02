<h2>Icons</h2>
{#each Object.keys(icons) as icon}
	<div class="icon-block">
		<div class="icon-block-icon"><Icon name="{icon}"/></div>
		<div class="icon-block-name">{icon}</div>
	</div>
{/each}

<CodeExample html="{exampleHtml}" />
<API props="{apiProps}"/>

<script>
import { Icon, icons } from '../../src';
import { API } from '../api-table';
import { CodeExample } from '../code-example';

const apiProps = [
	{ name: 'name', type: 'string', description: 'Name of the icon.' },
];

const exampleHtml = `
<Icon name="alert"/>
`;

</script>
