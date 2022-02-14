import App from './app/index.svelte';
export default new App({ target: document.querySelector('#app') });

if (module.hot) {
	module.hot.accept(function () {
		location.reload();
	});
}
