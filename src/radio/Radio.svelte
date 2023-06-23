<div class="input-radio {className}">
	<input
		class="input-password"
		autocomplete="off"
		type="radio"
		{...props}
		{checked}
		on:input
		on:keydown
		on:change
		on:focus
		on:blur>
</div>
<script>
import { pluck } from '../utils';

$:props = pluck($$props, ['id', 'title', 'name', 'disabled', 'placeholder', 'required']);


let className = '';
export { className as class };

export let checked = false;



</script>
