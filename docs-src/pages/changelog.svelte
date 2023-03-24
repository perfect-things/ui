<h1 id="changelog">Changelog</h1>
<h2 id="v628-2023-03-24">v6.2.8 <em>(2023-03-24)</em></h2>
<ul>
<li>move tooltip custom class attribute to the tooltip itself, not the content (so that it can easily overwrite the background color).</li>
</ul>
<h2 id="v627-2023-03-24">v6.2.7 <em>(2023-03-24)</em></h2>
<ul>
<li>revert some tooltip changes (<code>events</code> prop is actually useful)</li>
</ul>
<h2 id="v626-2023-03-24">v6.2.6 <em>(2023-03-24)</em></h2>
<ul>
<li>simplify tooltip (change bg color to <code>accent</code>, drop <code>events</code> prop and default to focus + hover)</li>
</ul>
<h2 id="v625-2023-03-24">v6.2.5 <em>(2023-03-24)</em></h2>
<ul>
<li>disable svelte false-positive a11y warnings. See <a href="https://github.com/sveltejs/svelte/pull/8402">svelte#8402</a></li>
</ul>
<h2 id="v624-2023-03-24">v6.2.4 <em>(2023-03-24)</em></h2>
<ul>
<li>update table docs (missing <code>data</code> prop)</li>
<li>change button&#39;s <code>active</code> class to <code>touching</code> for touch events (to not conflict with popular <code>active</code> class name that may be used by consumers)</li>
</ul>
<h2 id="v622-v623-2023-03-24">v6.2.2, v6.2.3 <em>(2023-03-24)</em></h2>
<ul>
<li>Fix issue where a selectable table would become non-selectable if another table on the same page was destroyed.</li>
</ul>
<h2 id="v621-2023-03-23">v6.2.1 <em>(2023-03-23)</em></h2>
<ul>
<li>Datepicker should stopPropagation on Escape, when the calendar is open.</li>
</ul>
<h2 id="v620-2023-03-20">v6.2.0 <em>(2023-03-20)</em></h2>
<ul>
<li>Review accessibility of all components (added <code>aria-</code> roles and attributes where necessary).</li>
<li>Tweaked some components (e.g. close Tooltip on Escape)</li>
<li>Added unit tests for all components.</li>
<li>Docs pages style tweaks (e.g. color palette)</li>
</ul>
<h2 id="v611-2023-03-15">v6.1.1 <em>(2023-03-15)</em></h2>
<ul>
<li>Remove <code>coverage</code> folder from the npm package.</li>
</ul>
<h2 id="v610-2023-03-15">v6.1.0 <em>(2023-03-15)</em></h2>
<ul>
<li><code>Toggle</code> component has been completely rewritten to make it more flexible and perfect.</li>
</ul>
<h2 id="v600-v601-v602-2023-03-13">v6.0.0, v6.0.1, v6.0.2 <em>(2023-03-13)</em></h2>
<ul>
<li>rebrand <code>simple-ui-components-in-svelte</code> to <code>@perfectthings/ui</code></li>
</ul>
<h2 id="v510-2023-03-12">v5.1.0 <em>(2023-03-12)</em></h2>
<ul>
<li>Better Menu highlighting (doesn&#39;t hl first item on open, mouseout removes the highlighting), inline with how native menus work on MacOS</li>
<li>Mobile friendlier buttons (touchstart invokes :active styling)</li>
<li>unit tests for some components</li>
</ul>
<h2 id="v508-2023-03-03">v5.0.8 <em>(2023-03-03)</em></h2>
<ul>
<li>Tooltip offset parameter</li>
</ul>
<h2 id="v507-2023-03-03">v5.0.7 <em>(2023-03-03)</em></h2>
<ul>
<li>PushButton fix (pushed class was not applied)</li>
</ul>
<h2 id="v506-2023-03-02">v5.0.6 <em>(2023-03-02)</em></h2>
<ul>
<li>Add back <code>form</code> property to a button</li>
</ul>
<h2 id="v505-2023-03-02">v5.0.5 <em>(2023-03-02)</em></h2>
<ul>
<li>Reduce memory footprint (removed some of the <code>transform</code> props that were no longer necessary)</li>
</ul>
<h2 id="v504-2023-03-02">v5.0.4 <em>(2023-03-02)</em></h2>
<ul>
<li>esbuild replaced rollup for speed and simplicity</li>
<li>cleanup &amp; refactoring</li>
</ul>
<h2 id="v503-2023-03-01">v5.0.3 <em>(2023-03-01)</em></h2>
<ul>
<li>Tooltip hiding fix (wasn&#39;t hiding when hovering target)</li>
</ul>
<h2 id="v502-2023-03-01">v5.0.2 <em>(2023-03-01)</em></h2>
<ul>
<li>Toaster import fix</li>
<li>Tooltip fix (some console errors were popping up)</li>
</ul>
<h2 id="v501-2023-02-28">v5.0.1 <em>(2023-02-28)</em></h2>
<ul>
<li>Bring back <code>button-outline.css</code> (it was accidentally deleted in v5.0.0)</li>
</ul>
<h2 id="v500-2023-02-28">v5.0.0 <em>(2023-02-28)</em></h2>
<ul>
<li>Breaking change: renamed props for all components: <code>className</code> -&gt; <code>class</code> (as it turns out it is possible to use <code>class</code> as a prop name in svelte)</li>
<li>Almost all components now have a <code>class</code> prop, which can be used to add custom classes to the component</li>
<li>Updated docs to reflect the above changes</li>
<li>Docs API table is now alphabetically sorted</li>
<li>Components don&#39;t use <code>$$props</code> anymore, as it was causing issues with the <code>class</code> prop. Instead, the props are now explicitly passed down to the component. This is a good thing to do, as it makes the components more explicit and easier to understand.</li>
</ul>
<h2 id="v400-2023-02-28">v4.0.0 <em>(2023-02-28)</em></h2>
<ul>
<li>Breaking change: renamed components: <code>Item</code> -&gt; <code>MenuItem</code>, <code>Separator</code> -&gt; <code>MenuSeparator</code></li>
<li>Refactored the folder structure</li>
</ul>
<h2 id="v312-2023-01-04">v3.1.2 <em>(2023-01-04)</em></h2>
<ul>
<li>Toggle&#39;s <code>innerWidth</code> function was somehow overwriting <code>window.innerWidth</code> property (maybe a compiler issue?)</li>
</ul>
<h2 id="v311-2023-01-04">v3.1.1 <em>(2023-01-04)</em></h2>
<ul>
<li>Fix <code>input-number</code> (could not enter decimals)</li>
<li>Fix <code>input-math</code> (math didn&#39;t work)</li>
</ul>
<h2 id="v310-2023-01-03">v3.1.0 <em>(2023-01-03)</em></h2>
<ul>
<li>UX change: autocomplete will not close on scroll or resize events from now on (it can be changed using new properties <code>hideOnScroll</code> and <code>hideOnResize</code>).</li>
<li>fixed: autocomplete issue, where clicking on a filtered list would not select.</li>
<li>tweak: autocomplete will now show &quot;create new item&quot; always (when enabled), not only when the query did not match anything. Except when the query matches an item exactly.</li>
</ul>
<h2 id="v301-2022-12-30">v3.0.1 (2022-12-30)</h2>
<ul>
<li>autocomplete should revert when entered value is not on the list</li>
</ul>
<h2 id="v300-2022-12-28">v3.0.0 (2022-12-28)</h2>
<ul>
<li>breaking change: <code>cssClass</code> property available on some components has been renamed to <code>className</code> (to be more aligned with the standard workaround in other libs/frameworks).</li>
<li>some components (where possible) are now using <code>$$props</code> to pass-through the properties of the instance down to the component.</li>
</ul>
<h2 id="v211-2022-12-24">v2.1.1 (2022-12-24)</h2>
<ul>
<li>breaking change: <code>dist</code> folder has been renamed to <code>docs</code>, as this is the only allowed name for a GH pages folder so that the GH pages is published automatically (without writing a GH action specifically for this).</li>
</ul>
<h2 id="v1712">v1.7.12</h2>
