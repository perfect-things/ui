<div class="sticky-block utilities">
	<h2>Utility properties</h2>

	<FocusableSelector/><hr>
	<PrefersDark/><hr>
</div>

<div class="sticky-block utilities">
	<h2>Utility Functions</h2>

	<Animate/><hr>
	<Blink/><hr>

<!--
	<DeepCopy/><hr>
	<Debounce/><hr>
	<Throttle/><hr>
	<Empty/><hr>
	<Fuzzy/><hr>
	<Guid/><hr>
	<GetMouseX/><hr>
	<GetMouseY/><hr>
	<GetMouseXY/><hr>
	<IsMobile/><hr>
	<Pluck/><hr>
	<RoundAmount/><hr>
	<FormatDate/><hr>
	<TimeAgo/><hr>
	<AlignItem/><hr>
	<IsInScrollable/><hr>
-->


</div>


<p>
	<em>*</em> <a href="https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values">
	svelte store variables</a> - when reading the value, add <em>$</em> to the name, e.g.
	<em>$FOCUSABLE_SELECTOR</em>.
</p>


<script>
import FocusableSelector from './prop-focusable-selector.svelte';
import PrefersDark from './prop-prefers-dark.svelte';
import Animate from './fn-animate.svelte';
import Blink from './fn-blink.svelte';
</script>
