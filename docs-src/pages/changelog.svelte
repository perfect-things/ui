<h1>Changelog</h1>
<h2>v6.6.0, v6.6.1 <em>(2023-05-11)</em></h2>
<ul>
<li><code>Select</code> now also accepts an array of strings for items.</li>
<li><code>ButtonToggle</code> now also accepts an array of strings for items.</li>
<li><code>em</code> to <code>rem</code>, as it&#39;s more consistent and predictable.</li>
</ul>
<h2>v6.5.3, v6.5.4, v6.5.5 <em>(2023-05-09)</em></h2>
<ul>
<li>Standardise button height to match all the other controls.</li>
<li>Standardise placeholder and input-icon colours.</li>
<li>Enhance Autocomplete&#39;s and DatePicker&#39;s input-icon click experience.</li>
<li>Size the icons in <code>em</code> not <code>px</code>.</li>
</ul>
<h2>v6.5.2 <em>(2023-05-08)</em></h2>
<ul>
<li>Maintenance update: upgrade dependencies, remove yet another useless a11y warning from svelte zealots.</li>
</ul>
<h2>v6.5.1 <em>(2023-05-07)</em></h2>
<ul>
<li><code>Menu</code> highlighting upgrade: <code>ArrowDown</code> on the last item will highlight the first item, <code>ArrowUp</code> on the first item will highlight the last item.</li>
</ul>
<h2>v6.5.0 <em>(2023-04-28)</em></h2>
<ul>
<li>Change the default color for a secondary button.</li>
<li>Add <code>info</code> type to <code>Button</code> component (that takes the colour of the previous <code>default</code>).</li>
<li>Fix round button (with text) aspect-ratio lock.</li>
</ul>
<h2>v6.4.3 <em>(2023-04-27)</em></h2>
<ul>
<li>Improve <code>&lt;InputPassword/&gt;</code> component: don&#39;t rerender when eye button is clicked, minor alignment style tweak.</li>
<li><code>Autocomplete</code> keyboard scrolling alignment fix (highlighted item was partially cropped).</li>
</ul>
<h2>v6.4.1, v6.4.2 <em>(2023-04-22)</em></h2>
<ul>
<li>Remove the need to inline svg icons in the consumer&#39;s build.</li>
<li>Add <code>addIcon</code> function to allow adding custom icons.</li>
<li>Fix <code>menu.open</code> issue when event was not passed.</li>
</ul>
<h2>v6.4.0 <em>(2023-04-20)</em></h2>
<ul>
<li>Tweaks to allow it to be used with SvelteKit.</li>
</ul>
<h2>v6.3.15, v6.3.16 <em>(2023-04-15)</em></h2>
<ul>
<li>New icons: <code>undo</code> and <code>redo</code>.</li>
<li>Fix <code>ButtonGroup</code> styling for other button types.</li>
</ul>
<h2>v6.3.13, v6.3.14 <em>(2023-04-12)</em></h2>
<ul>
<li><code>Tooltip</code> style tweaks, so it&#39;s finally perfect.</li>
<li>Minor fix in <code>Tooltip</code>.</li>
</ul>
<h2>v6.3.12 <em>(2023-04-09)</em></h2>
<ul>
<li>Cleanup.</li>
</ul>
<h2>v6.3.9, v6.3.10, v6.3.11, v6.3.12 <em>(2023-04-07)</em></h2>
<ul>
<li><code>Menu</code> on-close should resolve instantly, when the menu is already closed.</li>
<li><code>Menu</code> new attribute <code>align</code> allows to align the menu to the right with the target.</li>
</ul>
<h2>v6.3.4, v6.3.5, v6.3.6, v6.3.7, v6.3.8 <em>(2023-04-06)</em></h2>
<ul>
<li>Handle svelte&#39;s newest a11y warnings.</li>
<li>Tweak media query notation.</li>
<li>Remove menu of type=&#39;input&#39;.</li>
<li>Allow <code>data-</code> attributes on <code>Button</code> and <code>MenuItem</code>.</li>
<li>Fix Menu target button&#39;s <code>aria-expanded</code> attribute (wasn&#39;t set to <code>false</code> on menu close).</li>
</ul>
<h2>v6.3.3 <em>(2023-04-05)</em></h2>
<ul>
<li><code>Tooltip</code> tip was upgraded to take advantage of the new <code>clip-path</code> property.</li>
<li><code>Tooltip</code> tip was enhanced with color variations: <code>success</code>, <code>warning</code> and <code>danger</code>.</li>
</ul>
<h2>v6.3.2 <em>(2023-03-30)</em></h2>
<ul>
<li><code>Table</code> will not listen to events when it&#39;s not the target.</li>
<li><code>Dialog</code> buttons can now be navigated with left &amp; right arrow keys for convenience.</li>
</ul>
<h2>v6.3.1 <em>(2023-03-26)</em></h2>
<ul>
<li><code>ButtonGroup</code> styling tweaks (edge buttons padding alignment)</li>
</ul>
<h2>v6.3.0 <em>(2023-03-26)</em></h2>
<ul>
<li>enhance <code>MenuItem</code> component (add props: class, disabled, icon, success, warning, danger)</li>
</ul>
<h2>v6.2.10 <em>(2023-03-25)</em></h2>
<ul>
<li>Also pass event target in menu <code>on:close</code> event.</li>
</ul>
<h2>v6.2.9 <em>(2023-03-25)</em></h2>
<ul>
<li>Fix: menu <code>on:open</code> event was missing.</li>
</ul>
<h2>v6.2.8 <em>(2023-03-24)</em></h2>
<ul>
<li>move tooltip custom class attribute to the tooltip itself, not the content (so that it can easily overwrite the background color).</li>
</ul>
<h2>v6.2.7 <em>(2023-03-24)</em></h2>
<ul>
<li>revert some tooltip changes (<code>events</code> prop is actually useful)</li>
</ul>
<h2>v6.2.6 <em>(2023-03-24)</em></h2>
<ul>
<li>simplify tooltip (change bg color to <code>accent</code>, drop <code>events</code> prop and default to focus + hover)</li>
</ul>
<h2>v6.2.5 <em>(2023-03-24)</em></h2>
<ul>
<li>disable svelte false-positive a11y warnings. See <a href="https://github.com/sveltejs/svelte/pull/8402">svelte#8402</a></li>
</ul>
<h2>v6.2.4 <em>(2023-03-24)</em></h2>
<ul>
<li>update table docs (missing <code>data</code> prop)</li>
<li>change button&#39;s <code>active</code> class to <code>touching</code> for touch events (to not conflict with popular <code>active</code> class name that may be used by consumers)</li>
</ul>
<h2>v6.2.2, v6.2.3 <em>(2023-03-24)</em></h2>
<ul>
<li>Fix issue where a selectable table would become non-selectable if another table on the same page was destroyed.</li>
</ul>
<h2>v6.2.1 <em>(2023-03-23)</em></h2>
<ul>
<li>Datepicker should stopPropagation on Escape, when the calendar is open.</li>
</ul>
<h2>v6.2.0 <em>(2023-03-20)</em></h2>
<ul>
<li>Review accessibility of all components (added <code>aria-</code> roles and attributes where necessary).</li>
<li>Tweaked some components (e.g. close Tooltip on Escape)</li>
<li>Added unit tests for all components.</li>
<li>Docs pages style tweaks (e.g. color palette)</li>
</ul>
<h2>v6.1.1 <em>(2023-03-15)</em></h2>
<ul>
<li>Remove <code>coverage</code> folder from the npm package.</li>
</ul>
<h2>v6.1.0 <em>(2023-03-15)</em></h2>
<ul>
<li><code>Toggle</code> component has been completely rewritten to make it more flexible and perfect.</li>
</ul>
<h2>v6.0.0, v6.0.1, v6.0.2 <em>(2023-03-13)</em></h2>
<ul>
<li>rebrand <code>simple-ui-components-in-svelte</code> to <code>@perfectthings/ui</code></li>
</ul>
<h2>v5.1.0 <em>(2023-03-12)</em></h2>
<ul>
<li>Better Menu highlighting (doesn&#39;t hl first item on open, mouseout removes the highlighting), inline with how native menus work on MacOS</li>
<li>Mobile friendlier buttons (touchstart invokes :active styling)</li>
<li>unit tests for some components</li>
</ul>
<h2>v5.0.8 <em>(2023-03-03)</em></h2>
<ul>
<li>Tooltip offset parameter</li>
</ul>
<h2>v5.0.7 <em>(2023-03-03)</em></h2>
<ul>
<li>PushButton fix (pushed class was not applied)</li>
</ul>
<h2>v5.0.6 <em>(2023-03-02)</em></h2>
<ul>
<li>Add back <code>form</code> property to a button</li>
</ul>
<h2>v5.0.5 <em>(2023-03-02)</em></h2>
<ul>
<li>Reduce memory footprint (removed some of the <code>transform</code> props that were no longer necessary)</li>
</ul>
<h2>v5.0.4 <em>(2023-03-02)</em></h2>
<ul>
<li>esbuild replaced rollup for speed and simplicity</li>
<li>cleanup &amp; refactoring</li>
</ul>
<h2>v5.0.3 <em>(2023-03-01)</em></h2>
<ul>
<li>Tooltip hiding fix (wasn&#39;t hiding when hovering target)</li>
</ul>
<h2>v5.0.2 <em>(2023-03-01)</em></h2>
<ul>
<li>Toaster import fix</li>
<li>Tooltip fix (some console errors were popping up)</li>
</ul>
<h2>v5.0.1 <em>(2023-02-28)</em></h2>
<ul>
<li>Bring back <code>button-outline.css</code> (it was accidentally deleted in v5.0.0)</li>
</ul>
<h2>v5.0.0 <em>(2023-02-28)</em></h2>
<ul>
<li>Breaking change: renamed props for all components: <code>className</code> -&gt; <code>class</code> (as it turns out it is possible to use <code>class</code> as a prop name in svelte)</li>
<li>Almost all components now have a <code>class</code> prop, which can be used to add custom classes to the component</li>
<li>Updated docs to reflect the above changes</li>
<li>Docs API table is now alphabetically sorted</li>
<li>Components don&#39;t use <code>$$props</code> anymore, as it was causing issues with the <code>class</code> prop. Instead, the props are now explicitly passed down to the component. This is a good thing to do, as it makes the components more explicit and easier to understand.</li>
</ul>
<h2>v4.0.0 <em>(2023-02-28)</em></h2>
<ul>
<li>Breaking change: renamed components: <code>Item</code> -&gt; <code>MenuItem</code>, <code>Separator</code> -&gt; <code>MenuSeparator</code></li>
<li>Refactored the folder structure</li>
</ul>
<h2>v3.1.2 <em>(2023-01-04)</em></h2>
<ul>
<li>Toggle&#39;s <code>innerWidth</code> function was somehow overwriting <code>window.innerWidth</code> property (maybe a compiler issue?)</li>
</ul>
<h2>v3.1.1 <em>(2023-01-04)</em></h2>
<ul>
<li>Fix <code>input-number</code> (could not enter decimals)</li>
<li>Fix <code>input-math</code> (math didn&#39;t work)</li>
</ul>
<h2>v3.1.0 <em>(2023-01-03)</em></h2>
<ul>
<li>UX change: autocomplete will not close on scroll or resize events from now on (it can be changed using new properties <code>hideOnScroll</code> and <code>hideOnResize</code>).</li>
<li>fixed: autocomplete issue, where clicking on a filtered list would not select.</li>
<li>tweak: autocomplete will now show &quot;create new item&quot; always (when enabled), not only when the query did not match anything. Except when the query matches an item exactly.</li>
</ul>
<h2>v3.0.1 (2022-12-30)</h2>
<ul>
<li>autocomplete should revert when entered value is not on the list</li>
</ul>
<h2>v3.0.0 (2022-12-28)</h2>
<ul>
<li>breaking change: <code>cssClass</code> property available on some components has been renamed to <code>className</code> (to be more aligned with the standard workaround in other libs/frameworks).</li>
<li>some components (where possible) are now using <code>$$props</code> to pass-through the properties of the instance down to the component.</li>
</ul>
<h2>v2.1.1 (2022-12-24)</h2>
<ul>
<li>breaking change: <code>dist</code> folder has been renamed to <code>docs</code>, as this is the only allowed name for a GH pages folder so that the GH pages is published automatically (without writing a GH action specifically for this).</li>
</ul>
<h2>v1.7.12</h2>
