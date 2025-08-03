<h2>Notification Center</h2>

<p>Shows toast-like notifications which can be dismissed manually or auto-closed.</p>

<NotificationCenter />

<h3>Notifications</h3>
<div class="docs-buttons-row">
	<Button info onclick={() => showNotification('Hello')}>Show info</Button>
	<Button success onclick={() => showNotification('Hello', 'success')}>Show success</Button>
	<Button warning onclick={() => showNotification('Hello', 'warning')}>Show warning</Button>
	<Button danger onclick={() => showNotification('Hello', 'error', 10000)}>Show error for 10s</Button>
</div>

<h3>No auto-close</h3>
<div class="docs-buttons-row">
	<Button info onclick={() => showNotification('This is a very long message in a toast, to show how the long text will wrap inside the toast message.', 'info', null)}>A very long message</Button>
	<Button success onclick={() => showNotification('Hello', 'success', null)}>Show success</Button>
	<Button warning onclick={() => showNotification('Hello', 'warning', null)}>Show warning</Button>
	<Button danger onclick={() => showNotification('Hello', 'error', null)}>Show error</Button>
</div>

<h3>With button & callback</h3>
<div class="docs-buttons-row">
	<Button success onclick={() => showNotification('Operation Successful', 'success', 6000, 'Undo', cb)}>Show success</Button>
	<Button warning onclick={() => showNotification('Operation Unsuccessful', 'warning', null, 'Retry', cb)}>Show warning</Button>
</div>


<Code>{`
<NotificationCenter />

<Button onclick={() => showNotification('Hello')}>Show info</Button>
<Button success onclick={() => showNotification('Hello', 'success')}>Show success</Button>
<Button warning onclick={() => showNotification('Hello', 'warning')}>Show warning</Button>
<Button danger onclick={() => showNotification('Hello', 'error', 10000, 'Undo', cb)}>Show error</Button>
<Button danger onclick={() => showNotification('Hello', 'error', false)}>No auto-close</Button>

<script&gt;
import { NotificationCenter, showNotification, hideNotification, Button } from '@perfectthings/ui';

function cb (id) {
    console.log('do something');
    hideNotification(id);
}
</script>
`}</Code>

<API props={apiProps}/>
<API props={showNotificationAPI} title="showNotification function" description="A component exports a global <em>showNotification</em> function with the following arguments:"/>
<API props={hideNotificationAPI} title="hideNotification function" description="A component exports a global <em>hideNotification</em> function with the following arguments:"/>


<script lang="ts">
import type { ApiProp } from '../../api-table/types';
import { API, PROPS } from '../../api-table';

import { Button, NotificationCenter, showNotification, hideNotification } from '../../../src';
import { Code } from '../../code-example';
import './NotificationCenter.css';

const apiProps = <ApiProp[]>[
	PROPS.class,
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


function cb (id) {
	alert('Undone!');
	hideNotification(id);
}

</script>
