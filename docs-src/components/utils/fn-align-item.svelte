<h3 class="util">alignItem (config)</h3>
<p>Aligns an element to another element,
	ensuring that the aligned element remains within the viewport.
</p>
<ul>
	<li><em>config</em> - an object with the configuration (see below).
	<li>Returns <em>position</em> - whether the aligned item is above (top) or below (bottom) the target.
</ul>

<API props="{apiProps}" title="Config object schema"/>

<CodeExample nohr html="{example}" />


<script>
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';


const apiProps = [
	{ name: 'element', type: 'HTMLElement', description: 'main element that will be aligned.' },
	{ name: 'target', type: 'HTMLElement', description: 'target element to align to.' },
	{ name: 'alignH', type: ['left', 'right', 'center'], default: 'left', description: 'Horizontal position' },
	{ name: 'offsetH', type: 'number', default: 0, description: 'horizontal offset of the aligned position (in pixels).' },
	{ name: 'alignV', type: ['top', 'bottom'], default: 'bottom', description: 'Vertical position' },
	{ name: 'offsetV', type: 'number', default: 2, description: 'vertical offset of the aligned position (in pixels).' },
	{ name: 'viewportPadding', type: 'number', default: 10, description: 'padding from the viewport (in pixels).' },
	{ name: 'setMinWidthToTarget', type: 'boolean', default: false, description: 'whether to set the minWidth of the element to the width of the target.' },
];


const example = `
<script>
	const button = document.querySelector('.button1');
	const popup = document.querySelector('.popup1');
	const pos = alignItem({
		element: popup,
		target: button,
		alignH: 'left',
		alignV: 'bottom',
	});
	// it may happen that there is not enough space to align the popup as requested
	// in this case, the popup will be aligned to the opposite side
	console.log('position:', pos); // 'top'
&lt;/script>
`;

</script>
