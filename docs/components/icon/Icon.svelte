<h2>Icon</h2>

<h3>Normal</h3>
<Icon name="success"/>
<Icon name="info"/>
<Icon name="calendar"/>
<Icon name="clock"/>

<h3>Custom Icon</h3>
<Button icon="githubIcon" round>Custom Icon</Button>


<Code>{`
<Icon name="alert"/>
<Icon name="myCustomIcon"/>

<script&gt;
import { addIcon } from '@perfectthings/ui';

addIcon('myCustomIcon', '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">...</svg>');
</script>
`}</Code>



<API props={apiProps}/>
<API props={addIconAPI} title="addIcon function" description="The component exports a global <em>addIcon</em> function with the following arguments:"/>
<API props={getIconAPI} title="getIcon function" description="The component exports a global <em>getIcon</em> function that can be used to retrieve the icon's svg code (as string). The function accepts the following argument:"/>


<h2>Icons</h2>
<div class="icons">
	{#each Object.keys(icons) as icon (icon)}
		<div class="icon-block" title={icon}>
			<div class="icon-block-icon"><Icon name={icon}/></div>
			<div class="icon-block-name">{icon}</div>
		</div>
	{/each}
	{#each Object.keys(customIcons) as icon (icon)}
		<div class="icon-block" title={icon}>
			<div class="icon-block-icon"><Icon name={icon}/></div>
			<div class="icon-block-name">{icon}</div>
		</div>
	{/each}
</div>



<script lang="ts">
import './Icon.css';
import type { ApiProp } from '../../api-table/types';
import { API } from '../../api-table';
import { Icon, icons, customIcons, addIcon, Button } from '../../../src';
import { Code } from '../../code-example';

addIcon('githubIcon', '<?xml version="1.0" encoding="UTF-8"?> <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="github-mark" stroke="none" fill="none" fill-rule="evenodd"> <path d="M11.9642449,0 C5.34832653,0 0,5.5 0,12.30425 C0,17.74325 3.42685714,22.34725 8.18081633,23.97675 C8.77518367,24.09925 8.99289796,23.712 8.99289796,23.38625 C8.99289796,23.101 8.97330612,22.12325 8.97330612,21.1045 C5.64514286,21.838 4.95208163,19.63775 4.95208163,19.63775 C4.41722449,18.21175 3.62473469,17.84525 3.62473469,17.84525 C2.53542857,17.0915 3.70408163,17.0915 3.70408163,17.0915 C4.91240816,17.173 5.54644898,18.3545 5.54644898,18.3545 C6.61591837,20.2285 8.33926531,19.699 9.03257143,19.373 C9.1315102,18.5785 9.44865306,18.0285 9.78538776,17.723 C7.13093878,17.43775 4.33812245,16.3785 4.33812245,11.65225 C4.33812245,10.30775 4.81322449,9.20775 5.56604082,8.35225 C5.44726531,8.04675 5.03118367,6.7835 5.68506122,5.09275 C5.68506122,5.09275 6.69526531,4.76675 8.97306122,6.35575 C9.94826666,6.08641565 10.9539802,5.94940358 11.9642449,5.94825 C12.974449,5.94825 14.0042449,6.091 14.9551837,6.35575 C17.2332245,4.76675 18.2434286,5.09275 18.2434286,5.09275 C18.8973061,6.7835 18.4809796,8.04675 18.3622041,8.35225 C19.1348571,9.20775 19.5903673,10.30775 19.5903673,11.65225 C19.5903673,16.3785 16.797551,17.41725 14.1232653,17.723 C14.5591837,18.11 14.9353469,18.84325 14.9353469,20.0045 C14.9353469,21.6545 14.9157551,22.97875 14.9157551,23.386 C14.9157551,23.712 15.1337143,24.09925 15.7278367,23.977 C20.4817959,22.347 23.9087065,17.74325 23.9087065,12.30425 C23.9282449,5.5 18.5603265,0 11.9642449,0 Z" fill="currentColor"></path> </g> </svg>');

const apiProps = <ApiProp[]>[
	{ name: 'name', type: 'string', description: 'Name of the icon.' },
];

const addIconAPI = <ApiProp[]>[
	{ name: 'name', type: 'string', description: 'Name of the custom icon.' },
	{ name: 'svg', type: 'string', description: 'SVG code.' },
];

const getIconAPI = <ApiProp[]>[
	{ name: 'name', type: 'string', description: 'Name of the icon.' },
];

</script>
