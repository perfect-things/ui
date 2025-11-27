import { mount } from 'svelte';
import { App } from './app';


import '../src/root.css';
import '../src/theme-dark.css';
import '../src/theme-light.css';

export default mount(App, { target: document.getElementById('app'), });
