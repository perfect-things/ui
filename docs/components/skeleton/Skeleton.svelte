<h2>Skeleton</h2>

<p>Animated placeholder for loading states.</p>


<h3>Skeleton Shapes</h3>

<h4>Rectangle</h4>
<SkeletonRect width={200} height={100} />

<h4>Circle</h4>
<SkeletonCircle size={60} />

<h4>Text</h4>
<SkeletonText size={3} />

<h4>Image</h4>
<SkeletonImage />



<h3>Skeleton Layouts</h3>

<h4>SkeletonHStack</h4>
<SkeletonHStack>
	<SkeletonCircle />
	<SkeletonCircle />
	<SkeletonCircle />
	<SkeletonCircle />
</SkeletonHStack>


<h4>SkeletonVStack</h4>
<SkeletonVStack>
	<SkeletonCircle />
	<SkeletonCircle />
	<SkeletonCircle />
</SkeletonVStack>


<h4>SkeletonGrid</h4>
<SkeletonGrid size={120}>
	<SkeletonRect height={100} />
	<SkeletonRect height={100} />
	<SkeletonRect height={100} />
	<SkeletonRect height={100} />
	<SkeletonRect height={100} />
	<SkeletonRect height={100} />
	<SkeletonRect height={100} />
	<SkeletonRect height={100} />
</SkeletonGrid>


<h3>Custom build</h3>

<h4>Cards list</h4>
<SkeletonVStack class="skeleton-cards">
	<SkeletonHStack>
		<SkeletonCircle />
		<SkeletonText size={3} />
	</SkeletonHStack>
	<SkeletonHStack>
		<SkeletonCircle />
		<SkeletonText size={3} />
	</SkeletonHStack>
</SkeletonVStack>


<h4>Cards grid</h4>
{#snippet card()}
	<SkeletonVStack>
		<SkeletonHStack>
			<SkeletonImage width="3.9em" height="3.9em" />
			<SkeletonText size={3} />
		</SkeletonHStack>
		<SkeletonText size={3} />
	</SkeletonVStack>
{/snippet}

<SkeletonGrid class="skeleton-cards">
	{@render card()}
	{@render card()}
	{@render card()}
	{@render card()}
	{@render card()}
	{@render card()}
</SkeletonGrid>



<Code>{`
<SkeletonRect width={200} height={100} />
<SkeletonCircle width={60} />
<SkeletonText size={3} />
<SkeletonImage />

<SkeletonHStack>
    <SkeletonCircle />
    <SkeletonCircle />
    <SkeletonCircle />
    <SkeletonCircle />
</SkeletonHStack>

<SkeletonVStack>
    <SkeletonCircle />
    <SkeletonCircle />
    <SkeletonCircle />
</SkeletonVStack>

<SkeletonGrid size={120}>
    <SkeletonRect height={100} />
    <SkeletonRect height={100} />
    <SkeletonRect height={100} />
    <SkeletonRect height={100} />
</SkeletonGrid>

`}</Code>


<API props={shapeProps} title="Skeleton Shape" description="" />

<script lang="ts">
import './Skeleton.css';
import type { ApiProp } from '../../api-table/types';
import { API, PROPS } from '../../api-table';
import { Code } from '../../code-example';

import { SkeletonRect, SkeletonCircle, SkeletonText, SkeletonImage, SkeletonHStack, SkeletonVStack, SkeletonGrid } from '../../../src';


const shapeProps = <ApiProp[]>[
	PROPS.class,
	{ name: 'size', type: 'number', description: 'Shape-specific count (lines of text / size of the circle).' },
	{ name: 'width', type: 'number | string', description: 'Width of the shape. Can be a number (pixels) or a string (any CSS unit).' },
	{ name: 'height', type: 'number | string', description: 'Height of the shape. Can be a number (pixels) or a string (any CSS unit).' },
];

</script>
