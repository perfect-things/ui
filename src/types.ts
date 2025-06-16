// Global type definitions for gradual TypeScript migration

// Basic event handler types
export type EventHandler<T = Event> = (e: T) => void | Promise<void>;

// Basic component props type (can be extended later)
export interface BaseProps {
	[key: string]: any;
}

// Utility types for gradual migration
export type TODO_TypeThis = any;
export type AnyFunction = (...a: any[]) => any;
export type AnyObject = Record<string, any>;
