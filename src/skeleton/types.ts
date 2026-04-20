import type { ComponentProps } from '../types';


// Layouts & Containers
export type SkeletonContainer = Pick<ComponentProps, 'class' | 'children'>;

export interface SkeletonGridProps extends SkeletonContainer {
	size?: number | string;
}

export interface SkeletonRectProps extends SkeletonContainer {
	width?: number | string;
	height?: number | string;
}


// Shapes
type SkeletonShape = Pick<ComponentProps, 'class'>;

export interface SkeletonCircleProps extends SkeletonShape {
	size?: number | string;
}

export interface SkeletonTextProps extends SkeletonShape {
	size?: number | string;
}

export interface SkeletonImageProps extends SkeletonShape {
	width?: number | string;
	height?: number | string;
}
