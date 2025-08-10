<!--
@component ## Label

A form label component with proper accessibility associations.
- Conditional rendering based on label text presence
- Proper for/id association with form inputs
- Disabled state styling support

@example
```svelte
<Label label="Full Name" for="name-input" />
<input id="name-input" type="text" />
```
@see {@link https://ui.perfectthings.dev/#Label Label Docs} for more info.
-->

{#if label}
	<label
		class={['label', className, { disabled }]}
		bind:this={element}
		for={_for}>
			{label}
	</label>
{/if}

<script lang="ts">
import './Label.css';
import type { LabelProps } from './types';


let {
	class: className = '',
	for: _for = '',
	label = '',
	disabled = false,
	element = $bindable(undefined)
}: LabelProps = $props();


</script>
