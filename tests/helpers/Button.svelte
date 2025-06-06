<Component {...rest}>{text}</Component>


<script>
/**
 * @typedef {Object} Props
 * @property {any} Component
 * @property {string} [text]
 */

/** @type {Props} */
const { Component, text = '', ...rest } = $props();
</script>
