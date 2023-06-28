<InfoBar class="{className}" {id} {msg} type="error" />

<script>
import InfoBar from './InfoBar.svelte';

let className = '';
export { className as class };

export let id = undefined;
export let msg = '';

</script>
