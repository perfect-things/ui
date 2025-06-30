<h2>Dialog</h2>

<ul>
	<li>simple, small, no dependencies</li>
	<li>accessible (full keyboard support, focus trap)</li>
	<li>configurable</li>
</ul>
<hr>


<h3>Typical use-cases</h3>
<div class="docs-buttons-row">
	<Button onclick={e => dialog1.open(e)}>Large dialog</Button>
	<Button onclick={e => dialog2.open(e)}>No buttons</Button>
	<Button onclick={e => dialog3.open(e)}>Confirmation</Button>
	<Button onclick={e => dialog4.open(e)}>With title and buttons</Button>
	<Button onclick={e => dialog5.open(e)}>Modal</Button>
</div>


<Dialog bind:this={dialog1} title="Hello">
	dialog contents<br>
	Hello world!

	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis porttitor justo, eget ornare massa commodo non. Pellentesque semper dictum mauris, id pretium mi mattis in. Proin sodales neque id euismod interdum. Fusce vel blandit orci. Mauris nec ligula aliquam, vestibulum erat nec, ullamcorper nunc. Cras vel lacinia sem. Aenean non tincidunt nisl, vitae consectetur est. Integer id neque tempor, facilisis felis egestas, aliquam turpis. Mauris id consectetur purus. Praesent vehicula, mauris eu hendrerit vehicula, velit tortor fermentum enim, eget malesuada quam eros at quam. Integer mattis egestas tempus.</p>
	<p>Aliquam et purus enim. Suspendisse potenti. Suspendisse tincidunt ullamcorper nulla non gravida. Morbi at tellus dui. Sed orci ligula, facilisis sit amet odio eu, commodo ultricies lorem. Nullam sagittis sapien metus, eu posuere sem iaculis sed. Duis at nibh feugiat, placerat lectus nec, consectetur elit. In sollicitudin est in ultricies gravida. Ut malesuada ex lacinia, posuere augue eget, imperdiet erat. Phasellus ac dui sit amet ligula condimentum venenatis vitae ornare augue. Vivamus pellentesque felis in orci finibus, a accumsan libero consectetur.</p>
	<p>Nulla facilisi. Sed in neque hendrerit, convallis neque a, semper sem. Maecenas suscipit ex quis risus mollis, at tincidunt mi faucibus. Pellentesque in faucibus metus. Etiam sollicitudin accumsan arcu interdum sollicitudin. Suspendisse iaculis congue justo id posuere. Ut sed nisi molestie, egestas nulla at, feugiat neque. Nullam vitae libero eu sem ornare tempus vel id tortor. Ut varius ullamcorper nisl et dignissim. Vestibulum sodales massa id odio aliquet ornare. Nunc mollis quis sapien fringilla ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget posuere orci.</p>
	<p>Suspendisse sollicitudin sed ligula nec tempus. Phasellus quis luctus sapien. Nullam nec sapien fringilla, sollicitudin dui sit amet, molestie arcu. Pellentesque id elit et sem pharetra gravida. Donec sed metus ut dui venenatis euismod varius ut libero. Duis ornare odio finibus eros rhoncus ullamcorper. Maecenas auctor lectus volutpat sem pretium volutpat. Mauris blandit quam diam, nec consequat arcu dignissim ut. Donec ac lacus pretium, sollicitudin nisi in, ullamcorper enim. Ut convallis nec eros nec scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris non odio a ipsum varius pretium non ut ex. Quisque euismod luctus risus, sit amet venenatis justo vehicula non. Aliquam erat volutpat. Phasellus eu leo ut odio cursus cursus. Pellentesque porta odio id arcu mattis, vitae aliquam risus efficitur.</p>
	<p>Curabitur nec cursus purus. Nullam scelerisque et odio ut pretium. Donec gravida auctor enim, in venenatis mi viverra sit amet. Integer tincidunt lectus quis sagittis pellentesque. Morbi nec ipsum erat. Donec finibus sit amet lorem et dignissim. Praesent pretium consequat enim, quis rutrum nisl imperdiet ut. </p>

	{#snippet footer()}
		<Button onclick={() => dialog1.close()}>Close</Button>
	{/snippet}
</Dialog>

<Dialog bind:this={dialog2} title="Hello">
	Hello!
</Dialog>


<Dialog bind:this={dialog3}>
	Are you sure?
	{#snippet footer()}
		<Button onclick={() => dialog3.close()}>Yes</Button>
		<Button onclick={() => dialog3.close()}>No</Button>
	{/snippet}
</Dialog>


<Dialog bind:this={dialog4} title="Edit something">
	Form goes here...
	{#snippet footer()}
		<Button success onclick={() => dialog4.close()}>Yes</Button>
		<Button onclick={() => dialog4.close()}>No</Button>
		<div class="flex-spacer"></div>
		<Button danger icon="trash" onclick={() => dialog4.close()}></Button>
	{/snippet}
</Dialog>


<Dialog bind:this={dialog5} title="Modal dialog" modal>
	<p style="line-height: 2; margin: 0">This means that it will not close when clicking outside of it.<br>
		This is useful for when an intentional action is required from the user.</p>
	{#snippet footer()}
		<Button success onclick={() => dialog5.close()}>Confirm</Button>
		<Button text onclick={() => dialog5.close()}>Cancel</Button>
	{/snippet}
</Dialog>


<CodeExample html={exampleHtml} />



<API props={apiProps}/>

<API props={instanceApiProps} title="Instance API" description="The component exposes <em>this</em> property, to which a variable can be bound, creating an instance of the component, with the following API"/>



<script lang="ts">
import type { ApiProp } from '../../api-table/types';
import { API, PROPS } from '../../api-table';
import { Button, Dialog } from '../../../src';
import { CodeExample } from '../../code-example';

const apiProps = <ApiProp[]>[
	...PROPS.component,

	{ name: 'opened', type: 'boolean', default: 'false', description: 'Set dialog\'s open state.' },
	{ name: 'skipFirstFocus', type: 'boolean', default: 'false', description: 'If <i>true</i> - the dialog will not set focus to the first focusable element in the dialog.<br>This is useful if another element in the dialog should be focused first.' },
	{ name: 'modal', description: 'If present - the dialog will not close when the user clicks outside of it or presses Escape.' },
	{ name: 'bind:this', type: 'object', description: 'Exposes the component instance.' },
	{ name: 'onclose', type: 'function', description: 'Triggered after the dialog is closed.' },
	{ name: 'onopen', type: 'function', description: 'Triggered after the dialog is opened.' },
];

const instanceApiProps = <ApiProp[]>[
	{ name: 'close', type: 'function', description: 'Closes the dialog.' },
	{ name: 'open', type: 'function', description: 'Opens the dialog.' },
];

const exampleHtml = `
<Dialog bind:this={dialog1}>
    Are you sure?
	{#snippet footer()}
        <Button onclick={e => dialog1.close(e)}>Close</Button>
	{/snippet}
</Dialog>

<Button onclick={e => dialog1.open(e)}>Show dialog</Button>

<script>
    let dialog1: Dialog	= $state();
&lt;/script>
`;

let dialog1: Dialog = $state();
let dialog2: Dialog = $state();
let dialog3: Dialog = $state();
let dialog4: Dialog = $state();
let dialog5: Dialog = $state();

</script>
