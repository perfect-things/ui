<h2>Dialog</h2>

<ul>
	<li>simple, small, no dependencies
	<li>accessible (full keyboard support, focus trap)
</ul>
<br>
<Button on:click="{() => dialog1.open()}">Show dialog 1</Button>
<Button on:click="{() => dialog2.open()}">Show dialog 2</Button>
<Button on:click="{() => dialog3.open()}">Show dialog 3</Button>

<Dialog bind:this="{dialog1}" title="Hello" drawborders="true">
	dialog contents<br>
	Hello world!

	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis porttitor justo, eget ornare massa commodo non. Pellentesque semper dictum mauris, id pretium mi mattis in. Proin sodales neque id euismod interdum. Fusce vel blandit orci. Mauris nec ligula aliquam, vestibulum erat nec, ullamcorper nunc. Cras vel lacinia sem. Aenean non tincidunt nisl, vitae consectetur est. Integer id neque tempor, facilisis felis egestas, aliquam turpis. Mauris id consectetur purus. Praesent vehicula, mauris eu hendrerit vehicula, velit tortor fermentum enim, eget malesuada quam eros at quam. Integer mattis egestas tempus.</p>
	<p>Aliquam et purus enim. Suspendisse potenti. Suspendisse tincidunt ullamcorper nulla non gravida. Morbi at tellus dui. Sed orci ligula, facilisis sit amet odio eu, commodo ultricies lorem. Nullam sagittis sapien metus, eu posuere sem iaculis sed. Duis at nibh feugiat, placerat lectus nec, consectetur elit. In sollicitudin est in ultricies gravida. Ut malesuada ex lacinia, posuere augue eget, imperdiet erat. Phasellus ac dui sit amet ligula condimentum venenatis vitae ornare augue. Vivamus pellentesque felis in orci finibus, a accumsan libero consectetur.</p>
	<p>Nulla facilisi. Sed in neque hendrerit, convallis neque a, semper sem. Maecenas suscipit ex quis risus mollis, at tincidunt mi faucibus. Pellentesque in faucibus metus. Etiam sollicitudin accumsan arcu interdum sollicitudin. Suspendisse iaculis congue justo id posuere. Ut sed nisi molestie, egestas nulla at, feugiat neque. Nullam vitae libero eu sem ornare tempus vel id tortor. Ut varius ullamcorper nisl et dignissim. Vestibulum sodales massa id odio aliquet ornare. Nunc mollis quis sapien fringilla ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget posuere orci.</p>
	<p>Suspendisse sollicitudin sed ligula nec tempus. Phasellus quis luctus sapien. Nullam nec sapien fringilla, sollicitudin dui sit amet, molestie arcu. Pellentesque id elit et sem pharetra gravida. Donec sed metus ut dui venenatis euismod varius ut libero. Duis ornare odio finibus eros rhoncus ullamcorper. Maecenas auctor lectus volutpat sem pretium volutpat. Mauris blandit quam diam, nec consequat arcu dignissim ut. Donec ac lacus pretium, sollicitudin nisi in, ullamcorper enim. Ut convallis nec eros nec scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris non odio a ipsum varius pretium non ut ex. Quisque euismod luctus risus, sit amet venenatis justo vehicula non. Aliquam erat volutpat. Phasellus eu leo ut odio cursus cursus. Pellentesque porta odio id arcu mattis, vitae aliquam risus efficitur.</p>
	<p>Curabitur nec cursus purus. Nullam scelerisque et odio ut pretium. Donec gravida auctor enim, in venenatis mi viverra sit amet. Integer tincidunt lectus quis sagittis pellentesque. Morbi nec ipsum erat. Donec finibus sit amet lorem et dignissim. Praesent pretium consequat enim, quis rutrum nisl imperdiet ut. </p>

	<div slot="footer">
		<Button on:click="{() => dialog1.close()}">Close</Button>
	</div>
</Dialog>

<Dialog bind:this="{dialog2}" title="Hello">
	Hello!
</Dialog>


<Dialog bind:this="{dialog3}">
	Are you sure?
	<div slot="footer">
		<Button on:click="{() => dialog3.close()}">Yes</Button>
		<Button on:click="{() => dialog3.close()}">No</Button>
	</div>
</Dialog>


<CodeExample html="{exampleHtml}" />



<API props="{apiProps}"/>

<API props="{instanceApiProps}" title="Instance API" description="A component exposes <em>this</em> property, to which a variable can be bound, creating an instance of the component, with the following API"/>



<script>
import { Button, Dialog } from '../../src';
import API from '../api-table/index.svelte';
import CodeExample from '../code-example/index.svelte';

const apiProps = [
	{ name: 'title', type: 'string', description: 'Set title for the dialog.' },
	{ name: 'opened', type: ['true' , 'false'], default: 'false', description: 'Set dialog\'s open state.' },
	{ name: 'drawBorders', type: ['true' , 'false'], default: 'false', description: 'If <i>true</i> - the dialog will have borders between title and content' },
	{ name: 'className', type: 'string', description: 'Additional css class name to be added to the component container.' },
	{ name: 'skipFirstFocus', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - the dialog will not set focus to the first focusable element in the dialog.<br>This is useful if another element in the dialog should be focused first.' },
	{ name: 'on:open', type: 'function', description: 'Triggered after the dialog is opened.' },
	{ name: 'on:close', type: 'function', description: 'Triggered after the dialog is closed.' },
];

const instanceApiProps = [
	{ name: 'open', type: 'function', description: 'Opens the dialog.' },
	{ name: 'close', type: 'function', description: 'Closes the dialog.' },
];

const exampleHtml = `
<Dialog bind:this="{dialog1}">
    Are you sure?
    <div slot="footer">
        <Button on:click="{() => dialog1.close()}">Close</Button>
    </div>
</Dialog>

<Button on:click="{() => dialog1.open()}">Show dialog</Button>

<script>
    let dialog1;
&lt;/script>
`;

let dialog1, dialog2, dialog3;

</script>
