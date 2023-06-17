<h2>MessageBox</h2>

<p>It uses the Dialog component by adding it to the body once (so it's lightweight)
	and re-using it for every call</p>

<br>

<h3>Info</h3>
<div class="docs-buttons-row">
	<Button on:click="{() => showMessage('Info messagebox')}">Show Info</Button>
	<Button on:click="{() => showMessage('Info messagebox', MessageType.INFO, 'Info title')}">Show Info with title</Button>
	<Button on:click="{() => showMessage('Info messagebox', MessageType.INFO, 'Info title', 'Close')}">Show Info with title and button label</Button>
	<Button on:click="{() => showMessage('Info messagebox', MessageType.INFO, 'Info title', 'Close', onclose)}">Show Info with title and button label and callback</Button>
</div>

<h3>Warning</h3>
<Button on:click="{() => showMessage('Warning messagebox', MessageType.WARNING)}">Show warning message</Button>


<h3>Error</h3>
<Button on:click="{() => showMessage('Error messagebox', MessageType.ERROR)}">Show error message</Button>


<h3>Complex Message</h3>
<Button on:click="{showComplex}">Show complex message</Button>




<MessageBox />


<CodeExample html="{exampleHtml}" />

<API
	props="{apiProps}"
	title="Function API - arguments"
	description="A component exports a <em>showMessage</em> function which accepts either
	a config object or a list of arguments.  If it is a list of arguments - this is the API:"/>


<script>
import { Button, MessageBox, MessageType, showMessage } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';


function onclose (res) {
	alert(`You clicked ${res}`);
}

function showComplex (e) {
	showMessage({
		message: 'Are you sure you want to delete this thing?',
		type: MessageType.DANGER,
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

const apiProps = [
	{ name: '1. message', type: 'string', description: 'A message to show.' },
	{ name: '2. type', type: 'string', default: 'info', description: 'A message type (for icon and button styling).' },
	{ name: '3. title', type: 'string', default: '', description: 'A title of the message box.' },
	{ name: '4. label', type: 'string', default: 'OK', description: 'A label for the button.' },
	{ name: '5. cb', type: 'function', description: 'A callback function that will be called on close. A value of the clicked button will be passed to the function.' },
];


const exampleHtml = `
<MessageBox />

<script>
	import { MessageBox, MessageType, showMessage } from '@perfectthings/ui';

    showMessage('Some info with the OK button');

    showMessage('Some warning with the OK button', MessageType.WARNING);
    showMessage('Some error with the OK button and title', MessageType.ERROR, 'Error', 'Close');

    showMessage({
        message: 'Are you sure you want to delete this item?',
        title: 'Confirm',
        type: MessageType.DANGER,
		icon: 'help'
        buttons: [
            { label: 'OK', value: 'ok', type: 'danger' },
            { label: 'Cancel' }
        ],
		target: buttonElement,  // to be focused on close
        cb: (res) => {}
    });

&lt;/script>
`;

</script>
