// workaround for structuredClone not being available in JSDOM
window.structuredClone = (val) => JSON.parse(JSON.stringify(val));


export function waitForTimeout (timeout = 300) {
	return new Promise((resolve) => setTimeout(resolve, timeout));
}
