<div class="banner">
	<a href="https://ui.perfectthings.dev">
		<img class="logo" src="logo-white.svg" alt="Logo"/>
		<h1 class="logotype"><span>PerfectThings</span><em>UI</em><sub>v{window.UI_VERSION || ''}</sub></h1>
	</a>
</div>

<p>PerfectThings UI (or <em>@perfectthings/ui</em>) is a beautiful UI framework and a simple design system
	available as an npm module, that strives to provide the best possible UX when building web applications in
	<a href="http://svelte.dev">svelte</a>.
</p>


<h2>Get started</h2>

<h3>1. Install as a dev dependency</h3>

<pre><code class="language-bash">
	npm i -D @perfectthings/ui
</code></pre>


<h3>2. Import the CSS file</h3>
<p>You need to import the <em>docs/ui.css</em> into your bundle or add it as a script to the <em>index.html</em>.<br>
There are many ways to do that. We specifically didn't use any css-to-js imports as these restrict the tools & the setup you may want to have.<br>
The easiest way is to add a <em>postinstall</em> script into your <em>package.json</em> that will just copy the file into your <em>dist</em> folder:
</p>

<pre><code class="language-json">
"scripts": &lbrace;
    "postinstall": "cp node_modules/@perfectthings/ui/docs/ui.css ./dist/ui.css"
&rbrace;
</code></pre>

<p><i>Note:</i> you need to run <em>npm install</em> after adding this line to your <em>package.json</em></p>


<h3>3. Svelte components</h3>
<p>Just <i>import</i> them from the module, as normal:</p>

<pre><code class="language-js">
	import &lbrace; Button &rbrace; from '@perfectthings/ui';
</code></pre>



<h2>Usage with SvelteKit</h2>
<p>Available from <em>v6.4.0</em>.</p>

<h3>1. Config</h3>
<p>
	Because this is a purely front-end framework and requires a browser to work, it will not work with <em>SSR</em>, so it needs to be disabled.<br>
	Create a file: <em>src/routes/+layout.js</em> and add this:
</p>

<pre><code class="language-js">
export const ssr = false;
</code></pre>


<h3>2. CSS</h3>
<p>If you're using SvelteKit, you need to add the <em>ui.css</em> file to the <em>static</em> folder,<br>
and then either import it into your <em>global.css</em> file or add it to the <em>head</em> section of your <em>app.html</em> file:</p>

<pre><code class="language-html">
&lt;head&gt;
    ...
    &lt;link rel="stylesheet" href="%sveltekit.assets%/ui.css" /&gt;
&lt;/head&gt;
</code></pre>

<p>Once that's done, you can import the components as normal.</p>





<h2>Development</h2>

<p>You need node & npm (obviously). Then, run these:</p>

<pre><code class="language-bash">
git clone git@github.com:perfect-things/ui.git perfectthings-ui
cd perfectthings-ui
npm i && npm start
</code></pre>

<p>A browser window should open with the demo of the components.</p>


<h2>Resources & Credits</h2>
<ul>
	<li><a href="https://developer.apple.com/design/human-interface-guidelines/components/">Human Interface Guidelines</a> from Apple
	<li>Icons from <a href="https://tablericons.com">Tabler Icons</a>
	<li><i>Prime Light</i> font from <a href="https://www.fontfabric.com">Fontfabric</a>
</ul>
