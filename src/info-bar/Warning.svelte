<InfoBar class="{className}" {id} {msg} type="warning" bind:element="{element}"/>

<script>
import InfoBar from './InfoBar.svelte';

let className = '';
export { className as class };

export let element = undefined;
export let id = undefined;
export let msg = '';

</script>
