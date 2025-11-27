import { mount } from 'svelte';
import { App } from './app';


import '../src/root.css';

export default mount(App, { target: document.getElementById('app'), });
