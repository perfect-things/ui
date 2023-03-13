<header class="main-header">
	<img class="logo" src="logo2.png" alt="Logo"/>
	<h1 class="logotype">
		<span class="small">PerfectThings</span>
		<span>UI Components</span>
		<span class="small"></span>
	</h1>
</header>

<p>A set of simple, but perfect, UI components, written in Svelte (the only front-end framework worth learning).</p>
<ul>
	<li><a href="https://perfect-things.github.io/ui/">Homepage and docs</a>
	<li><a href="https://github.com/perfect-things/ui/">Github Repo</a>
</ul>


<h2>Get started</h2>

<h3>1. Firstly, install the module as a dev dependency:</h3>

<pre><code class="language-bash">
	npm i -D @perfectthings/ui
</code></pre>


<h3>2. Import the CSS</h3>
<p>You need to import the <i>docs/ui.css</i> into your bundle.<br>
There are many ways to do that. I specifically didn't use any css-to-js imports as these restrict the tools & the setup you may want to have.<br>
The easiest way is probably to add a <i>postinstall</i> script into your <i>package.json</i> that will just copy the file into your <i>dist</i> folder:
</p>

<pre><code class="language-json">
"scripts": &lbrace;
    "postinstall": "cp node_modules/@perfectthings/ui/docs/ui.css ./dist/ui.css"
&rbrace;
</code></pre>

<p>From there - you can just add it directly to the <i>index.html</i>.</p>

<i>Note:</i> you need to run <em>npm install</em> after adding this line to your <i>package.json</i>


<h3>3. Svelte components</h3>
Just <i>import</i> them from the module, as normal:

<pre><code class="language-js">
	import &lbrace; Button &rbrace; from '@perfectthings/ui';
</code></pre>

<p>
	<em>*</em> <a href="#InputPassword">Password</a> is a special case component, where it works fine on its own,
	but it also has the ability to show the password strength. For that it requires an external library
	<a href="https://github.com/dropbox/zxcvbn">zxcvbn</a>.<br>
	You need to load it in your html file, e.g.:
</p>

<pre><code class="language-html">
	&lt;script src="zxcvbn.js"&gt;&lt;/script&gt;
</code></pre>

<p>This script file is available in SUICIS npm package, and can be copied over to your <i>dist</i> folder, similarly to the css in the previous example, e.g.:</p>
<pre><code class="language-json">
"scripts": &lbrace;
    "postinstall": "cp node_modules/@perfectthings/ui/docs/ui.css dist/ui.css && cp node_modules/@perfectthings/ui/docs/zxcvbn.js dist/zxcvbn.js"
&rbrace;
</code></pre>


<h2>Development</h2>

You need node & npm (obviously). Then, run these:

<pre><code class="language-bash">
git clone git@github.com:perfect-things/ui.git perfectthings-ui
cd perfectthings-ui
npm i && npm start
</code></pre>

A browser window should open with the demo of the components.


<script>
</script>
