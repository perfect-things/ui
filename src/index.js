export * from './button/index.js';
export * from './button-group/index.js';
export * from './dialog/index.js';
export * from './drawer/index.js';
export * from './grid/index.js';
export * from './icon/index.js';
export * from './info-bar/index.js';
export * from './input/index.js';
export * from './menu/index.js';
export * from './message-box/index.js';
export * from './notification-center/index.js';
export * from './panel/index.js';
export * from './popover/index.js';
export * from './push-button/index.js';
export * from './splitter/index.js';
export * from './table/index.js';
export * from './tag/index.js';
export * from './tooltip/index.js';
export * from './tree/index.js';
export * from './utils.js';
import { isMobile } from './utils.js';

import './root.css';
import './theme-dark.css';
import './theme-light.css';

document.documentElement.classList.add(isMobile() ? 'mobile' : 'desktop');
