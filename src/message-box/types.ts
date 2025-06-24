export interface DialogProps {
	open: (openedBy?: HTMLElement) => Promise<void>;
	close: () => Promise<void>
}
