<h2>Skeleton</h2>

<p>Animated SVG placeholder for loading states. The component is responsive and fills its
container — give the wrapper a width and height and the skeleton stretches to match.
Six built-in templates cover common cases; drop down to <code>template="custom"</code> with
the primitive and template components for anything bespoke.</p>

<h3>Skeleton Shapes</h3>

<h4>Rectangle</h4>
<SkeletonRectProps width={200} height={100} />

<h4>Circle</h4>
<SkeletonCircleProps size={60} />

<h4>Text</h4>
<SkeletonTextProps size={3} />

<h4>Image</h4>
<SkeletonImageProps />



<h3>Skeleton Layouts</h3>

<h4>SkeletonHStack</h4>
<SkeletonHStack>
	<SkeletonCircleProps />
	<SkeletonCircleProps />
	<SkeletonCircleProps />
	<SkeletonCircleProps />
</SkeletonHStack>


<h4>SkeletonVStack</h4>
<SkeletonVStack>
	<SkeletonCircleProps />
	<SkeletonCircleProps />
	<SkeletonCircleProps />
</SkeletonVStack>


<h4>SkeletonGrid</h4>
<SkeletonGridProps size={120}>
	<SkeletonRectProps height={100} />
	<SkeletonRectProps height={100} />
	<SkeletonRectProps height={100} />
	<SkeletonRectProps height={100} />
	<SkeletonRectProps height={100} />
	<SkeletonRectProps height={100} />
	<SkeletonRectProps height={100} />
	<SkeletonRectProps height={100} />
</SkeletonGridProps>


<h3>Custom build</h3>

<h4>Cards list</h4>
<SkeletonVStack class="skeleton-cards">
	<SkeletonHStack>
		<SkeletonCircleProps />
		<SkeletonTextProps size={3} />
	</SkeletonHStack>
	<SkeletonHStack>
		<SkeletonCircleProps />
		<SkeletonTextProps size={3} />
	</SkeletonHStack>
</SkeletonVStack>


<h4>Cards grid</h4>
{#snippet card()}
	<SkeletonVStack>
		<SkeletonHStack>
			<SkeletonImageProps width="3.9em" height="3.9em" />
			<SkeletonTextProps size={3} />
		</SkeletonHStack>
		<SkeletonTextProps size={3} />
	</SkeletonVStack>
{/snippet}

<SkeletonGridProps class="skeleton-cards">
	{@render card()}
	{@render card()}
	{@render card()}
	{@render card()}
	{@render card()}
	{@render card()}
</SkeletonGridProps>



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

import { SkeletonRectProps, SkeletonCircleProps, SkeletonTextProps, SkeletonImageProps, SkeletonHStack, SkeletonVStack, SkeletonGridProps } from '../../../src';


const shapeProps = <ApiProp[]>[
	PROPS.class,
	{ name: 'size', type: 'number', description: 'Shape-specific count (lines of text / size of the circle).' },
	{ name: 'width', type: 'number | string', description: 'Width of the shape. Can be a number (pixels) or a string (any CSS unit).' },
	{ name: 'height', type: 'number | string', description: 'Height of the shape. Can be a number (pixels) or a string (any CSS unit).' },
];

</script>
