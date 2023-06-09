<h2>Toaster (Deprecated. Please use <a href="#NotificationCenter">NotificationCenter</a> instead)</h2>

<Toaster position="bottom" />

<h3>Normal</h3>
<div>
	<Button info on:click="{() => showToast('Hello')}">Show info</Button>
	<Button success on:click="{() => showToast('Hello', 'success')}">Show success</Button>
	<Button warning on:click="{() => showToast('Hello', 'warning')}">Show warning</Button>
	<Button danger on:click="{() => showToast('Hello', 'error', 10000, 'Undo', cb)}">Show error for 10s</Button>
</div>

<h3>No auto-close</h3>
<div>
	<Button info on:click="{() => showToast('This is a very long message in a toast, to show how the long text will wrap inside the toast message.', 'info', false)}">A very long message</Button>
	<Button success on:click="{() => showToast('Hello', 'success', false)}">Show success</Button>
	<Button warning on:click="{() => showToast('Hello', 'warning', false)}">Show warning</Button>
	<Button danger on:click="{() => showToast('Hello', 'error', false)}">Show error</Button>
</div>

<CodeExample html="{exampleHtml}" />
<API props="{apiProps}"/>
<API props="{showToastAPI}" title="showToast function" description="A component exports a global <em>showToast</em> function with the following arguments:"/>
<API props="{hideToastAPI}" title="hideToast function" description="A component exports a global <em>hideToast</em> function with the following arguments:"/>


<div class="toaster-testing-background">
	<div class="toaster-testing-background-light"></div>
	<div class="toaster-testing-background-dark"></div>
</div>


<script>
import { Button, Toaster, showToast, hideToast } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';


const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'position', type: ['top', 'bottom'], default: 'top', description: 'Toaster position on screen.' },
];

const showToastAPI = [
	{ name: 'button', type: 'string', description: 'Label of the optional button on the toast.' },
	{ name: 'callback', type: 'function', description: 'Callback function triggered when the button is clicked.<br>The function receives 1 parameter, which is the ID of the toast.' },
	{ name: 'message', type: 'string', required: true, description: 'Message to show.' },
	{ name: 'timeout', type: ['number', 'false'], default: 5000, description: 'How long the toast should remain on screen (in milliseconds).<br>If the value is not a number (e.g. "false") - the toast will not auto-close.' },
	{ name: 'type', type: ['info', 'success', 'warning', 'error'], default: 'info', description: 'Type of the message.' },
];

const hideToastAPI = [
	{ name: 'id', type: 'string', description: 'ID of the toast message that is returned by <em>showToast</em> function.' },
];

const exampleHtml = `
<Toaster position="bottom"/>

<Button on:click="{() => showToast('Hello')}">Show info</Button>
<Button success on:click="{() => showToast('Hello', 'success')}">Show success</Button>
<Button warning on:click="{() => showToast('Hello', 'warning')}">Show warning</Button>
<Button danger on:click="{() => showToast('Hello', 'error', 10000, 'Undo', cb)}">Show error</Button>
<Button danger on:click="{() => showToast('Hello', 'error', false)}">No auto-close</Button>

<script>
import { Toaster, showToast, hideToast, Button } from '@perfectthings/ui';

function cb (id) {
	console.log('do something');
	hideToast(id);
}
&lt;/script>
`;


function cb (id) {
	console.log(id);
	hideToast(id);
}

</script>
