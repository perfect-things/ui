<h1>Changelog</h1>
<h2>v8.4.1, v8.4.0 <em>(2023-08-24)</em></h2>
<ul>
<li><strong>New:</strong> <code>Popover</code> component. If a <code>Dialog</code> and <code>Tooltip</code> had a child - this would be it. It&#39;s a container that can be opened like a dialog, but will be attached to the target element (like a tooltip). It&#39;s a great way to display additional information or actions for a specific element on the page. It can contain other components (e.g. buttons) and can serve as a free-form menu.</li>
<li>Fix popover above the target styling.</li>
</ul>
<h2>v8.3.3 <em>(2023-08-19)</em></h2>
<ul>
<li>Inputs with dropdowns (e.g. <code>Combobox</code> and <code>InputDate</code>) will not trigger page scroll on focus (in mobile Safari).</li>
<li><code>Combobox</code> dropdown will now auto-adjust its position when the virtual keyboard opens (in mobile Safari).</li>
<li><code>:focus</code> has been updated to <code>:focus-visible</code> for non-input elements, for a better look.</li>
</ul>
<h2>v8.3.2 <em>(2023-08-18)</em></h2>
<ul>
<li>Improve <code>InputRadio</code> styling to look more like the rest of the inputs (e.g. checkbox).</li>
<li>Standardise font sizes into css variables: <code>--ui-font-xs</code>=14px, <code>--ui-font-s</code>=15px, <code>--ui-font-m</code>=16px, <code>--ui-font-l</code>=17px, <code>--ui-font-xl</code>=22px</li>
<li>Correct the symbol for Return (⏎) in <code>Menu</code>.</li>
<li><code>Menu</code> can now be centered with the target button (using <code>align</code> attribute).</li>
<li>Context <code>Menu</code> will now open above the long-pressed spot on mobile (by default).</li>
<li>Pressing the same letter key, with the <code>Menu</code> open will now cycle through the items starting with that letter.</li>
<li>Pressing space with the <code>Menu</code> open, while typing something quickly, will not trigger the click event on the currently selected item. This allows to type-to-highlight elements that contain space in the text. Pressing space standalone (while not typing), will trigger the click event.</li>
</ul>
<h2>v8.3.1 <em>(2023-08-14)</em></h2>
<ul>
<li>Removed <code>--ui-margin-xl</code> and <code>--ui-margin-xxl</code> as they were not used.</li>
<li>Merged <code>--ui-border-radius-s</code> with <code>--ui-border-radius</code> and changed to a rem value that calculates to the whole pixel (so that browsers would render it better).</li>
<li>Fixed the <code>NotificationCenter</code> issue, where toasts would not close if navigated away from the page that initialises the component.</li>
<li>Tweaked dialog border-radius to render a bit better (for dialog&#39;s header and footer).</li>
<li>Aligned components heights (<code>Menu</code>, <code>Combobox</code>, and <code>InputRadio</code> items).</li>
<li>Fixed <code>Menu</code>&#39;s longpress event to not triger when moving the finger (touchmove should stop longpress).</li>
<li>Improve navigation swipe event (swiping can now be triggered by any element that is not scrollable and has no scrollable ancestors).</li>
<li>Increased <code>Menu</code> font size slightly, while decreasing it for everything (102% -&gt; 100% on <code>body</code>).</li>
</ul>
<h2>v8.3.0 <em>(2023-08-11)</em></h2>
<ul>
<li><strong>New:</strong> <code>InputSearch</code> component. Not much more than <code>InputText</code>, except the search icon and (depending on the browser) - the clear button.</li>
<li>Fixed a weird and edge-case issue with <code>Menu</code> on mobile Safari (#119).</li>
</ul>
<h2>v8.2.0 <em>(2023-08-08)</em></h2>
<ul>
<li><code>data</code> attribute in <code>Combobox</code> is deprecated. It will be removed in the next major version. Use <code>items</code> instead.</li>
<li><code>Combobox</code> and <code>Menu</code> now use the same align function (for consistency and performance) and there&#39;s no need to add <code>elevate</code> attribute to either of them, as both popups are rendered inside the <code>body</code> element and are only added to the DOM, when they are opened (to avoid polluting the DOM with unnecessary elements).</li>
</ul>
<h2>v8.1.4 <em>(2023-07-31)</em></h2>
<ul>
<li>Improved <code>PushButton</code> pressed styling.</li>
<li>Some buttons should now react faster on mobile (touch-action added to notification buttons and all inputs, selects and textareas).</li>
</ul>
<h2>v8.1.3 <em>(2023-07-30)</em></h2>
<ul>
<li><code>PushButton</code> now has better contrast (when pressed).</li>
<li>Fixed <code>showMessage</code> style for long messages on mobile.</li>
<li>Fixed password strength popup style.</li>
<li>Docs: fancy font should be applied do docs only, not to the components.</li>
<li>Docs: try swipeRight on mobile to open sidebar.</li>
<li>Added touch-action: manipulation to <code>Label</code> and some other missing places.</li>
</ul>
<h2>v8.1.2 <em>(2023-07-29)</em></h2>
<ul>
<li>Small table style tweaks</li>
<li>Docs improvements</li>
</ul>
<h2>v8.1.1 <em>(2023-07-28)</em></h2>
<ul>
<li>Bring back <code>--ui-color-accent-semi</code> and <code>--ui-color-highlight-semi</code> colors.</li>
<li><code>Combobox</code> and <code>InputDate</code> buttons should not be tabbable.</li>
<li><code>Combobox</code> and <code>InputDate</code> buttons should toggle the dropdown on click.</li>
</ul>
<h2>v8.1.0 <em>(2023-07-28)</em></h2>
<ul>
<li><strong>New:</strong> All inputs have a new attribute <code>labelOnTheLeft</code> which allows to move the label to the left of the input.</li>
</ul>
<h2>v8.0.1 <em>(2023-07-26)</em></h2>
<ul>
<li><strong>New:</strong> Check the platform on load and add a <code>mobile</code> or <code>desktop</code> class to the <code>html</code> element.</li>
<li>Fixed: Menu separator is now aligned with menu items.</li>
<li>Fixed: Notifications Archive &quot;Clear all&quot; button is now back to normal.</li>
</ul>
<h2>v8.0.0 <em>(2023-07-25)</em></h2>
<ul>
<li><strong>New:</strong> <code>Label</code> component.</li>
<li><strong>New icons:</strong> <code>sun</code> and <code>moon</code> for the dark-theme switchers.</li>
<li><strong>Improvement:</strong> <code>info</code>, <code>error</code> and <code>label</code> attributes are now supported on other inputs (<code>Combobox</code>, <code>InputDate</code>, <code>Select</code>, <code>ButtonToggle</code>, and <code>Toggle</code>).</li>
<li><strong>Improvement:</strong> all components now expose <code>element</code> and <code>inputElement</code> (if there is one (and only one)). The exceptions are <code>NotificationCenter</code> and <code>MessageBox</code>, due to their implementation.</li>
<li>Added <code>title</code> attribute to <code>ButtonToggle</code>.</li>
<li>Added <code>success</code> type for <code>MessageBox</code>.</li>
<li>Fixed <code>selectable=false</code> not working on <code>Table</code>.</li>
<li>Improved styling for <code>Dialog</code> and <code>MessageBox</code>.</li>
</ul>
<h3>Breaking changes</h3>
<ul>
<li>Color palette has been completely revamped for better accessibility (more contrast), consistency and simplicity (fewer colors and css variables).</li>
<li><code>Autocomplete</code> has been renamed to <code>Combobox</code> as this is what it really is.</li>
<li><code>Datepicker</code> has been renamed to <code>InputDate</code>.</li>
<li><code>Toaster</code> component has been removed. Use <code>NotificationCenter</code> instead.</li>
<li><code>Select</code> - HTML structure has changed: <code>.select-wrap select</code> --&gt; <code>.select .input-inner .input-row select</code></li>
<li><code>Table</code> - CSS classes have changed from <code>.table-wrapper table.table</code> --&gt; <code>.table table</code></li>
<li><code>Toggle</code> - HTML structure has changed from <code>.toggle .toggle-inner .toggle-scroller input</code> --&gt; <code>.toggle .toggle-inner .toggle-label .toggle-scroller input</code></li>
<li><code>drawBorders</code> attribute has been removed from <code>Dialog</code>, while header and footer styling has been improved for all dialogs.</li>
<li>These components previously exposed <code>_this</code>, which is now called <code>element</code>: <code>Button</code>, <code>Checkbox</code>, <code>InputMath</code>, <code>PushButton</code>, <code>Table</code></li>
</ul>
<h3>Color palette - mapping from v7 to v8 colors:</h3>
<ul>
<li><code>--ui-color-text-dark-1</code> --&gt; <code>--ui-color-text-1</code></li>
<li><code>--ui-color-text-dark-2</code> --&gt; <code>--ui-color-text-2</code></li>
<li><code>--ui-color-border-dark-1</code> --&gt; <code>--ui-color-border-1</code></li>
<li><code>--ui-color-border-dark-2</code> --&gt; <code>--ui-color-border-2</code></li>
<li><code>--ui-color-background-light-2</code> --&gt; <code>--ui-color-background-1</code></li>
<li><code>--ui-color-background-dark-2</code> --&gt; <code>--ui-color-background-2</code></li>
<li><code>--ui-color-highlight-dark-2</code> --&gt; <code>--ui-color-highlight-1</code></li>
</ul>
<p>Other (not mentioned above) color variations, (i.e. <code>-light-</code> and <code>-dark-</code>) have been removed.</p>
<hr>
<h2>v7.1.2 <em>(2023-07-05)</em></h2>
<ul>
<li>Fix <code>Checkbox</code> label (don&#39;t render empty label if no label attribute was passed).</li>
</ul>
<h2>v7.1.1 <em>(2023-07-01)</em></h2>
<ul>
<li>Fixed some <code>NotificationCenter</code> bugs.</li>
</ul>
<h2>v7.1.0 <em>(2023-06-30)</em></h2>
<ul>
<li>Improve <code>Panel</code> component with new properties: <code>collapsible</code> (it&#39;s not collapsible by default), and <code>disabled</code>.</li>
</ul>
<h2>v7.0.2 <em>(2023-06-29)</em></h2>
<ul>
<li>Add <code>success</code> to the <code>InfoBar</code> component.</li>
<li>Behind the scenes refactoring and improvements.</li>
</ul>
<h2>v7.0.1 <em>(2023-06-28)</em></h2>
<ul>
<li><code>Textarea</code> component now follows all basic inputs and support <code>error</code>, <code>info</code>, and <code>label</code> properties.</li>
<li>Notifications are now centered on mobile screen sizes.</li>
</ul>
<h2>v7.0.0 <em>(2023-06-28)</em></h2>
<ul>
<li><strong>New:</strong> <a href="#InfoBar">InfoBar</a> component.</li>
<li><strong>New:</strong> <a href="#InputText">InputText</a>, <a href="#InputNumber">InputNumber</a>, and <a href="#Radio">Radio</a> components.</li>
<li><strong>New:</strong> <code>info</code>, <code>error</code> and <code>label</code> attributes are now supported on all basic inputs (<code>InputText</code>, <code>InputNumber</code>, <code>InputMath</code>, <code>InputPassword</code>, <code>Radio</code>, and <code>Checkbox</code>).</li>
<li><strong>Improved:</strong> <code>InputMath</code> component: support for <code>()</code> characters, to allow for more complex expressions.</li>
</ul>
<h3>Breaking changes</h3>
<h4>Checkbox</h4>
<ul>
<li>HTML structure changed <code>input</code> --&gt; <code>.checkbox .checkbox-row input</code></li>
<li><code>on:change</code> is called with a svelte event instead of the native one, so: <code>e.target.checked</code> is now <code>e.detail.checked</code></li>
</ul>
<h4>InputMath</h4>
<ul>
<li>HTML structure changed <code>.input-math-wrapper input</code> --&gt; <code>.input-math .input-inner .input-math-row input</code></li>
</ul>
<h4>InputNumber:</h4>
<ul>
<li>HTML structure changed: <code>input</code> --&gt; <code>.input-number .input-inner input</code></li>
</ul>
<h4>InputPassword</h4>
<ul>
<li>HTML structure changed: <code>.input-password-wrapper .input-password-row input</code> --&gt; <code>.input-password .input-inner .input-password-row input</code></li>
</ul>
<h4>CSS variables changed:</h4>
<ul>
<li><code>--ui-shadow-invalid</code> --&gt; <code>--ui-shadow-danger</code></li>
</ul>
<hr>
<h2>v6.8.1, v6.8.2 <em>(2023-06-21)</em></h2>
<ul>
<li>Allow HTML in <code>MessageBox</code>.</li>
<li>Improve styling for multi-line messages in <code>MessageBox</code>.</li>
</ul>
<h2>v6.8.0 <em>(2023-06-17)</em></h2>
<ul>
<li><strong>New:</strong> <code>MessageBox</code> component for displaying quick info/warning/error messages or confirmation dialogs (replacement for browser&#39;s native <code>alert</code> and <code>confirm</code>).</li>
</ul>
<h2>v6.7.1 <em>(2023-06-13)</em></h2>
<ul>
<li>Fix <code>Menu</code> show and hide events and clearing the highlight on mouse out.</li>
</ul>
<h2>v6.7.0 <em>(2023-06-13)</em></h2>
<ul>
<li><strong>New:</strong> <code>NotificationCenter</code> component. This will eventually replace <code>Toaster</code>, as it&#39;s more accessible and powerful.</li>
<li><code>Toaster</code> component is now <strong>deprecated</strong> and will be removed in the next major version.</li>
<li><code>PushButton</code> changes:<ul>
<li>remove <code>link</code> and <code>text</code> types, as they don&#39;t make sense (pushed state would not be visible).</li>
<li>fix <code>outline</code> type styling.</li>
<li>update the event passed to the <code>on:change</code> callback (rename property from <code>event.detail.value</code> to <code>event.detail.pressed</code>).</li>
<li>fix <code>PushButton</code> keyboard events (pressing Space or Enter would not trigger the <code>on:change</code> event).</li>
</ul>
</li>
</ul>
<h2>v6.6.8 <em>(2023-06-07)</em></h2>
<ul>
<li><code>Menu</code> improvements:<ul>
<li><code>aria-expanded</code> attribute was incorrectly being added to the <code>body</code> on menu open (apart from the target button).</li>
<li>Tabbing does not move focus out of the menu anymore (it will cycle through the menu items).</li>
<li>simplify html structure (<code>ul</code> -&gt; <code>menu</code>, <code>li/button</code> -&gt; <code>button</code>)</li>
</ul>
</li>
</ul>
<h2>v6.6.7 <em>(2023-06-01)</em></h2>
<ul>
<li><code>Toaster</code> enhancements:<ul>
<li>Improve contrast (reduce the transparency).</li>
<li>Make toasts focusable (so that they can be closed with <code>Escape</code>).</li>
<li>When toasts are focused or mouse is over them, the auto-close progress will pause.</li>
</ul>
</li>
</ul>
<h2>v6.6.6 <em>(2023-05-31)</em></h2>
<ul>
<li>Fix <code>button-toggle</code> not working on mobile.</li>
</ul>
<h2>v6.6.4, v6.6.5 <em>(2023-05-12)</em></h2>
<ul>
<li>Bring back <code>--ui-shadow-small</code> property.</li>
<li><code>Menu</code> performance improvements: menu will not be rendered until it&#39;s opened.</li>
</ul>
<h2>v6.6.0, v6.6.1, v6.6.2, v6.6.3 <em>(2023-05-11)</em></h2>
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
<hr>
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
<hr>
<h2>v4.0.0 <em>(2023-02-28)</em></h2>
<ul>
<li>Breaking change: renamed components: <code>Item</code> -&gt; <code>MenuItem</code>, <code>Separator</code> -&gt; <code>MenuSeparator</code></li>
<li>Refactored the folder structure</li>
</ul>
<hr>
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
<hr>
<h2>v2.1.1 (2022-12-24)</h2>
<ul>
<li>breaking change: <code>dist</code> folder has been renamed to <code>docs</code>, as this is the only allowed name for a GH pages folder so that the GH pages is published automatically (without writing a GH action specifically for this).</li>
</ul>
<hr>
<h2>v1.7.12</h2>
