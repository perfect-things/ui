<a class:active={active === hash} href="#{hash}">{name}</a>

<script>
	/**
	 * @typedef {Object} Props
	 * @property {any} [active]
	 * @property {string} [name]
	 * @property {any} [hash]
	 */

	/** @type {Props} */
	const { active = location.hash.substr(1), name = '', hash = name.replace(/\s/g, '') } = $props();

</script>
