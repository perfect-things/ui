<header class="docs-header">
	<ButtonToggle round
		class="dark-mode-switch"
		title="Dark mode toggle"
		items="{themes}"
		value="{$PREFERS_DARK}"
		on:change="{switchColorMode}"/>

	<div class="header-links">
		<a href="https://www.npmjs.com/package/@perfectthings/ui" title="NPM page" class="npm">
			<svg xmlns="http://www.w3.org/2000/svg" width="365" height="162" viewBox="0 0 365 162"><g fill="none" fill-rule="nonzero"><path class="npm-outline" fill="currentColor" d="M0 20h365v121.714H182.5V162h-81.111v-20.286H0V20Zm20.278 101.429h40.555V60.57h20.278v60.858h20.278V40.286H20.278v81.143Zm101.389-81.143v101.428h40.555V121.43h40.556V40.286h-81.111Zm40.555 20.285H182.5v40.572h-20.278V60.57Zm60.834-20.285v81.143h40.555V60.57h20.278v60.858h20.278V60.57h20.277v60.858h20.278V40.286H223.056Z"/><path class="npm-fill" fill="currentColor" d="M23 124h40.5V63.25h20.25V124H104V43H23zM118 40v104h40.5v-20.8H199V40h-81Zm60.75 62.4H158.5V60.8h20.25v41.6ZM223 43v81h39.333V63.25H282V124h19.667V63.25h19.666V124H341V43z"/></g></svg>
		</a>
		<a href="https://github.com/perfect-things/ui/" title="Github repo" class="github">
			<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path class="gh-outline" fill="currentColor" fill-rule="evenodd" d="M64.052 4C28.632 4 0 31.729 0 66.033c0 27.423 18.346 50.635 43.798 58.849 3.18.619 4.348-1.334 4.348-2.976 0-1.439-.106-6.368-.106-11.504-17.818 3.698-21.528-7.396-21.528-7.396-2.864-7.189-7.106-9.037-7.106-9.037-5.832-3.799.424-3.799.424-3.799 6.47.41 9.864 6.368 9.864 6.368 5.726 9.448 14.952 6.777 18.664 5.134.53-4.005 2.228-6.778 4.03-8.318-14.212-1.438-29.164-6.78-29.164-30.609 0-6.777 2.544-12.324 6.574-16.637-.634-1.538-2.862-7.908.64-16.433 0 0 5.406-1.644 17.6 6.368a63.911 63.911 0 0 1 16.014-2.053 63.93 63.93 0 0 1 16.014 2.053c12.196-8.012 17.604-6.368 17.604-6.368 3.5 8.525 1.272 14.893.636 16.433 4.136 4.315 6.574 9.86 6.574 16.64 0 23.827-14.95 29.064-29.268 30.606 2.334 1.95 4.348 5.647 4.348 11.501 0 8.32-.106 14.997-.106 17.049 0 1.644 1.168 3.595 4.348 2.98C109.654 116.666 128 93.456 128 66.033 128.104 31.729 99.366 4 64.052 4Z"/></svg>
		</a>
		<a href="https://perfectthings.dev" title="PerfectThings website" class="pt">
			<div></div>
		</a>
	</div>
</header>


<script>
import { ButtonToggle } from '../../src';
import { PREFERS_DARK } from '../../src/utils';


const themes = [
	{ value: false, icon: 'sun' },
	{ value: true, icon: 'moon' },
];


function switchColorMode (e) {
	document.documentElement.className = e.detail ? 'theme-dark' : 'theme-light';
}


</script>
