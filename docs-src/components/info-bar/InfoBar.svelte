<h2>InfoBar</h2>

<p>A simple information box with type-styling.</p>
<p>There are also shortcut-components available, for more semantic HTML:
	<em>Info</em>, <em>Warning</em>, <em>Error</em>, and <em>Success</em>.</p>

<br>

<h3>Normal</h3>
<InfoBar id="msg001" msg="This is a comprehensive explanation of a thing." type="info" />


<h3>Using shortcuts</h3>
<Info msg="Some info text" />
<Warning msg="Some warning text" />
<Error msg="Some error text" />
<Success msg="Some success text" />


<Code>{`
<InfoBar id="msg001" msg="This is a comprehensive explanation of a thing." type="info" />

<!-- Using shortcuts -->
<Info msg="Some info text" />
<Warning msg="Some warning text" />
<Error msg="Some error text" />
<Success msg="Some success text" />
`}</Code>

<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../api-table/types';
import { API, PROPS } from '../../api-table';

import { InfoBar, Info, Error, Success, Warning } from '../../../src';
import { Code } from '../../code-example';

const apiProps = <ApiProp[]>[
	PROPS.id,
	PROPS.class,
	PROPS.bindelement,
	{ name: 'msg', type: 'string', description: 'Message to display. It can use simple html for formatting (message is wrapped in <em>&lt;p&gt;</em> tag).' },
	{ name: 'type', type: ['info', 'warning', 'error', 'success'], default: 'info', description: 'Type of the info-bar. This property only exists on the <em>&lt;InfoBar&gt;</em> component, not on the shortcut-components.' },
];


</script>
