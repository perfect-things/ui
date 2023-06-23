<h2>Radio</h2>

<h3>Normal</h3>

<label class="label"><input name="radio-group" type="radio" value="option1" disabled /> option 1 (disabled)</label><br>
<label class="label"><input name="radio-group" type="radio" value="option2" /> option 2</label><br>
<label class="label"><input name="radio-group" type="radio" value="option3" /> option 3</label><br>


<CodeExample html="{exampleHtml}" />


<script>
import { CodeExample } from '../../code-example';

const exampleHtml = `
<input type="radio" name="hello" value="1" on:change="{onChange}" />
<input type="radio" name="hello" value="2" on:change="{onChange}" />

<script>
function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`;

</script>
