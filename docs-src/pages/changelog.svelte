<h1>Changelog</h1>


<h2>v6.0.0, v6.0.1, v6.0.2 <small>(2023-03-13)</small></h2>
<ul>
	<li>rebrand <em>simple-ui-components-in-svelte</em> to <em>@perfectthings/ui</em>
</ul>

<h2>v5.1.0 <small>(2023-03-12)</small></h2>
<ul>
	<li>Better Menu highlighting (doesn't highlight first item on open, mouseout removes the highlighting), inline with how native menus work on MacOS
	<li>Mobile friendlier buttons (touchstart invokes <em>:active</em> styling)
	<li>unit tests for some components
	<li>changelog page in docs
</ul>

<h2>v5.0.8 <small>(2023-03-03)</small></h2>
<ul>
	<li>Tooltip offset parameter
</ul>

<h2>v5.0.7 <small>(2023-03-03)</small></h2>
<ul>
	<li>PushButton fix (pushed class was not applied)
</ul>

<h2>v5.0.6 <small>(2023-03-02)</small></h2>
<ul>
	<li>Add back <em>form</em> property to a button
</ul>

<h2>v5.0.5 <small>(2023-03-02)</small></h2>
<ul>
	<li>Reduce memory footprint (removed some of the <em>transform</em> props that were no longer necessary)
</ul>

<h2>v5.0.4 <small>(2023-03-02)</small></h2>
<ul>
	<li>esbuild replaced rollup for speed and simplicity
	<li>cleanup & refactoring
</ul>

<h2>v5.0.3 <small>(2023-03-01)</small></h2>
<ul>
	<li>Tooltip hiding fix (wasn't hiding when hovering target)
</ul>

<h2>v5.0.2 <small>(2023-03-01)</small></h2>
<ul>
	<li>Toaster import fix
	<li>Tooltip fix (some console errors were popping up)
</ul>

<h2>v5.0.1 <small>(2023-02-28)</small></h2>
<ul>
	<li>Bring back <em>button-outline.css</em> (it was accidentally deleted in v5.0.0)
</ul>


<h2>v5.0.0 <small>(2023-02-28)</small></h2>
<ul>
	<li>Breaking change: renamed props for all components: <em>className</em> -> <em>class</em> (as it turns out it is possible to use <em>class</em> as a prop name in svelte)
	<li>Almost all components now have a <em>class</em> prop, which can be used to add custom classes to the component
	<li>Updated docs to reflect the above changes
	<li>Docs API table is now alphabetically sorted
	<li>Components don't use <em>$$props</em> anymore, as it was causing issues with the <em>class</em> prop. Instead, the props are now explicitly passed down to the component. This is a good thing to do, as it makes the components more explicit and easier to understand.
</ul>


<h2>v4.0.0 <small>(2023-02-28)</small></h2>
<ul>
	<li>Breaking change: renamed components: <em>Item</em> -> <em>MenuItem</em>, <em>Separator</em> -> <em>MenuSeparator</em>
	<li>Refactored the folder structure
</ul>


<h2>v3.1.2 <small>(2023-01-04)</small></h2>
<ul>
	<li>Toggle's <em>innerWidth</em> function was somehow overwriting <em>window.innerWidth</em> property (maybe a compiler issue?)
</ul>


<h2>v3.1.1 <small>(2023-01-04)</small></h2>
<ul>
	<li>Fix <em>input-number</em> (could not enter decimals)
	<li>Fix <em>input-math</em> (math didn't work)
</ul>


<h2>v3.1.0 <small>(2023-01-03)</small></h2>
<ul>
	<li>UX change: autocomplete will not close on scroll or resize events from now on (it can be changed using new properties <em>hideOnScroll</em> and <em>hideOnResize</em>).
	<li>fixed: autocomplete issue, where clicking on a filtered list would not select.
	<li>tweak: autocomplete will now show "create new item" always (when enabled), not only when the query did not match anything. Except when the query matches an item exactly.
</ul>


<h2>v3.0.1 <small>(2022-12-30)</small></h2>
<ul>
	<li>autocomplete should revert when entered value is not on the list
</ul>

<h2>v3.0.0 <small>(2022-12-28)</small></h2>
<ul>
	<li>breaking change: <em>cssClass</em> property available on some components has been renamed to <em>className</em> (to be more aligned with the standard workaround in other libs/frameworks).
	<li>some components (where possible) are now using <em>$$props</em> to pass-through the properties of the instance down to the component.
</ul>

<h2>v2.1.1 <small>(2022-12-24)</small></h2>
<ul>
	<li>breaking change: <em>dist</em> folder has been renamed to <em>docs</em>, as this is the only allowed name for a GH pages folder so that the GH pages is published automatically (without writing a GH action specifically for this).
</ul>

<h2>v1.7.12 <small>(2022-12-01)</small></h2>
