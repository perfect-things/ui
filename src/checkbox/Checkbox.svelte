<input
	type="checkbox"
	class="checkbox {className}"
	class:indeterminate
	{...props}
	bind:this="{_this}"
	bind:checked="{checked}"
	bind:indeterminate="{indeterminate}"
	on:focus
	on:change>


<script>
import { pluck } from '../utils';
export let _this = undefined;
export let indeterminate = false;
export let checked = false;
let className = '';
export { className as class };


$:props = pluck($$props, ['id', 'title', 'name', 'disabled', 'required']);

</script>
