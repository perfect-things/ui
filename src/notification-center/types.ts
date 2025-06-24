import type { ClassValue } from 'svelte/elements';


export interface NotificationCenterProps {
	class?: ClassValue;
	round?: boolean;
	outline?: boolean;
	hideButton?: boolean;
}



export interface NotificationArchiveProps {
	show?: boolean;
	expanded?: boolean;
}
