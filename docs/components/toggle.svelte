<h2>Toggle</h2>

The perfect toggle component in Svelte:
- allows `click` as well as `drag` to toggle
- keyboard support: press `Enter` or `Space` to toggle
- accessible (based on a checkbox input)
- no bloat, no dependencies


<Toggle on:change="{e => toggleValue = e.detail}" value="{toggleValue}" /> {toggleValue}
<br><br><br>
<Toggle value="{toggleValue}" disabled /> (disabled)

<script>
import { Toggle } from '../../src';

let toggleValue = false;
</script>
