<style>
.text-fit-div {
	border: 1px solid red;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	resize: horizontal;
}
</style>
<h2>Text-fit</h2>
<input type="text" bind:value="{textFitText}">
<div class="text-fit-div" style="width: 100px"><TextFit>{textFitText}</TextFit></div>
<div class="text-fit-div" style="width: 200px"><TextFit>{textFitText}</TextFit></div>
<div class="text-fit-div" style="width: 300px"><TextFit>{textFitText}</TextFit></div>



<script>
import TextFit from '../../src/text-fit';
let textFitText = 'My Lovely Text';

</script>
