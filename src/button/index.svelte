<button class="button"
	class:link="{link}"
	class:success="{success}"
	class:warning="{warning}"
	class:danger="{danger}"
	disabled="{disabled}">
	<slot></slot>
</button>
<script>
import './button.css';
import './button-link.css';
export let disabled = false;
export let success = false;
export let warning = false;
export let danger = false;
export let link = false;
</script>
