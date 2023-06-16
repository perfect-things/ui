<h2>MessageBox</h2>


<p>It uses the Dialog component by adding it to the body once (so it's lightweight) and re-using it for every call</p>

<br>

<h3>Info</h3>
<Button on:click="{() => msgBox.show('Info messagebox')}">Show Info</Button>
<Button on:click="{() => msgBox.show('Info messagebox', msgBox.Type.INFO, 'Info title')}">Show Info with title</Button>
<Button on:click="{() => msgBox.show('Info messagebox', msgBox.Type.INFO, 'Info title', 'Close')}">Show Info with title and button label</Button>
<Button on:click="{() => msgBox.show('Info messagebox', msgBox.Type.INFO, 'Info title', 'Close', onclose)}">Show Info with title and button label and callback</Button>


<h3>Warning</h3>
<Button on:click="{() => msgBox.show('Warning messagebox', msgBox.Type.WARNING)}">Show warning message</Button>


<h3>Error</h3>
<Button on:click="{() => msgBox.show('Error messagebox', msgBox.Type.ERROR)}">Show error message</Button>





<MessageBox bind:this="{msgBox}" />


<CodeExample html="{exampleHtml}" />

<API props="{instanceApiProps}" title="Instance API" description="A component exposes <em>this</em> property, to which a variable can be bound, creating an instance of the component, with the following API"/>

<script>
import { Button, MessageBox } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';

let msgBox;

function onclose (res) {
	alert(`You clicked ${res}`);
}


const instanceApiProps = [
	{ name: 'show', type: 'function', description: 'Shows a message box.' },
];

const exampleHtml = `
<MessageBox bind:this="{msgBox}" />

<script>
    let msgBox;

    MessageBox('Some info with the OK button');

    MessageBox('Some warning with the OK button', 'warning');
    MessageBox('Some error with the OK button and title', 'error', 'Error', 'Close');

    MessageBox({
        message: '',
        title: '',
        type: '',
        buttons: [
            { label: 'OK', value: 'ok' },
            { label: 'Cancel' }
        ],
        cb: (res) => {}
    });

&lt;/script>
`;

</script>
