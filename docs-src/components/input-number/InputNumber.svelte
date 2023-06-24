<h2>Input Number</h2>


<h3>Native input</h3>
<input type="number" />

<h3>Better InputNumber</h3>
<p>Only allows numbers, a single dot (for decimals) and the minus sign (which is only allowed as a first character)</p>
<InputNumber label="Enter amount" />



<CodeExample html="{exampleHtml}" />


<script>
import { InputNumber } from '../../../src';
import { CodeExample } from '../../code-example';

const exampleHtml = `
<InputNumber label="Enter amount"/>
`;
</script>
