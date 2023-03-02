<h2>Drawer</h2>

<Button on:click="{() => drawer.toggle()}">Toggle drawer</Button>

<Drawer bind:this="{drawer}" title="Drawer">
	drawer contents<br>
	Hello world!<br>
	<br>
	<Button on:click="{() => drawer.close()}">Close Drawer</Button>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis porttitor justo, eget ornare massa commodo non. Pellentesque semper dictum mauris, id pretium mi mattis in. Proin sodales neque id euismod interdum. Fusce vel blandit orci. Mauris nec ligula aliquam, vestibulum erat nec, ullamcorper nunc. Cras vel lacinia sem. Aenean non tincidunt nisl, vitae consectetur est. Integer id neque tempor, facilisis felis egestas, aliquam turpis. Mauris id consectetur purus. Praesent vehicula, mauris eu hendrerit vehicula, velit tortor fermentum enim, eget malesuada quam eros at quam. Integer mattis egestas tempus.</p>
	<p>Aliquam et purus enim. Suspendisse potenti. Suspendisse tincidunt ullamcorper nulla non gravida. Morbi at tellus dui. Sed orci ligula, facilisis sit amet odio eu, commodo ultricies lorem. Nullam sagittis sapien metus, eu posuere sem iaculis sed. Duis at nibh feugiat, placerat lectus nec, consectetur elit. In sollicitudin est in ultricies gravida. Ut malesuada ex lacinia, posuere augue eget, imperdiet erat. Phasellus ac dui sit amet ligula condimentum venenatis vitae ornare augue. Vivamus pellentesque felis in orci finibus, a accumsan libero consectetur.</p>
	<p>Nulla facilisi. Sed in neque hendrerit, convallis neque a, semper sem. Maecenas suscipit ex quis risus mollis, at tincidunt mi faucibus. Pellentesque in faucibus metus. Etiam sollicitudin accumsan arcu interdum sollicitudin. Suspendisse iaculis congue justo id posuere. Ut sed nisi molestie, egestas nulla at, feugiat neque. Nullam vitae libero eu sem ornare tempus vel id tortor. Ut varius ullamcorper nisl et dignissim. Vestibulum sodales massa id odio aliquet ornare. Nunc mollis quis sapien fringilla ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget posuere orci.</p>
	<p>Suspendisse sollicitudin sed ligula nec tempus. Phasellus quis luctus sapien. Nullam nec sapien fringilla, sollicitudin dui sit amet, molestie arcu. Pellentesque id elit et sem pharetra gravida. Donec sed metus ut dui venenatis euismod varius ut libero. Duis ornare odio finibus eros rhoncus ullamcorper. Maecenas auctor lectus volutpat sem pretium volutpat. Mauris blandit quam diam, nec consequat arcu dignissim ut. Donec ac lacus pretium, sollicitudin nisi in, ullamcorper enim. Ut convallis nec eros nec scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris non odio a ipsum varius pretium non ut ex. Quisque euismod luctus risus, sit amet venenatis justo vehicula non. Aliquam erat volutpat. Phasellus eu leo ut odio cursus cursus. Pellentesque porta odio id arcu mattis, vitae aliquam risus efficitur.</p>
	<p>Curabitur nec cursus purus. Nullam scelerisque et odio ut pretium. Donec gravida auctor enim, in venenatis mi viverra sit amet. Integer tincidunt lectus quis sagittis pellentesque. Morbi nec ipsum erat. Donec finibus sit amet lorem et dignissim. Praesent pretium consequat enim, quis rutrum nisl imperdiet ut. </p>
</Drawer>



<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>

<API props="{instanceApiProps}" title="Instance API" description="A component exposes <em>this</em> property, to which a variable can be bound, creating an instance of the component, with the following API"/>

<script>
import { Button, Drawer } from '../../src';
import { API } from '../api-table';
import { CodeExample } from '../code-example';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component container.' },
	{ name: 'title', type: 'string', description: 'Set title for the drawer.' },
	{ name: 'on:close', type: 'function', description: 'Triggered after the drawer is closed.' },
	{ name: 'on:open', type: 'function', description: 'Triggered after the drawer is opened.' },
];

const instanceApiProps = [
	{ name: 'close', type: 'function', description: 'Closes the drawer.' },
	{ name: 'open', type: 'function', description: 'Opens the drawer.' },
	{ name: 'toggle', type: 'function', description: 'Toggles the open state (opens when closed, closes when open).' },
];

const exampleHtml = `
<Drawer bind:this="{drawer1}" title="Drawer">
    Hello world!
    <Button on:click="{() => drawer1.close()}">Close</Button>
</Drawer>

<Button on:click="{() => drawer1.toggle()}">Show dialog</Button>

<script>
    let drawer1;
&lt;/script>
`;


let drawer;

</script>
