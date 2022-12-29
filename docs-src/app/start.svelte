<h1>Simple UI Components in Svelte</h1>

<p>A set of simple, but perfect, UI components, written in Svelte (the only front-end framework worth learning).</p>
<ul>
	<li><a href="https://perfect-things.github.io/simple-ui-components-in-svelte/">Homepage and docs</a>
	<li><a href="https://github.com/perfect-things/simple-ui-components-in-svelte">Github Repo</a>
</ul>


<h2>Get started</h2>

<h3>1. Firstly, install the module as a dev dependency:</h3>

<code>
npm i -D simple-ui-components-in-svelte
</code>


<h3>2. Import the CSS</h3>
<p>You need to import the <i>docs/ui.css</i> into your bundle.<br>
There are many ways to do that. I specifically didn't use any css-to-js imports as these restrict the tools & the setup you may want to have.<br>
The easiest way is probably to add a <i>postinstall</i> script into your <i>package.json</i> that will just copy the file into your <i>dist</i> folder:
</p>

<code>
"scripts": &lbrace;
    "postinstall": "cp node_modules/simple-ui-components-in-svelte/docs/ui.css ./dist/ui.css"
&rbrace;
</code>

<p>From there - you can just add it directly to the <i>index.html</i>.</p>


<h3>3. Svelte components</h3>
Just <i>import</i> them from the module, as normal:
<code>
import &lbrace; Button &rbrace; from 'simple-ui-components-in-svelte';
</code>


<h2>Development</h2>

You need node & npm (obviously). Then, run these:
<code>
git clone git@github.com:perfect-things/simple-ui-components-in-svelte.git
cd simple-ui-components-in-svelte
npm i && npm start
</code>
A browser window should open with the demo of the components.


<script>
</script>
