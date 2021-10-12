<h2>Autocomplete</h2>
<Autocomplete data="{autocompleteData}" bind:value="{autocompleteValue}" />
Selected value: {autocompleteValue.name || ''}


<h2>Select</h2>
<Select items="{selectItems}"/>

<h2>Modal</h2>
<Modal bind:this="{modal}" title="Hello">
	Modal contents
	<button type="button" on:click="{() => modal.close()}">Close</button>
	<textarea></textarea>
	<button>button</button>
</Modal>
<button on:click="{() => modal.open()}">Show modal</button>


<h2>Toaster</h2>
<Toaster position="bottom" />
<button on:click="{() => showToast('Hello')}">Show info</button>
<button on:click="{() => showToast('Hello', 'warning')}">Show warning</button>
<button on:click="{() => showToast('Hello', 'error', 100000, 'Undo', cb)}">Show error</button>
<button on:click="{() => showToast('Hello', 'error', 10000, 'Undo', cb)}">Show error</button>


<h2>Toggle</h2>
<Toggle on:change="{e => toggleValue = e.detail}" value="{toggleValue}" /> {toggleValue}<br><br>
<Toggle value="{toggleValue}" disabled /> (disabled)


<h2>Text-fit</h2>
<input type="text" bind:value="{textFitText}">
<div class="text-fit-div" style="width: 100px"><TextFit>{textFitText}</TextFit></div>
<div class="text-fit-div" style="width: 200px"><TextFit>{textFitText}</TextFit></div>
<div class="text-fit-div" style="width: 300px"><TextFit>{textFitText}</TextFit></div>



<script>
import Autocomplete from './autocomplete';
import Modal from './modal';
import Select from './select';
import Toggle from './toggle';
import TextFit from './text-fit';
import Toaster, { showToast, hideToast } from './toaster';

let autocompleteValue = [];
const autocompleteData = [
	{id: 'Alpha', name: 'Alpha'},
	{id: 'Beta', name: 'Beta'},
	{id: 'Gamma', name: 'Gamma'},
	{id: 'Delta', name: 'Delta'},
	{id: 'Epsilon', name: 'Epsilon'},
	{id: 'Zeta', name: 'Zeta'},
	{id: 'Eta', name: 'Eta'},
	{id: 'Theta', name: 'Theta'},
	{id: 'Iota', name: 'Iota'},
	{id: 'Kappa', name: 'Kappa'},
	{id: 'Lambda', name: 'Lambda'},
];

const selectItems = autocompleteData;

let modal;

let toggleValue = false;

let textFitText = 'My Lovely Text';

function cb (id) {
	console.log(id);
	hideToast(id);
}

</script>
