import App from './app';
export default new App({ target: document.querySelector('#app') });

setTimeout(() => window.hljs.highlightAll(), 500);
