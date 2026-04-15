import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Recursively finds files in a directory matching a given pattern.
 * @param {string} dir
 * @param {string} pattern
 * @return {string[]}
 */
function findFiles (dir, pattern) {
	const results = [];
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) results.push(...findFiles(full, pattern));
		else if (entry.endsWith(pattern)) results.push(full);
	}
	return results;
}

/**
 * Fixes svelte component paths in .d.ts.map files.
 * Svelte components have .svelte extensions, but the source map incorrectly points to .svelte.ts files.
 * @param {string} path
 * @returns {string}
 */
function fixPath (path) {
	return path.replace(/.*\/([^/]+)\.svelte\.ts$/, '$1.svelte');
}


for (const mapFile of findFiles('dist', '.d.ts.map')) {
	const map = JSON.parse(readFileSync(mapFile, 'utf8'));
	map.sources = map.sources.map(fixPath);
	writeFileSync(mapFile, JSON.stringify(map));
}
