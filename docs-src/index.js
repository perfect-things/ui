import { mount } from 'svelte';
import { App } from './app';

export default mount(App, { target: document.getElementById('app'), });
