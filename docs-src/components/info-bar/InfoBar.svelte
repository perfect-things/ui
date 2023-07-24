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


<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>


<script>
import { InfoBar, Info, Error, Success, Warning } from '../../../src';
import { CodeExample } from '../../code-example';
import { API } from '../../api-table';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'id', type: 'string', description: 'Assign ID to the message paragraph.' },
	{ name: 'msg', type: 'string', description: 'Message to display. It can use simple html for formatting (message is wrapped in <em>&lt;p&gt;</em> tag).' },
	{ name: 'type', type: ['info', 'warning', 'error', 'success'], default: 'info', description: 'Type of the info-bar. This property only exists on the <em>&lt;InfoBar&gt;</em> component, not on the shortcut-components.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
];


const exampleHtml = `
<InfoBar id="msg001" msg="This is a comprehensive explanation of a thing." type="info" />

<!-- Using shortcuts -->
<Info msg="Some info text" />
<Warning msg="Some warning text" />
<Error msg="Some error text" />
<Success msg="Some success text" />
`;


</script>
