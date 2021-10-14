import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';


export default {
	input: 'src/index.js',
	output: {
		sourcemap: true,
		format: 'es',
		file: 'dist/index.js'
	},
	watch: {
		include: 'src/**',
		clearScreen: false
	},
	plugins: [
		svelte({ compilerOptions: { dev: true } }),
		resolve({
			browser: true,
			extensions: ['.mjs', '.js', '.json', '.svelte'],
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		commonjs(),
	]
};
