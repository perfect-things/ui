<h2>Toggle</h2>
<Toggle on:change="{e => toggleValue = e.detail}" value="{toggleValue}" /> {toggleValue}
<br><br><br>
<Toggle value="{toggleValue}" disabled /> (disabled)

<script>
import { Toggle } from '../../src';

let toggleValue = false;
</script>
