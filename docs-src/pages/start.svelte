<div class="banner">
	<a href="https://ui.perfectthings.dev">
		<img class="logo" src="logo.svg" alt="Logo"/>
		<h1 class="logotype"><span>PerfectThings</span><em>UI</em><sub>v{window.UI_VERSION || ''}</sub></h1>
	</a>
</div>

<p>PerfectThings UI (or <em>@perfectthings/ui</em>) is a beautiful UI framework and a simple design system
	available as an npm module, that strives to provide the best possible UX when building web applications in
	<a href="http://svelte.dev">svelte</a>.
</p>


<div class="sticky-block">
	<h2>Get started</h2>

	<h3>1. Install as a dev dependency</h3>

	<Code notitle lang="bash">
		npm i -D @perfectthings/ui
	</Code>


	<h3>2. Svelte components</h3>
	<p>Just <i>import</i> them from the module, as normal:</p>

	<Code notitle lang="js">
		import &lbrace; Button &rbrace; from '@perfectthings/ui';
	</Code>
</div>

<div class="sticky-block">
	<h2>SvelteKit</h2>
	<p>This framework works with SvelteKit from version <em>6.4.0</em>.</p>

	<h3>Config</h3>
	<p>
		Because this is a purely front-end framework and requires a browser to work, it will not work with <em>SSR</em>, so it needs to be disabled.<br>
		Create a file: <em>src/routes/+layout.js</em> and add this:
	</p>

	<Code notitle lang="js">export const ssr = false;</Code>

	<p>Once that's done, you can import the components as normal.</p>
</div>



<div class="sticky-block">
	<h2>Development</h2>

	<p>You need node & npm (obviously). Then, run these:</p>

	<Code notitle lang="bash">
git clone git@github.com:perfect-things/ui.git perfectthings-ui
cd perfectthings-ui
npm i && npm start
	</Code>

	<p>A browser window should open with the demo of the components.</p>
</div>


<div class="sticky-block">
	<h2>Resources & Credits</h2>
	<ul>
		<li><a href="https://developer.apple.com/design/human-interface-guidelines/components/">Human Interface Guidelines</a> from Apple</li>
		<li>Icons from <a href="https://tablericons.com">Tabler Icons</a></li>
		<li><span class="prime-light">Prime Light</span> font from <a href="https://www.fontfabric.com">Fontfabric</a></li>
	</ul>


	<div class="footer-links">
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a href="https://github.com/perfect-things/ui/" title="Github repo" class="github">
			<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
				<path fill="currentColor" fill-rule="evenodd" d="M64.052 4C28.632 4 0 31.729 0 66.033c0 27.423 18.346 50.635 43.798 58.849 3.18.619 4.348-1.334 4.348-2.976 0-1.439-.106-6.368-.106-11.504-17.818 3.698-21.528-7.396-21.528-7.396-2.864-7.189-7.106-9.037-7.106-9.037-5.832-3.799.424-3.799.424-3.799 6.47.41 9.864 6.368 9.864 6.368 5.726 9.448 14.952 6.777 18.664 5.134.53-4.005 2.228-6.778 4.03-8.318-14.212-1.438-29.164-6.78-29.164-30.609 0-6.777 2.544-12.324 6.574-16.637-.634-1.538-2.862-7.908.64-16.433 0 0 5.406-1.644 17.6 6.368a63.911 63.911 0 0 1 16.014-2.053 63.93 63.93 0 0 1 16.014 2.053c12.196-8.012 17.604-6.368 17.604-6.368 3.5 8.525 1.272 14.893.636 16.433 4.136 4.315 6.574 9.86 6.574 16.64 0 23.827-14.95 29.064-29.268 30.606 2.334 1.95 4.348 5.647 4.348 11.501 0 8.32-.106 14.997-.106 17.049 0 1.644 1.168 3.595 4.348 2.98C109.654 116.666 128 93.456 128 66.033 128.104 31.729 99.366 4 64.052 4Z"/>
			</svg>
		</a>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a href="https://www.npmjs.com/package/@perfectthings/ui" title="NPM page" class="npm">
			<svg xmlns="http://www.w3.org/2000/svg" width="365" height="162" viewBox="0 0 365 162">
				<path fill="currentColor" d="M0 20h365v121.714H182.5V162h-81.111v-20.286H0V20Zm20.278 101.429h40.555V60.57h20.278v60.858h20.278V40.286H20.278v81.143Zm101.389-81.143v101.428h40.555V121.43h40.556V40.286h-81.111Zm40.555 20.285H182.5v40.572h-20.278V60.57Zm60.834-20.285v81.143h40.555V60.57h20.278v60.858h20.278V60.57h20.277v60.858h20.278V40.286H223.056Z"/>
				<path fill="none" d="M23 124h40.5V63.25h20.25V124H104V43H23zM118 40v104h40.5v-20.8H199V40h-81Zm60.75 62.4H158.5V60.8h20.25v41.6ZM223 43v81h39.333V63.25H282V124h19.667V63.25h19.666V124H341V43z"/>
			</svg>
		</a>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a href="https://perfectthings.dev" title="PerfectThings website" class="pt">
			<svg width="256" height="256" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path d="M113.5 10.8853L33.8257 56.8853C24.8531 62.0656 19.3257 71.6393 19.3257 82V174C19.3257 184.361 24.8531 193.934 33.8257 199.115L46 206.144V168.205C45.9669 167.806 45.95 167.404 45.95 167V89C45.95 83.8196 48.7137 79.0328 53.2 76.4426L120.75 37.4426C125.236 34.8525 130.764 34.8525 135.25 37.4426L202.8 76.4426C207.286 79.0328 210.05 83.8196 210.05 89V167C210.05 172.18 207.286 176.967 202.8 179.557L135.25 218.557C130.764 221.148 125.236 221.148 120.75 218.557L73 190.989V221.732L113.5 245.115C122.473 250.295 133.527 250.295 142.5 245.115L222.174 199.115C231.147 193.934 236.674 184.361 236.674 174V82C236.674 71.6393 231.147 62.0656 222.174 56.8853L142.5 10.8853C133.527 5.70491 122.473 5.70491 113.5 10.8853Z"/>
				<path d="M80.0469 91.9426L120.75 68.4426C125.236 65.8525 130.764 65.8525 135.25 68.4426L175.953 91.9426C180.44 94.5328 183.203 99.3196 183.203 104.5V151.5C183.203 156.68 180.44 161.467 175.953 164.057L135.25 187.557C130.764 190.148 125.236 190.148 120.75 187.557L80.0469 164.057C75.5606 161.467 72.7969 156.68 72.7969 151.5V104.5C72.7969 99.3196 75.5606 94.5328 80.0469 91.9426ZM154.203 112.871L128 97.743L101.796 112.871V143.128L128 158.256L154.203 143.128V112.871Z" />
			</svg>
		</a>
	</div>
</div>

<script>
	import Code from '../code-example/Code.svelte';
import './start.css';
</script>
