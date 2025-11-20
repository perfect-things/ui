import type { InputProps } from '../types';
import type { Datepicker } from 'vanillajs-datepicker';


type OrientationV = 'top' | 'bottom' | 'auto';
type OrientationH = 'left' | 'right' | 'auto';
type Orientation = 'auto' | `${OrientationH} ${OrientationV}`;

export interface InputDateProps extends InputProps {
	format?: string;				// 'yyyy-mm-dd'
	elevate?: boolean;				// if true, the datepicker will be elevated to the body
	showOnFocus?: boolean;			// if true, the datepicker will be shown on focus
	orientation?: Orientation;		// '[left|right|auto] [top|bottom|auto]'
	useNativeOnMobile?: boolean;	// if true, the native date input will be used on mobile devices
	onkeydown?: (e: KeyboardEvent, component: Datepicker) => void;
}
