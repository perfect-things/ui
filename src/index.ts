export * from './button';
export * from './button-group';
export * from './dialog';
export * from './drawer';
export * from './grid';
export * from './icon';
export * from './info-bar';
export * from './input';
export * from './menu';
export * from './message-box';
export * from './notification-center';
export * from './panel';
export * from './popover';
export * from './push-button';
export * from './splitter';
export * from './table';
export * from './tag';
export * from './tooltip';
export * from './tree';
export * from './utils';
import { UI } from './utils';

import './root.css';
import './theme-dark.css';
import './theme-light.css';


document.documentElement.classList.add(UI.isMobile ? 'mobile' : 'desktop');
