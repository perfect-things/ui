<h2>Dialog</h2>

<ul>
	<li>simple, small, no dependencies</li>
	<li>accessible (full keyboard support, focus trap)</li>
	<li>configurable</li>
</ul>
<hr>


<h3>Typical use-cases</h3>
<div class="docs-buttons-row">
	<Button on:click={dialog1.open}>Large dialog</Button>
	<Button on:click={dialog2.open}>No buttons</Button>
	<Button on:click={dialog3.open}>Confirmation</Button>
	<Button on:click={dialog4.open}>With title and buttons</Button>
	<Button on:click={dialog5.open}>Modal</Button>
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
		<div >
			<Button on:click={() => dialog1.close()}>Close</Button>
		</div>
	{/snippet}
</Dialog>

<Dialog bind:this={dialog2} title="Hello">
	Hello!
</Dialog>


<Dialog bind:this={dialog3}>
	Are you sure?
	{#snippet footer()}
		<div >
			<Button on:click={() => dialog3.close()}>Yes</Button>
			<Button on:click={() => dialog3.close()}>No</Button>
		</div>
	{/snippet}
</Dialog>


<Dialog bind:this={dialog4} title="Edit something">
	Form goes here...
	{#snippet footer()}
		<div >
			<Button success on:click={() => dialog4.close()}>Yes</Button>
			<Button on:click={() => dialog4.close()}>No</Button>
			<div class="flex-spacer"></div>
			<Button danger icon="trash" on:click={() => dialog4.close()}></Button>
		</div>
	{/snippet}
</Dialog>


<Dialog bind:this={dialog5} title="Modal dialog" modal>
	<p style="line-height: 2; margin: 0">This means that it will not close when clicking outside of it.<br>
		This is useful for when an intentional action is required from the user.</p>
	{#snippet footer()}
		<div >
			<Button success on:click={() => dialog5.close()}>Confirm</Button>
			<Button text on:click={() => dialog5.close()}>Cancel</Button>
		</div>
	{/snippet}
</Dialog>


<CodeExample html={exampleHtml} />



<API props={apiProps}/>

<API props={instanceApiProps} title="Instance API" description="The component exposes <em>this</em> property, to which a variable can be bound, creating an instance of the component, with the following API"/>



<script>
import { Button, Dialog } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component container.' },
	{ name: 'opened', type: ['true' , 'false'], default: 'false', description: 'Set dialog\'s open state.' },
	{ name: 'skipFirstFocus', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - the dialog will not set focus to the first focusable element in the dialog.<br>This is useful if another element in the dialog should be focused first.' },
	{ name: 'title', type: 'string', description: 'Set title for the dialog.' },
	{ name: 'modal', description: 'If present - the dialog will not close when the user clicks outside of it or presses Escape.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'bind:this', type: 'object', description: 'Exposes the component instance.' },
	{ name: 'on:close', type: 'function', description: 'Triggered after the dialog is closed.' },
	{ name: 'on:open', type: 'function', description: 'Triggered after the dialog is opened.' },
];

const instanceApiProps = [
	{ name: 'close', type: 'function', description: 'Closes the dialog.' },
	{ name: 'open', type: 'function', description: 'Opens the dialog.' },
];

const exampleHtml = `
<Dialog bind:this={dialog1}>
    Are you sure?
    <div slot="footer">
        <Button on:click={() => dialog1.close()}>Close</Button>
    </div>
</Dialog>

<Button on:click={() => dialog1.open()}>Show dialog</Button>

<script>
    let dialog1;
&lt;/script>
`;

let dialog1 = $state(), dialog2 = $state(), dialog3 = $state(), dialog4 = $state(), dialog5 = $state();

</script>
