<!--
@component ## SkeletonImage

A single rounded rectangle sized for image placeholders.
Has a photo icon centered in the middle.

@example
```svelte
<SkeletonImage width="100%" height={120}/>
```
-->

<Rect class={['skeleton-img', className]} {width} {height}>
	<Icon name="photo"/>
</Rect>

<script lang="ts">
import type { SkeletonImageProps } from '../types';
import './shapes.css';
import { Icon } from '../../icon';
import Rect from './Rect.svelte';

const {
	class: className = '',
	width = '100%',
	height = 120,
}: SkeletonImageProps = $props();

</script>
