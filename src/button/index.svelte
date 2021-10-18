<button class="button"
	class:link="{link}"
	class:icon="{icon}"
	class:text="{text}"
	class:success="{success}"
	class:warning="{warning}"
	class:danger="{danger}"
	disabled="{disabled}">
	<slot></slot>
</button>
<script>
import './button.css';
import './button-link.css';
import './button-icon.css';
import './button-icon-text.css';
export let disabled = false;
export let success = false;
export let warning = false;
export let danger = false;
export let link = false;
export let icon = false;
export let text = false;
</script>
