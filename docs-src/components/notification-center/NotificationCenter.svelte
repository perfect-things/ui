<h2>Notification Center</h2>

<p>With the aim of improving accessibility and usability, the <b>Toaster</b> component has been redesigned into a <b>NotificationCenter</b>.</p>

<p>This component renders a bell button that shows a list of "archived" notifications when clicked.<br>
Button can be hidden using the <em>hideButton="true"</em> property, in which case the <b>NotificationCenter</b> will work as a regular <b>Toaster</b> component.</p>

<p>A notification first shows normally on screen, then, when it's dismissed or auto-closed, it's moved to the "archive" and available in the <b>NotificationCenter</b>.<br>
Notifications remain in the archive as long as the user remains on the page. When the user navigates away from the page, or reloads it, the archive is cleared.</p>

<p>The goal of the <b>NotificationCenter</b> is to allow the user to read the notifications that they may have missed.</p>

<hr>

<h3>Notification button</h3>

<div class="prop-row">
	<!-- svelte-ignore a11y_label_has_associated_control -->
	<label>Toggle notification center: </label>
	<NotificationCenter outline round {hideButton} />
</div>
<div class="prop-row">
	<label for="button-toggle">Hide button: </label>
	<Toggle id="button-toggle" bind:value={hideButton} />
</div>



<h3>Notifications</h3>
<div class="docs-buttons-row">
	<Button info onclick={() => showNotification('Hello')}>Show info</Button>
	<Button success onclick={() => showNotification('Hello', 'success')}>Show success</Button>
	<Button warning onclick={() => showNotification('Hello', 'warning')}>Show warning</Button>
	<Button danger onclick={() => showNotification('Hello', 'error', 10000, 'Undo', cb)}>Show error for 10s</Button>
</div>

<h3>No auto-close</h3>
<div class="docs-buttons-row">
	<Button info onclick={() => showNotification('This is a very long message in a toast, to show how the long text will wrap inside the toast message.', 'info', null)}>A very long message</Button>
	<Button success onclick={() => showNotification('Hello', 'success', null)}>Show success</Button>
	<Button warning onclick={() => showNotification('Hello', 'warning', null)}>Show warning</Button>
	<Button danger onclick={() => showNotification('Hello', 'error', null)}>Show error</Button>
</div>


<CodeExample html={exampleHtml} />
<API props={apiProps}/>
<API props={showNotificationAPI} title="showNotification function" description="A component exports a global <em>showNotification</em> function with the following arguments:"/>
<API props={hideNotificationAPI} title="hideNotification function" description="A component exports a global <em>hideNotification</em> function with the following arguments:"/>


<script lang="ts">
import type { ApiProp } from '../../api-table/types';
import { API, PROPS } from '../../api-table';

import { Button, NotificationCenter, showNotification, hideNotification, Toggle } from '../../../src';
import { CodeExample } from '../../code-example';
import './NotificationCenter.css';

let hideButton = $state(false);

const apiProps = <ApiProp[]>[
	PROPS.class,
	PROPS.round,
	{ name: 'hideButton', type: 'boolean', default: 'false', description: 'If <i>true</i> the button will be hidden.' },
	{ name: 'outline', description: 'Notification center button style: outline' },
];

const showNotificationAPI = <ApiProp[]>[
	{ name: '1. message', type: 'string', required: true, description: 'Message to show.' },
	{ name: '2. type', type: ['info', 'success', 'warning', 'error'], default: 'info', description: 'Type of the message.' },
	{ name: '3. timeout', type: ['number', 'false'], default: 5000, description: 'How long the toast should remain on screen (in milliseconds).<br>If the value is not a number (e.g. "false") - the toast will not auto-close.' },
	{ name: '4. button', type: 'string', description: 'Label of the optional button on the toast.' },
	{ name: '5. callback', type: 'function', description: 'Callback function triggered when the button is clicked.<br>The function receives 1 parameter, which is the ID of the toast.' },
];

const hideNotificationAPI = <ApiProp[]>[
	{ name: 'id', type: 'string', description: 'ID of the toast message that is returned by <em>showNotification</em> function.' },
];

const exampleHtml = `
<NotificationCenter outline round/>

<Button onclick={() => showNotification('Hello')}>Show info</Button>
<Button success onclick={() => showNotification('Hello', 'success')}>Show success</Button>
<Button warning onclick={() => showNotification('Hello', 'warning')}>Show warning</Button>
<Button danger onclick={() => showNotification('Hello', 'error', 10000, 'Undo', cb)}>Show error</Button>
<Button danger onclick={() => showNotification('Hello', 'error', false)}>No auto-close</Button>

<script>
import { NotificationCenter, showNotification, hideNotification, Button } from '@perfectthings/ui';

function cb (id) {
	console.log('do something');
	hideNotification(id);
}
&lt;/script>
`;


function cb (id) {
	console.log(id);
	hideNotification(id);
}

</script>
