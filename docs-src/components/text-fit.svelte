<h2>Text-fit</h2>
<p>Auto-adjusts font size of the block of text, so that the text takes full width of the block.</p>
<p>This is using matrix transformation, so the text will not be super sharp.<br>
	It is advised to set the <em>font-size</em> (on the parent or the component itself) that is closest to the average size of the text.</p>

<hr>

<input type="text" bind:value="{textFitText}">
<div class="text-fit-div" style="width: 100px"><TextFit>{textFitText}</TextFit></div>
<div class="text-fit-div" style="width: 200px"><TextFit>{textFitText}</TextFit></div>
<div class="text-fit-div" style="width: 300px"><TextFit>{textFitText}</TextFit></div>


<CodeExample html="{exampleHtml}" />
<API props="{apiProps}"/>

<script>
import { TextFit } from '../../src';
import { API } from '../api-table';
import { CodeExample } from '../code-example';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'margin', type: 'number', default: '0', description: 'Margin around the text (in px).' },
];

const exampleHtml = `
<TextFit>Some text</TextFit>
`;


let textFitText = 'My Lovely Text';

</script>
