<h2>MessageBox</h2>

<p>It uses the Dialog component by adding it to the body once (so it's lightweight)
	and re-using it for every call</p>

<br>

<h3>Types</h3>
<div class="docs-buttons-row">
	<Button onclick={() => showMessage('This is the message')}>Default message</Button>
	<Button info onclick={() => showMessage('This is the message', 'info')}>Show info</Button>
	<Button warning onclick={() => showMessage('This is the message', 'warning')}>Show warning</Button>
	<Button danger onclick={() => showMessage('This is the message', 'error')}>Show error</Button>
	<Button success onclick={() => showMessage('This is the message', 'success')}>Show success</Button>
</div>


<h3>Title</h3>
<div class="docs-buttons-row">
	<Button onclick={() => showMessage('Default message', null, 'Default title')}>Show message with title</Button>
	<Button info onclick={() => showMessage('Info messagebox', 'info', 'Info title')}>Show message with title</Button>
	<Button onclick={() => showMessage(longMessage, null, 'Info title')}>Show long message</Button>
	<Button info onclick={() => showMessage(longMessage, 'info', 'Info title')}>Show long message</Button>
</div>


<h3>Message with HTML</h3>
<div class="docs-buttons-row">
	<Button onclick={() => showMessage('Message with <i>html</i><br><a href="#MessageBox" target="_blank">Link</a>', null, 'Info title', 'Close')}>Show message</Button>
</div>


<h3>MessageBox with callback action</h3>
<div class="docs-buttons-row">
	<Button onclick={() => showMessage('Info messagebox', null, 'Info title', 'Close', onclose)}>Show Info with title and button label and callback</Button>
</div>


<h3>Complex Message</h3>
<Button info onclick={showComplex}>Show complex message</Button>




<MessageBox />


<Code>{`
<MessageBox />

<script&gt;
import { MessageBox, showMessage } from '@perfectthings/ui';

showMessage('Some info with the OK button');
showMessage('Some warning with the OK button', 'warning');
showMessage('Some error with the OK button and title', 'error', 'Error', 'Close');

showMessage({
    message: 'Are you sure you want to delete this item?',
    title: 'Confirm',
    type: 'error',
    icon: 'help',
    buttons: [
        { label: 'OK', value: 'ok', type: 'danger' },
        { label: 'Cancel' }
    ],
    target: buttonElement,  // to be focused on close
    cb: (res) => {}
});
</script>
`}</Code>

<API
    props={apiProps}
	title="Function API - arguments"
	description="A component exports a <em>showMessage</em> function which accepts either
	a config object or a list of arguments. If it is a list of arguments - this is the API:"/>


<script lang="ts">
import type { ApiProp } from '../../api-table/types';
import { API } from '../../api-table';

import { Button, MessageBox, showMessage } from '../../../src';
import { Code } from '../../code-example';

const longMessage = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec euismod turpis. Aliquam aliquam varius dignissim. Sed sit amet leo tempor, dignissim ex euismod, volutpat ante. Etiam sed lacus pharetra, commodo lectus ac, bibendum purus. In vel aliquam arcu, nec aliquam tortor. Cras feugiat porta eros. Nulla eget quam mattis, laoreet elit et, volutpat lacus. Phasellus eget risus in lacus facilisis porta vitae vel nibh. Nam condimentum est risus, sed volutpat metus sodales non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac euismod arcu. Proin varius, ligula vel ullamcorper rutrum, tortor est imperdiet est, et accumsan nunc mi vitae risus.';

function onclose (res) {
	alert(`You clicked ${res}`);
}

function showComplex (e) {
	showMessage({
		message: 'Are you sure you want to delete this thing?',
		type: 'error',
		title: 'Confirm',
		buttons: [
			{ label: 'Yes', value: 'yes', type: 'danger' },
			{ label: 'No' }
		],
		target: e.target,
		icon: 'help',
		cb: (res) => {
			console.log(`You clicked ${res}`);
		}
	});
}

const apiProps = <ApiProp[]>[
	{ name: '1. message', type: 'string', description: 'A message to show.' },
	{ name: '2. type', type: ['info', 'warning', 'error', 'success'], default: 'info', description: 'A message type (for icon and button styling).' },
	{ name: '3. title', type: 'string', default: '', description: 'A title of the message box.' },
	{ name: '4. label', type: 'string', default: 'OK', description: 'A label for the button.' },
	{ name: '5. cb', type: 'function', description: 'A callback function that will be called on close. A value of the clicked button will be passed to the function.' },
];

</script>
