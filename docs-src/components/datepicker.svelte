<h2>Datepicker</h2>

<h3>Normal</h3>
<Datepicker />

<h3>Show on focus</h3>
<Datepicker showOnFocus="true" placeholder="Custom placeholder" />


<h3>In a container with <em>overflow: hidden</em></h3>
<p>Where parent container has <em>overflow: hidden</em>, <em>elevate="true"</em>
	property must be set on the component.</p>
<div class="docs-overflow-box">
	<small>overflow: hidden</small>
	<Datepicker elevate="true" />
</div>
<p>This option should only be used when absolutely necessary (e.g. when Datepicker
	is used inside dialogs/popups), because it makes the component less accessible
	(the list container is rendered directly in the <em>&lt;body&gt;</em>, and not next to the input).</p>


<script>
import { Datepicker } from '../../src';

</script>
